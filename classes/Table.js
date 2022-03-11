class Table{

    constructor(arr){
        this.header = arr[0];
        arr.shift();
        this.row = arr;
    }

    get getRowCount(){
        return this.row.length;
    }

    get getColumnCount(){
        return this.header.length;
    }
}

module.exports = Table;