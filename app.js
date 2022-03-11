const reader = require('./classes/Reader');
const processor = require('./classes/Processor');
const table = require('./classes/Table');
const htmlParse = require('./classes/HtmlParse')
const write = require('./classes/Write');
const writepdf = require('./classes/WritePdf');

let escritor = new write();
let leitor = new reader();

async function main(file) {
    let dados = await leitor.read('./excel/' + file + '.csv');
    let data = processor.process(dados);   
    let dataTable = new table(data);
    let html = await htmlParse.Parse(dataTable);
    
    escritor.writefile(`./html/table${Date.now()}.html`, html)  
    writepdf.toPdf(`./pdf/table${Date.now()}.pdf`, html)
}

main('notas');