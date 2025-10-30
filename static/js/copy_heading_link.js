/**
 * Adds copy link buttons to all headings with IDs.
 * When clicked, copies the heading URL to clipboard.
 */
document.addEventListener("DOMContentLoaded", () => {
  const SCALE_ANIMATION_DURATION = 200;
  const LINK_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>';
  
  const headings = document.querySelectorAll(
    "h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]",
  );

  headings.forEach((heading) => {
    // Store original heading content
    const originalContent = heading.innerHTML;
    
    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.className = "copy-heading-link-button";
    link.setAttribute("aria-label", "Copy link to this heading");
    link.innerHTML = LINK_ICON_SVG;

    link.addEventListener("click", async (event) => {
      event.preventDefault();
      
      try {
        const url = new URL(link.href, window.location.href).toString();
        await navigator.clipboard.writeText(url);
        
        // Visual feedback animation
        link.style.transform = "scale(1.2)";
        setTimeout(() => {
          link.style.transform = "scale(1.05)";
        }, SCALE_ANIMATION_DURATION);
      } catch (err) {
        console.error("Failed to copy URL:", err);
      }
    });

    // Create a wrapper span for the original heading text
    const textSpan = document.createElement("span");
    textSpan.innerHTML = originalContent;
    
    // Clear heading and add text span + link button
    heading.innerHTML = "";
    heading.appendChild(textSpan);
    heading.appendChild(link);
  });
});
