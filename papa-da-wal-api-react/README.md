# Papa da Wal - Receitas Saudáveis

Projeto desenvolvido para a atividade **Aplicação React JS com Consumo de API Web**.

A aplicação permite pesquisar receitas usando uma API pública gratuita, exibindo nome da receita, categoria, país de origem, imagem, ingredientes e modo de preparo.

## API utilizada

Foi utilizada a API gratuita **TheMealDB**:

- Busca de receitas por nome
- Retorno de imagem, categoria, origem, ingredientes e instruções

Endpoint usado no projeto:

```txt
https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
```

## Tecnologias utilizadas

- React JS
- Vite
- JavaScript
- HTML
- CSS
- API Web gratuita

## Como rodar o projeto

1. Clone ou baixe este projeto.

2. Abra a pasta no VS Code.

3. Instale as dependências:

```bash
npm install
```

4. Rode o projeto:

```bash
npm run dev
```

5. Acesse o endereço mostrado no terminal, geralmente:

```txt
http://localhost:5173
```

## Funcionalidades

- Pesquisa de receitas por nome
- Consumo de API com `fetch`
- Uso de `useState`
- Uso de `useEffect`
- Exibição de receitas em cards
- Interface responsiva
- Tratamento de carregamento e erro
- Botão para limpar a busca

## Como publicar na Vercel

1. Suba o projeto para o GitHub.
2. Acesse a Vercel.
3. Clique em **Add New Project**.
4. Selecione o repositório.
5. Em framework, selecione **Vite**.
6. Clique em **Deploy**.

## Observação

Não subir a pasta `node_modules` para o GitHub. Ela já está no `.gitignore`.
