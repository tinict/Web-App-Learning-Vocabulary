'use strict';

export const BoxNewVoca = () => {
    return `
        <div class='BoxInputVoca'>
            <h1 class='BoxInputVoca__title'>Add New Vocabulary</h1>
            <div class='form__inputVoca'>
                <span>New:</span>
                <input type='text'>
            </div>
            <div class='form__inputVoca'>
                <span>Mean:</span>
                <input type='text'>
            </div>
            <div class='btngroup'>
                <button class='btnvoca btnCancelVoca' type='button'>Cancel</button>
                <button class='btnvoca btnAddNewVoca' type='button'>Add New</button>
            </div>
        </div>
    `
};