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
      <tbody>
        <tr>
          <td data-column="ID">1</td>
          <td data-column="Valcabulary">Matman</td>
          <td data-column="Mean">Chief Sandwich Eater</td>
      </tbody>
    </table>
    `
};