class Processor{

    static process(data){
        let newdata = data.split("\r\n")
        let rows = [];

        newdata.forEach(element => {
            rows.push(element.split(","));
        });
        
        return rows;
    }
}

module.exports = Processor;