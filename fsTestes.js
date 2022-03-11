const fs = require('fs');
const crypto = require("crypto");


const param_cripto = {
    algoritmo : "aes256",
    segredo : "chave445",
    tipo : "hex"
};

function criptografar(senha) {
	const cipher = crypto.createCipher(param_cripto.algoritmo, param_cripto.segredo);
	cipher.update(senha);
	return cipher.final(param_cripto.tipo);
};

function descriptografar(senha) {
	const decipher = crypto.createDecipher(param_cripto.algoritmo, param_cripto.segredo);
	decipher.update(senha, param_cripto.tipo);
	return decipher.final();
};

function updateCredential(login, password) {
    fs.readFile('./dataTest/data.json', {encoding: 'utf-8'}, (erro, data)=>{
        if (erro) console.error(erro);

        let user = JSON.parse(data)
        user.password = descriptografar(user.password).toString('utf-8');
        console.log(user);
        
        user.login = login;
        user.password = criptografar(password);

        fs.writeFile('./dataTest/data.json', JSON.stringify(user), erro =>{
            if(erro) console.log(erro);
        })
        console.log(user);
    })
}

updateCredential("user", "minhasenha5");

