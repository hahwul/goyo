/**
 * Creates a debounced version of a function that delays execution
 * until after wait milliseconds have elapsed since the last call.
 * @param {Function} func - The function to debounce
 * @param {number} wait - The debounce delay in milliseconds
 * @returns {Function} The debounced function
 */
function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const context = this;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}

/**
 * Creates a teaser/excerpt from body text, highlighting search terms.
 * @param {string} body - The full text to create a teaser from
 * @param {string[]} terms - Array of search terms to highlight
 * @returns {string} HTML string with highlighted teaser
 */
function makeTeaser(body, terms) {
  const TERM_WEIGHT = 40;
  const NORMAL_WORD_WEIGHT = 2;
  const FIRST_WORD_WEIGHT = 8;
  const TEASER_MAX_WORDS = 30;

  const stemmedTerms = terms.map(w => w.toLowerCase());
  let termFound = false;
  let index = 0;
  const weighted = []; // contains elements of ["word", weight, index_in_document]

  const sentences = body.toLowerCase().split(". ");

  for (const sentence of sentences) {
    const words = sentence.split(" ");
    let value = FIRST_WORD_WEIGHT;

    for (const word of words) {
      if (word.length > 0) {
        for (const stemmedTerm of stemmedTerms) {
          if (word.toLowerCase().startsWith(stemmedTerm)) {
            value = TERM_WEIGHT;
            termFound = true;
          }
        }
        weighted.push([word, value, index]);
        value = NORMAL_WORD_WEIGHT;
      }

      index += word.length;
      index += 1; // ' ' or '.' if last word in sentence
    }

    index += 1; // because we split at a two-char boundary '. '
  }

  if (weighted.length === 0) {
    return body;
  }

  const windowWeights = [];
  const windowSize = Math.min(weighted.length, TEASER_MAX_WORDS);
  let curSum = 0;
  
  for (let i = 0; i < windowSize; i++) {
    curSum += weighted[i][1];
  }
  windowWeights.push(curSum);

  for (let i = 0; i < weighted.length - windowSize; i++) {
    curSum -= weighted[i][1];
    curSum += weighted[i + windowSize][1];
    windowWeights.push(curSum);
  }

  let maxSumIndex = 0;
  if (termFound) {
    let maxFound = 0;
    for (let i = windowWeights.length - 1; i >= 0; i--) {
      if (windowWeights[i] > maxFound) {
        maxFound = windowWeights[i];
        maxSumIndex = i;
      }
    }
  }

  const teaser = [];
  let startIndex = weighted[maxSumIndex][2];
  
  for (let i = maxSumIndex; i < maxSumIndex + windowSize; i++) {
    const word = weighted[i];
    if (startIndex < word[2]) {
      teaser.push(body.substring(startIndex, word[2]));
      startIndex = word[2];
    }

    if (word[1] === TERM_WEIGHT) {
      teaser.push("<b>");
    }
    startIndex = word[2] + word[0].length;
    teaser.push(body.substring(word[2], startIndex));

    if (word[1] === TERM_WEIGHT) {
      teaser.push("</b>");
    }
  }
  teaser.push("…");
  return teaser.join("");
}

/**
 * Formats a single search result item as a list element.
 * @param {Object} item - The search result item from Fuse.js
 * @param {string[]} terms - Array of search terms for highlighting
 * @returns {HTMLElement} The formatted list item element
 */
function formatSearchResultItem(item, terms) {
  const li = document.createElement("li");
  li.className = "search-result-item";
  li.innerHTML = `
    <a href="${item.item.id}" class="search-result-link block px-4 py-3 rounded-lg hover:bg-base-200/50 transition-colors duration-150 border-gray-500/15">
      <div class="flex items-start gap-3">
        <div class="search-result-icon flex-shrink-0 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="search-result-title font-semibold text-sm text-base-content mb-1">${item.item.title}</div>
          <div class="search-result-excerpt text-xs text-base-content/60 line-clamp-2">${makeTeaser(item.item.body, terms)}</div>
        </div>
        <div class="search-result-arrow flex-shrink-0 opacity-0 transition-opacity duration-150">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  `;

  // Add hover effect for the arrow
  const link = li.querySelector(".search-result-link");
  const arrow = li.querySelector(".search-result-arrow");
  
  link.addEventListener("mouseenter", () => {
    arrow.style.opacity = "1";
  });
  
  link.addEventListener("mouseleave", () => {
    arrow.style.opacity = "0";
  });

  return li;
}

/**
 * Initializes the search functionality with Fuse.js.
 * Sets up search input handling, keyboard navigation, and modal controls.
 */
function initSearch() {
  const MAX_ITEMS = 10;
  const DEBOUNCE_DELAY = 150;
  const FOCUS_DELAY = 100;
  const FUSE_THRESHOLD = 0.4;
  
  const $searchInput = document.getElementById("search");
  if (!$searchInput) {
    return;
  }

  const $searchResultsContainer = document.querySelector(".search-results-container");
  const $searchResultsHeader = document.querySelector(".search-results__header");
  const $searchResultsItems = document.querySelector(".search-results__items");
  let selectedIndex = -1;

  const options = {
    keys: [
      { name: "title", weight: 2 },
      { name: "body", weight: 1 },
      { name: "tags", weight: 1 },
    ],
    includeScore: true,
    ignoreLocation: true,
    threshold: FUSE_THRESHOLD,
  };
  
  let currentTerm = "";
  const documents = Object.values(window.searchIndex.documentStore.docs);
  const fuse = new Fuse(documents, options);

  function updateSelectedResult() {
    const items = $searchResultsItems.querySelectorAll(".search-result-item");
    items.forEach((item, index) => {
      const link = item.querySelector(".search-result-link");
      if (index === selectedIndex) {
        link.classList.add("border");
      } else {
        link.classList.remove("border");
      }
    });

    // Scroll selected item into view
    if (selectedIndex >= 0 && items[selectedIndex]) {
      items[selectedIndex].scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }

  $searchInput.addEventListener(
    "keyup",
    debounce(() => {
      const term = $searchInput.value.trim();
      if (term === currentTerm || !fuse) {
        return;
      }
      
      $searchResultsItems.innerHTML = "";
      $searchResultsHeader.innerHTML = "";
      selectedIndex = -1;

      if (term === "") {
        currentTerm = "";
        return;
      }

      const results = fuse.search(term).filter(r => r.item.body !== "");

      if (results.length === 0) {
        $searchResultsHeader.innerHTML = `<span class="text-base-content/60">No results found for <strong class="text-base-content">"${term}"</strong></span>`;
        return;
      }

      currentTerm = term;
      $searchResultsHeader.innerHTML = `<span class="text-base-content/60">${results.length} result${results.length === 1 ? "" : "s"} for <strong class="text-base-content">"${term}"</strong></span>`;
      
      for (let i = 0; i < Math.min(results.length, MAX_ITEMS); i++) {
        if (!results[i].item.body) {
          continue;
        }
        $searchResultsItems.appendChild(
          formatSearchResultItem(results[i], term.split(" ")),
        );
      }
    }, DEBOUNCE_DELAY),
  );

  // Focus search input when modal is opened
  const searchModal = document.getElementById("search-modal");
  const modalBackdrop = document.querySelector(".modal");

  if (searchModal) {
    searchModal.addEventListener("change", function () {
      if (this.checked) {
        setTimeout(() => {
          $searchInput.focus();
        }, FOCUS_DELAY);
      } else {
        // Clear search when modal is closed
        $searchInput.value = "";
        $searchResultsItems.innerHTML = "";
        $searchResultsHeader.innerHTML = "";
        currentTerm = "";
        selectedIndex = -1;
      }
    });
  }

  // Handle click outside modal to close it
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      // Close modal if clicking on the backdrop (not on modal-box)
      if (e.target === modalBackdrop && searchModal.checked) {
        searchModal.checked = false;
      }
    });
  }

  // Handle keyboard navigation
  $searchInput.addEventListener("keydown", (e) => {
    const items = $searchResultsItems.querySelectorAll(".search-result-item");

    if (e.key === "Escape") {
      searchModal.checked = false;
      return;
    }

    if (items.length === 0) {
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
      updateSelectedResult();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, -1);
      updateSelectedResult();
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      const link = items[selectedIndex].querySelector(".search-result-link");
      if (link) {
        window.location.href = link.getAttribute("href");
      }
    }
  });
}

/**
 * Initializes theme switching functionality.
 * Manages theme state in localStorage and applies theme to document.
 */
function initTheme() {
  const themeController = document.querySelector(".theme-controller");
  if (!themeController) {
    return;
  }

  // Theme mapping - maps user-friendly names to actual DaisyUI theme names
  const themeMapping = {
    "goyo-dark": "night",
    "goyo-light": "lofi",
  };

  // Reverse mapping for checking current theme
  const reverseThemeMapping = {
    night: "goyo-dark",
    lofi: "goyo-light",
  };

  const fallbackTheme = window?.fallbackTheme || "goyo-dark";
  const currentUserTheme = localStorage.getItem("theme") || fallbackTheme;

  // Map user theme to actual DaisyUI theme
  const actualTheme = themeMapping[currentUserTheme] || currentUserTheme;
  document.documentElement.setAttribute("data-theme", actualTheme);
  
  // Note: brightness attribute is already set in head.html to prevent FOUC

  // Set checkbox state based on current theme
  themeController.checked = currentUserTheme === "goyo-dark";

  themeController.addEventListener("change", (e) => {
    const userTheme = e.target.checked ? "goyo-dark" : "goyo-light";
    const actualTheme = themeMapping[userTheme];

    document.documentElement.setAttribute("data-theme", actualTheme);
    localStorage.setItem("theme", userTheme); // Store user-friendly name
  });
}

/**
 * Initializes Table of Contents functionality.
 * Sets up intersection observer for active link highlighting and auto-scroll.
 */
function initToc() {
  const headings = document.querySelectorAll(
    ".prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6",
  );
  const tocLinks = document.querySelectorAll(".toc-link");
  const tocDetails = document.querySelectorAll(".toc-details");

  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px 0px -50% 0px", // Trigger when 50% of the element is visible
    threshold: 0, // Trigger as soon as any part of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const correspondingLink = document.querySelector(
        `.toc-link[href="#${id}"]`,
      );

      if (entry.isIntersecting) {
        // Remove active class from all links and close all details
        tocLinks.forEach((link) => link.classList.remove("active"));
        tocDetails.forEach((detail) => (detail.open = false));

        // Add active class to the current link
        if (correspondingLink) {
          correspondingLink.classList.add("active");
          let parentDetails = correspondingLink.closest("details");
          while (parentDetails) {
            parentDetails.open = true;
            parentDetails = parentDetails.parentElement.closest("details");
          }
        }
      }
    });
  }, observerOptions);

  headings.forEach((heading) => {
    observer.observe(heading);
  });

  // Handle initial state on load
  // Find the first heading in view and activate its TOC link
  const firstVisibleHeading = Array.from(headings).find((heading) => {
    const rect = heading.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
  });

  if (firstVisibleHeading) {
    const id = firstVisibleHeading.getAttribute("id");
    const correspondingLink = document.querySelector(
      `.toc-link[href="#${id}"]`,
    );
    if (correspondingLink) {
      correspondingLink.classList.add("active");
      let parentDetails = correspondingLink.closest("details");
      while (parentDetails) {
        parentDetails.open = true;
        parentDetails = parentDetails.parentElement.closest("details");
      }
    }
  }
}

/**
 * Initializes KaTeX math rendering for inline and block math elements.
 */
function initMath() {
  // Render all inline math elements
  const mathElements = document.querySelectorAll(".katex-inline");
  mathElements.forEach((element) => {
    const formula = element.textContent;
    try {
      katex.render(formula, element, {
        throwOnError: false,
        displayMode: false,
      });
    } catch (e) {
      console.error("KaTeX rendering error:", e);
    }
  });

  // Render all block math elements
  const blockMathElements = document.querySelectorAll(".katex-block");
  blockMathElements.forEach((element) => {
    const formula = element.textContent;
    try {
      katex.render(formula, element, {
        throwOnError: false,
        displayMode: true,
      });
    } catch (e) {
      console.error("KaTeX rendering error:", e);
    }
  });
}

/**
 * Main initialization - runs when DOM is ready.
 * Initializes all theme features: search, theme switching, TOC, and math rendering.
 */
document.addEventListener("DOMContentLoaded", () => {
  initSearch();
  initTheme();
  initToc();
  initMath();

  // Global keyboard shortcut for search (Cmd/Ctrl + K)
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
      event.preventDefault();
      const searchModal = document.getElementById("search-modal");
      if (searchModal) {
        searchModal.checked = !searchModal.checked;
        searchModal.dispatchEvent(new Event("change"));
      }
    }
  });
});
