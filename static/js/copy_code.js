/**
 * Adds copy buttons to all code blocks in the page.
 * The button appears on hover and copies the code content to clipboard.
 */
document.addEventListener('DOMContentLoaded', () => {
    const BUTTON_RESET_DELAY = 2000;
    const BUTTON_TEXT = {
        default: 'Copy',
        success: 'Copied!'
    };

    document.querySelectorAll('pre > code').forEach((codeBlock) => {
        const pre = codeBlock.parentNode;
        const button = document.createElement('button');
        
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = BUTTON_TEXT.default;
        button.setAttribute('aria-label', 'Copy code to clipboard');

        button.addEventListener('click', async () => {
            try {
                const textToCopy = codeBlock.innerText;
                await navigator.clipboard.writeText(textToCopy);
                
                button.innerText = BUTTON_TEXT.success;
                setTimeout(() => {
                    button.innerText = BUTTON_TEXT.default;
                }, BUTTON_RESET_DELAY);
            } catch (err) {
                console.error('Failed to copy text:', err);
            }
        });

        pre.appendChild(button);
    });
});
