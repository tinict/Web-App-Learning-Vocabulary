'use strict';

export const HeaderContent = () => {
    return `
        <div class='HeaderContent'>
            <div class='HeaderContent__left'>
                <span>Total: <div class="total"></div></span>
            </div>
            <div class='fromRandom'>
                <button type="submit" id="random">Random</button>
                <div class='textRandom'>
                </div>
            </div>
            <div class='navbtn__icon HeaderContent__right'>
                <a href="#" class='btnAddNewVoca'>
                    <i class="fa-solid fa-square-plus"></i>
                </a>
            </div>
        </div>
    `
};
