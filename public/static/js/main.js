'use strict';
import { Content } from './views/Content.js';
import { Header } from './views/Header.js';
import { RenderTableData } from './views/Table.js';
import { Template } from './views/Template.js';

console.log('Test loading app');

const app = () => {
    return `
        <div class="container">
            ${Header()}
            ${Content()}
            ${Template()}
        </div>
    `
};

const rootElement = document.getElementById('root');
console.log(rootElement);
rootElement.innerHTML = app();

const arr = [];

//function update data table Vocabulary
const UDT_Vocabulary = () => {
    const ElementtblVocabulary = document.querySelector('.tblVocabulary');
    console.log(ElementtblVocabulary);
    ElementtblVocabulary.innerHTML = RenderTableData(arr);
}

UDT_Vocabulary();

const btnAddNewVoca = document.querySelector('.btnAddNewVoca');
console.log(btnAddNewVoca);

btnAddNewVoca.onclick = () => {
    console.log('Active');
    const templateElement = document.querySelector('.template');
    console.log(templateElement);
    templateElement.classList.toggle('displayEnabled');
}

const btnCancelVoca = document.querySelector('.btnCancelVoca');
btnCancelVoca.onclick = () => {
    const templateElement = document.querySelector('.template');
    console.log(templateElement);
    templateElement.classList.remove('displayEnabled');
    templateElement.classList.add('displayDisabled');
};

// Data table Vocabulary
const itemWord = (Vocabulary, Mean) => {
    return {
        Vocabulary: Vocabulary,
        Mean: Mean
    };
};

const btnAddVoca = document.querySelector('.btnAddVoca');
console.log(btnAddVoca);
btnAddVoca.onclick = () => {
    console.log('Add Successfull');
    const newWordElement = document.querySelector('.NewWord');
    const meanWordElement = document.querySelector('.MeanWord');
    arr.push(itemWord(newWordElement.value, meanWordElement.value));
    const templateElement = document.querySelector('.template');
    newWordElement.value = '';
    meanWordElement.value = '';
    UDT_Vocabulary();
};

