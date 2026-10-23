const copyButton = document.querySelector('[data-copy-prompt]');
const promptText = document.querySelector('#prompt-text');
const copyStatus = document.querySelector('[data-copy-status]');

async function copyPrompt() {
  const text = promptText.textContent;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(promptText);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
  copyButton.textContent = 'Скопировано';
  copyStatus.textContent = 'Промпт скопирован в буфер обмена.';
  window.setTimeout(() => {
    copyButton.textContent = 'Скопировать';
    copyStatus.textContent = '';
  }, 2400);
}

copyButton.addEventListener('click', copyPrompt);
