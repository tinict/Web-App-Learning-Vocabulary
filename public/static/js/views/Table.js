'use strict';

export const Table = () => {
    return `
    <table>
      <thead>
        <tr>
          <th style="width:5px">ID</th>
          <th>Valcabulary</th>
          <th>Mean</th>
        </tr>
      </thead>
      <tbody class='tblVocabulary'>
      </tbody>
    </table>
    `
};

export const RenderTableData = (arr) => {
  return arr.map((item, index) => {
    return `
      <tr>
        <td data-column="ID">${index+1}</td>
        <td data-column="Valcabulary">${item.Vocabulary}</td>
        <td data-column="Mean">${item.Mean}</td>
      </tr>
    `;
  }).join('');
};
