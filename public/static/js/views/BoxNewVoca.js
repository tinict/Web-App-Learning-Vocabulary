'use strict';

export const BoxNewVoca = () => {
    return `
        <div class='BoxInputVoca'>
            <h1 class='BoxInputVoca__title'>Add New Vocabulary</h1>
            <div class='form__inputVoca'>
                <span>Từ mới:</span>
                <input class='NewWord' type='text'>
            </div>
            <div class='form__inputVoca'>
                <span>Nghĩa từ:</span>
                <input class='MeanWord' type='text'>
            </div>
            <div class='btngroup'>
                <button class='btnvoca btnCancelVoca' type='button'>Đóng</button>
                <button class='btnvoca btnAddVoca' type='button'>Thêm từ</button>
            </div>
        </div>
    `
};