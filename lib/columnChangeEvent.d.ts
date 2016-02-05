// Type definitions for ag-grid v3.3.0-alpha.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import Column from "./entities/column";
import ColumnGroup from "./entities/columnGroup";
export default class ColumnChangeEvent {
    private type;
    private column;
    private columns;
    private columnGroup;
    private fromIndex;
    private toIndex;
    private finished;
    private visible;
    private pinned;
    constructor(type: string);
    toString(): string;
    withPinned(pinned: string): ColumnChangeEvent;
    withVisible(visible: boolean): ColumnChangeEvent;
    isVisible(): boolean;
    getPinned(): string;
    withColumn(column: Column): ColumnChangeEvent;
    withColumns(columns: Column[]): ColumnChangeEvent;
    withFinished(finished: boolean): ColumnChangeEvent;
    withColumnGroup(columnGroup: ColumnGroup): ColumnChangeEvent;
    withFromIndex(fromIndex: number): ColumnChangeEvent;
    withToIndex(toIndex: number): ColumnChangeEvent;
    getFromIndex(): number;
    getToIndex(): number;
    getType(): string;
    getColumn(): Column;
    getColumns(): Column[];
    getColumnGroup(): ColumnGroup;
    isRowGroupChanged(): boolean;
    isValueChanged(): boolean;
    isIndividualColumnResized(): boolean;
    isFinished(): boolean;
}