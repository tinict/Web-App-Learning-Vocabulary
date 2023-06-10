'use strict';

export const Header = () => {
    return `
        <header>
            <div class='navigation'>
                <div class='nav__lef'>
                    <a class='navbtn__icon' href='#'>
                        <i class="fa-solid fa-house"></i>
                    </a>
                    <h1 class='nav__title'>Vocabulary App</h1>
                </div>
                <div class='nav__right'>
                    <a class='navbtn__icon' href='#'>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </a>
                </div>
            </div>
        </header>
    `
};