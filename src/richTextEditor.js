export function theBestRichTextEditor() {
    const theBestRichTestEditorId = 'the-best-rich-text-editor';
    
    const container = document.getElementById(theBestRichTestEditorId);
    const richTextEditor = document.createElement('div');

    const textOptions = [];

    [...Array(6).keys()].forEach(() => {
        const button = document.createElement('button');
        textOptions.push(button);
    });

    const buttonsOptionsSection = document.createElement('section');
    buttonsOptionsSection.classList.add('rich-text-options');

    textOptions.forEach( textOptionsButton => buttonsOptionsSection.append(textOptionsButton));
    richTextEditor.appendChild(buttonsOptionsSection);

    container.appendChild(richTextEditor);
}
