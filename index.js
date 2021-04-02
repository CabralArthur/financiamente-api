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
  const { valIniJC, txJurJC, numPJC } = request.body;
  let montante = eval(
    Number(valIniJC) * Math.pow(1 + Number(txJurJC / 100), numPJC),
  );
  response.json({ montante });
});

api.post('/calcdesc', (request, response) => {
  //Pegando o corpo da requisição (o que for de campo dos formulários)
  const { valDesej, Desc } = request.body;
  let desc = eval(valDesej * (Desc / 100));
  let montante = eval(Number(valDesej) - Number(desc));
  response.json({ montante });
});

api.listen(3000);
