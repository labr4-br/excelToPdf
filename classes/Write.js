const fs = require('fs');
const util = require('util');

class Write{
    
    constructor() {
        this.fs = util.promisify(fs.writeFile);    
    }

    async writefile(fileName, data){
        try {
            await this.fs(fileName, data)
            return true
        } catch (error) {
            return false
        }
    }
}

module.exports = Write;