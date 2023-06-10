'use strict';
import { Content } from './views/Content.js';
import { Header } from './views/Header.js';
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

const btnAddNewVoca = document.querySelector('.btnAddNewVoca');
console.log(btnAddNewVoca);
// btnAddNewVoca.classList.toggle('displayNone');
// const templateElement = document.querySelector('.template');
// console.log(templateElement);

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