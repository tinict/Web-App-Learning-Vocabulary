'use strict';

import { HeaderContent } from "./HeaderContent.js";
import { Table } from "./Table.js";

export const Content = () => {
    return `
    <div class='content'>
        ${HeaderContent()}
        ${Table()}
    </div>
    `
};