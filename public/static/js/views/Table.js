'use strict';

export const Table = () => {
    return `
    <table>
      <thead>
        <tr>
          <th style="width:5px">STT</th>
          <th>Tên từ</th>
          <th>Nghĩa từ</th>
          <th> </th>
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
        <td data-column="STT">${index+1}</td>
        <td data-column="Tên từ">${item.Vocabulary}</td>
        <td data-column="Nghĩa từ">${item.Mean}</td>
        <td >
          <button class="del" ><i class="fa-solid fa-delete-left"></i></button>
        </td>
      </tr>
    `;
  }).join('');
};
