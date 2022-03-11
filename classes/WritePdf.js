const pdf = require('html-pdf');

class WritePdf{

    static toPdf(fileName, data){
        pdf.create(data, {}).toFile(fileName, error => console.error(error));
    }

}

module.exports = WritePdf;