import express, {Request, Response} from 'express';

const app = express();
app.use(express.json());

const capitais: Record<string, string> = {
  AC: 'Rio Branco', AL: 'Maceió', AP: 'Macapá', AM: 'Manaus', BA: 'Salvador',
  CE: 'Fortaleza', DF: 'Brasília', ES: 'Vitória', GO: 'Goiânia', MA: 'São Luís',
  MT: 'Cuiabá', MS: 'Campo Grande', MG: 'Belo Horizonte', PA: 'Belém', PB: 'João Pessoa',
  PR: 'Curitiba', PE: 'Recife', PI: 'Teresina', RJ: 'Rio de Janeiro', RN: 'Natal',
  RS: 'Porto Alegre', RO: 'Porto Velho', RR: 'Boa Vista', SC: 'Florianópolis',
  SP: 'São Paulo', SE: 'Aracaju', TO: 'Palmas'
};

app.get('/capital/:uf', (req: Request, res: Response) => {
  const uf = req.params.uf.toUpperCase();
  const capital = capitais[uf];

  if (!capital) {
    return res.status(404).json({ erro: 'UF inválida ou não encontrada. Exemplo de uso: /capital/SP' });
  }

  return res.json({ uf, capital });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});