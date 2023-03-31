import { describe, it, vi, expect, beforeEach } from 'vitest';

import fs from 'fs';
import path from 'path';

import { Window } from 'happy-dom';
import { theBestRichTextEditor } from '../src/richTextEditor.js';

const theBestRichTextEditorId = "the-best-rich-test-editor";

const htmlDocPath = path.join(__dirname, 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();
const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
});

it('Given html node with an id="the-best-rich-test-editor", it injects a div in the html node', () => {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.setAttribute('id', theBestRichTextEditorId);
    body.appendChild(container);

    theBestRichTextEditor();

    expect(body).not.toBeNull();
    expect(container).not.toBeNull();
    expect(container.innerHTML).not.toBeNull();
});