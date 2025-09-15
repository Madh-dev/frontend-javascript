// import { RowID, RowElement } from './interface';


// declare module './crud' {
// export function insertRow(row: RowElement): RowID;
// export function deleteRow(rowId: RowID): void;
// export function updateRow(rowId: RowID, row: RowElement): RowID;
// }

import { RowID, RowElement } from './interface';

// declare function insertRow(row: RowElement): RowID;
declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;

export { insertRow, deleteRow, updateRow };
