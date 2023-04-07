import { describe, it, vi, expect, beforeEach } from 'vitest';

import fs from 'fs';
import path from 'path';

import { Window } from 'happy-dom';
import { theBestRichTextEditor } from '../src/richTextEditor.js';

const theBestRichTextEditorId = "the-best-rich-text-editor";

const htmlDocPath = path.join(__dirname, 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();
const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
    console.log(document.body.innerHTML);
});

it('Given html node with an id="the-best-rich-test-editor", it injects a div in the html node', () => {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.setAttribute('id', theBestRichTextEditorId);
    body.appendChild(container);

    theBestRichTextEditor();

    expect(document.getElementById(theBestRichTextEditorId).innerHTML.length).toBeGreaterThan(0);
});

it('Given html node with an id="the-best-rich-test-editor", it injects a text area in the html node with 4 default rows', () => {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.setAttribute('id', theBestRichTextEditorId);
    body.appendChild(container);

    theBestRichTextEditor();

    expect(document.querySelector('#the-best-rich-text-editor textarea')).not.toBeNull();
    expect(document.querySelector('#the-best-rich-text-editor textarea').getAttribute('rows')).toBe('4');
});

it('Given html node with and id="the-best-rich-test-editor", it injects the options for editing in the html node', () => {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.setAttribute('id', theBestRichTextEditorId);
    body.appendChild(container);
    
    theBestRichTextEditor();
    
    const options = document.getElementsByClassName('rich-text-options');
    const optionsFromParent = document.querySelector('#the-best-rich-text-editor button');
    expect(options).not.toBeNull();
    expect(document.querySelector('.rich-text-options').childNodes).toContain(optionsFromParent);
});

it('Given html node with and id="the-best-rich-test-editor", it injects the options for editing with "B" letter in the first option', () => {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.setAttribute('id', theBestRichTextEditorId);
    body.appendChild(container);
    
    theBestRichTextEditor();

    const optionsFromParent = document.querySelector('#the-best-rich-text-editor button');
    expect(document.querySelector('.rich-text-options').childNodes).toContain(optionsFromParent);
    const buttonText = document.querySelector('.rich-text-options').firstChild.textContent;
    expect(buttonText).toEqual('B');
});

it('Given html node with and id="the-best-rich-test-editor", it injects the options for editing with "I" letter in the second option', () => {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.setAttribute('id', theBestRichTextEditorId);
    body.appendChild(container);
    
    theBestRichTextEditor();

    const optionsFromParent = document.querySelector('#the-best-rich-text-editor button');
    expect(document.querySelector('.rich-text-options').childNodes).toContain(optionsFromParent);
    expect(document.querySelector('.rich-text-options').childNodes[1].textContent).toEqual('I');
});

it('Given html node with id="the-best-rich-text-editor", it injects two sections, one for the options buttons and other for the text area', () => {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.setAttribute('id', theBestRichTextEditorId);
    body.appendChild(container);

    theBestRichTextEditor();

    const richTextEditor = document.querySelector(`#${theBestRichTextEditorId} div`);
    expect(richTextEditor.childNodes.length).toEqual(2);
});