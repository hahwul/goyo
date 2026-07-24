const translator = (key) => (window.GOYO_CONFIG?.i18n?.[key] ?? key);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre > code').forEach((codeBlock) => {
        const pre = codeBlock.parentNode;
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = translator("copy");

        button.addEventListener('click', () => {
            const textToCopy = codeBlock.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                button.innerText = translator("copied");
                setTimeout(() => {
                    button.innerText = translator("copy");
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });

        pre.appendChild(button);
    });
});

function copyToClipboard(text, button) {
    if (!navigator.clipboard) {
        // Fallback for very old browsers or non-HTTPS
        alert("Clipboard not supported in this browser.");
        return;
    }

    navigator.clipboard.writeText(text).then(function () {
        // Visual feedback
        let originalText = button.innerText;
        button.innerText = translator("copied");
        button.classList.add("btn-success"); // Green color if using daisyUI/Tailwind

        setTimeout(() => {
            button.innerText = originalText;
            button.classList.remove("btn-success");
        }, 2000);

    }).catch(function () {
        // ERROR STATE (Generic)
        let originalText = button.innerText;
        button.innerText = translator("failed_to_copy");
        button.classList.remove("btn-primary");
        button.classList.add("btn-error"); // Green color if using daisyUI/Tailwind

        setTimeout(() => {
            button.innerText = originalText;
            button.classList.remove("btn-error");
            button.classList.add("btn-primary");
        }, 2000);
    });
}

// Display message when icon clicked
function copyToClipboardRSSIcon(text, button) {
    if (!navigator.clipboard) {
        // Fallback for very old browsers or non-HTTPS
        alert("Clipboard not supported in this browser.");
        return;
    }

    navigator.clipboard.writeText(text).then(function () {
        // SUCCESS STATE
        button.classList.add("btn-success");
        const feedback = document.createElement("span");
        feedback.innerText = translator("copied");
        feedback.className = "ml-2 text-sm text-success font-bold animate-in fade-in duration-300";
        button.parentNode.appendChild(feedback);
        button.disabled = true;

        setTimeout(() => {
            button.classList.remove("btn-success");
            feedback.classList.add("opacity-0", "transition-opacity", "duration-500");
            setTimeout(() => feedback.remove(), 500);
            button.disabled = false;
        }, 2000);

    }).catch(function () {
        // ERROR STATE (Generic)
        button.classList.add("btn-error"); // Red color in daisyUI
        const errorMsg = document.createElement("span");
        errorMsg.innerText = translator("failed_to_copy");
        errorMsg.className = "ml-2 text-sm text-error font-bold";
        button.parentNode.appendChild(errorMsg);
        button.disabled = true;

        setTimeout(() => {
            button.classList.remove("btn-error");
            errorMsg.remove();
            button.disabled = false;
        }, 2000);
    });
}

function copyURL(text, button) {
    if (!navigator.clipboard) {
        // Fallback for very old browsers or non-HTTPS
        alert("Clipboard not supported in this browser.");
        return;
    }

    navigator.clipboard.writeText(text).then(function () {
        // Visual feedback
        let originalText = button.innerText;
        button.innerText = translator("copied");

        setTimeout(() => {
            button.innerText = originalText;
        }, 2000);

    }).catch(function () {
        // ERROR STATE (Generic)
        let originalText = button.innerText;
        button.innerText = translator("failed_to_copy");

        setTimeout(() => {
            button.innerText = originalText;
        }, 2000);
    });
}
