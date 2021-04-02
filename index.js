const express = require('express');
const api = express();

api.use(express.json());

api.post('/calcjs', (request, response) => {
  //Pegando o corpo da requisição (o que for de campo dos formulários)
  const { valIniJS, txJurJS, numPJS } = request.body;
  let juros = eval(valIniJS * (txJurJS / 100) * numPJS);
  let montante = eval(Number(valIniJS) + Number(juros));
  response.json({ montante });
});

api.post('/calcjc', (request, response) => {
  //Pegando o corpo da requisição (o que for de campo dos formulários)
  const { valIniJS, txJurJS, numPJS } = request.body;
  //Trocar cálculos
  let juros = eval(valIniJS * (txJurJS / 100) * numPJS);
  let montante = eval(Number(valIniJS) + Number(juros));
  response.json({ montante });
});

api.post('/calcdesc', (request, response) => {
  //Pegando o corpo da requisição (o que for de campo dos formulários)
  const { valIniJS, txJurJS, numPJS } = request.body;
  //Trocar cálculos
  let juros = eval(valIniJS * (txJurJS / 100) * numPJS);
  let montante = eval(Number(valIniJS) + Number(juros));
  response.json({ montante });
});

api.listen(3000);
