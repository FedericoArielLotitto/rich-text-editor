function insertOptionsIcons(buttons) {
    buttons[0].textContent = 'B';
    buttons[1].textContent = 'I';
}

export function theBestRichTextEditor() {
    const THE_BEST_RICH_TEST_EDITOR_ID = 'the-best-rich-text-editor';
    const TEXT_OPTIONS = [];

    const container = document.getElementById(THE_BEST_RICH_TEST_EDITOR_ID);
    const richTextEditor = document.createElement('div');

    createOptions();
    insertOptionsIcons(TEXT_OPTIONS);

    richTextEditor.appendChild(createOptionsButtonsSection());
    richTextEditor.appendChild(createTextEditionArea());

    container.appendChild(richTextEditor);
    function createOptions() {
        [...Array(2).keys()].forEach(() => {
            const button = document.createElement('button');
            TEXT_OPTIONS.push(button);
        });
    }

    function createOptionsButtonsSection() {
        const containerOptionsButtonsSection = document.createElement('section');
        containerOptionsButtonsSection.classList.add('container-rich-text-options');
        const buttonsOptionsSection = document.createElement('section');
        buttonsOptionsSection.classList.add('rich-text-options');
        TEXT_OPTIONS.forEach(textOptionsButton => buttonsOptionsSection.append(textOptionsButton));
        containerOptionsButtonsSection.append(buttonsOptionsSection);
        return containerOptionsButtonsSection;
    }

    function createTextEditionArea() {
        const containerTextArea = document.createElement('section');
        containerTextArea.classList.add('container-rich-text-area');
        const textArea = document.createElement('textarea');
        textArea.classList.add('rich-text-area');
        textArea.setAttribute('rows', '4');
        containerTextArea.append(textArea);
        return containerTextArea;
    }
}
