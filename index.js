const express = require('express');
//Abrindo requisição para utilização
const cors = require('cors');
const api = express();

api.use(cors());
api.use(express.json());


//Para essa API serão utilizadas 3 rotas diferentes

//A primeira rota, para o cálculo de Juros simples
api.post('/calcjs', (request, response) => {
  //Pegando o corpo da requisição (o que for de campo dos formulários)
  const { valIniJS, txJurJS, numPJS } = request.params;
  let juros = Number(valIniJS) * (Number(txJurJS) / 100) * Number(numPJS);
  let montante = Number(valIniJS) + Number(juros);
  response.json({ montante });
});

//A segunda, para cálculo de juros compostos
api.post('/calcjc', (request, response) => {
  //Pegando o corpo da requisição (o que for de campo dos formulários)
  const { valIniJC, txJurJC, numPJC } = request.params;
  let montante = eval(
    Number(valIniJC) * Math.pow(1 + Number(txJurJC / 100), numPJC),
  );
  response.json({ montante });
});

//A terceira para cálculo de descontos
api.post('/calcdesc', (request, response) => {
  //Pegando o corpo da requisição (o que for de campo dos formulários)
  const { valDesej, Desc } = request.params;
  let desc = eval(valDesej * (Desc / 100));
  let montante = eval(Number(valDesej) - Number(desc));
  response.json({ montante });
});

//API será "ouvida" na porta 3000 do navegador
const port = process.env.PORT || 8080;

api.listen(port)