const fs = require('fs');
const util = require('util');

class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile);
    }

    async read(path){
       try {
           return await this.reader(path, {encoding: 'utf-8'});
       } catch (error) {
           return undefined;
       }
    }

    // read(path){
    //     fs.readFile(path, {encoding:'utf-8'}, (erro, data)=>{
    //         if (erro) {
    //             console.error(erro);
    //         } else {
    //             console.log(data);
    //         }
    //     })
    // }
}

module.exports = Reader;