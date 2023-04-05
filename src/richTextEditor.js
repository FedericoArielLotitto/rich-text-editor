function insertOptionsIcons(buttons) {
    buttons[0].textContent = 'B';
    buttons[1].textContent = 'I';
}

export function theBestRichTextEditor() {
    const theBestRichTestEditorId = 'the-best-rich-text-editor';
    
    const container = document.getElementById(theBestRichTestEditorId);
    const richTextEditor = document.createElement('div');

    const textOptions = [];

    createOptions();
    insertOptionsIcons(textOptions);

    const buttonsOptionsSection = document.createElement('section');
    buttonsOptionsSection.classList.add('rich-text-options');

    textOptions.forEach( textOptionsButton => buttonsOptionsSection.append(textOptionsButton));
    richTextEditor.appendChild(buttonsOptionsSection);

    container.appendChild(richTextEditor);

    function createOptions() {
        [...Array(2).keys()].forEach(() => {
            const button = document.createElement('button');
            textOptions.push(button);
        });
    }
}
