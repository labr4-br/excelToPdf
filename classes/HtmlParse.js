const ejs = require('ejs')

class HtmlParse{

    static async Parse(table){
        return await ejs.renderFile("./assets/table.ejs", {header:table.header, rows:table.row})
    }

}

module.exports = HtmlParse;