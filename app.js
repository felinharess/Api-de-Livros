import express from 'express';
const app = express();
app.use(express.json());
const livros = {
    aventura: [
        { id: 1, nome: 'Indiana Jones, vol:1' },
        { id: 2, nome: 'Indiana Jones, vol:2' },

    ],
    suspense: [
        { id: 1, nome: 'Livro do medo, vol: 1' },
        { id: 2, nome: 'Livro do medo, vol: 2' },

    ],
    romance: [],
    ficcao: [],
}
app.get('/livros', (req, res) => {
    res.status(200).send(livros)
})
app.post('/livros/:genero', (req, res) => {
    const { genero } = req.params
    const novoLivro = req.body
    let index
    let retorno
    switch (genero) {
        case 'aventura':
            livros.aventura.push(novoLivro);
            retorno = livros
            index = 201;
            break;
        case 'suspense':
            livros.suspense.push(novoLivro);
            retorno = livros
            index = 201;
            break;
        case 'romance':
            livros.romance.push(novoLivro);
            retorno = livros
            index = 201;
            break;
        case 'ficcao':
            livros.ficcao.push(novoLivro);
            retorno = livros
            index = 201;
            break;
        default:
            retorno = "Genero invalido";
            index = 400;

    }
    res.status(index).send(retorno)
});
app.get('/livros/:categoria', (req, res) => {
    const { categoria } = req.params;
    if (!livros[categoria]) {
        res.status(400).send("Genero invalido");
        return;
    
    };
        res.status(200).send(livros[categoria])
    
});

app.listen(3000, () => {
    console.log("Servidor esta rodando");
});