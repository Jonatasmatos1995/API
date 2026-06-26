import React, { useEffect, useState } from "react";

function App() {
  const [busca, setBusca] = useState("frango");
  const [receitas, setReceitas] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const traducoesBusca = {
    frango: "chicken",
    carne: "beef",
    peixe: "fish",
    massa: "pasta",
    macarrao: "pasta",
    macarrão: "pasta",
    bolo: "cake",
    arroz: "rice",
    salada: "salad",
    ovo: "egg",
    ovos: "egg",
    batata: "potato",
    porco: "pork",
    sopa: "soup",
    sobremesa: "dessert",
    chocolate: "chocolate",
    queijo: "cheese",
    camarao: "shrimp",
    camarão: "shrimp",
  };

  function traduzirBusca(texto) {
    const termo = texto.toLowerCase().trim();
    return traducoesBusca[termo] || termo;
  }

  async function buscarReceitas(termo) {
    if (termo.trim() === "") {
      setErro("Digite algo para pesquisar.");
      setReceitas([]);
      return;
    }

    const termoTraduzido = traduzirBusca(termo);

    try {
      setCarregando(true);
      setErro("");

      const resposta = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + termoTraduzido
      );

      const dados = await resposta.json();

      if (dados.meals === null) {
        setReceitas([]);
        setErro(
          "Nenhuma receita encontrada. Tente buscar por frango, carne, massa, bolo ou peixe."
        );
      } else {
        setReceitas(dados.meals);
      }
    } catch (error) {
      setErro("Erro ao consumir a API.");
      setReceitas([]);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarReceitas("frango");
  }, []);

  function pesquisar(event) {
    event.preventDefault();
    buscarReceitas(busca);
  }

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Papa da Wal</h1>
      <h2>Buscador de Receitas Saudáveis</h2>

      <p>
        Pesquise em português: frango, carne, peixe, massa, bolo, arroz, salada,
        ovo, batata, sopa ou camarão.
      </p>

      <form onSubmit={pesquisar}>
        <input
          type="text"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          placeholder="Digite uma receita ou ingrediente em português"
          style={{
            padding: "12px",
            width: "360px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            marginLeft: "10px",
            borderRadius: "8px",
            background: "green",
            color: "white",
            border: "none",
          }}
        >
          Buscar
        </button>
      </form>

      {carregando && <p>Carregando receitas...</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {receitas.map((receita) => (
          <div
            key={receita.idMeal}
            style={{
              width: "280px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "15px",
              background: "#f4fff7",
            }}
          >
            <img
              src={receita.strMealThumb}
              alt={traduzirPrato(receita.strMeal)}
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />

            <h3>{traduzirPrato(receita.strMeal)}</h3>

            <p>
              <strong>Categoria:</strong>{" "}
              {traduzirCategoria(receita.strCategory)}
            </p>

            <p>
              <strong>Origem:</strong> {traduzirOrigem(receita.strArea)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function traduzirCategoria(categoria) {
  const categorias = {
    Chicken: "Frango",
    Beef: "Carne",
    Pork: "Porco",
    Seafood: "Frutos do mar",
    Vegetarian: "Vegetariano",
    Vegan: "Vegano",
    Pasta: "Massa",
    Dessert: "Sobremesa",
    Lamb: "Cordeiro",
    Breakfast: "Café da manhã",
    Side: "Acompanhamento",
    Starter: "Entrada",
    Miscellaneous: "Diversos",
    Goat: "Cabrito",
  };

  return categorias[categoria] || categoria;
}

function traduzirOrigem(origem) {
  const origens = {
    American: "Americana",
    British: "Britânica",
    Canadian: "Canadense",
    Chinese: "Chinesa",
    Croatian: "Croata",
    Dutch: "Holandesa",
    Egyptian: "Egípcia",
    Filipino: "Filipina",
    French: "Francesa",
    Greek: "Grega",
    Indian: "Indiana",
    Irish: "Irlandesa",
    Italian: "Italiana",
    Jamaican: "Jamaicana",
    Japanese: "Japonesa",
    Kenyan: "Queniana",
    Malaysian: "Malaia",
    Mexican: "Mexicana",
    Moroccan: "Marroquina",
    Polish: "Polonesa",
    Portuguese: "Portuguesa",
    Russian: "Russa",
    Spanish: "Espanhola",
    Thai: "Tailandesa",
    Tunisian: "Tunisiana",
    Turkish: "Turca",
    Ukrainian: "Ucraniana",
    Vietnamese: "Vietnamita",
    Unknown: "Desconhecida",
  };

  return origens[origem] || origem;
}

function traduzirPrato(nome) {
  const pratos = {
    "Chicken Handi": "Frango Handi",
    "Chicken Alfredo Primavera": "Frango Alfredo Primavera",
    "Chicken Couscous": "Cuscuz com Frango",
    "Chicken Fajita Mac and Cheese": "Macarrão com Queijo e Frango Fajita",
    "Chicken Karaage": "Frango Karaage",
    "Chicken Marengo": "Frango Marengo",
    "Chicken Parmentier": "Parmentier de Frango",
    "Chicken Quinoa Greek Salad": "Salada Grega de Quinoa com Frango",
    "General Tso's Chicken": "Frango General Tso",
    "Honey Balsamic Chicken with Crispy Broccoli & Potatoes":
      "Frango com Mel e Balsâmico, Brócolis Crocante e Batatas",
    "Katsu Chicken curry": "Curry de Frango Katsu",
    "Kentucky Fried Chicken": "Frango Frito Estilo Kentucky",
    "Kung Pao Chicken": "Frango Kung Pao",
    "Nutty Chicken Curry": "Curry de Frango com Castanhas",
    "Pad See Ew": "Macarrão Tailandês Pad See Ew",
    "Piri-piri chicken and slaw": "Frango Piri-piri com Salada",
    "Thai Green Curry": "Curry Verde Tailandês",
  };

  return pratos[nome] || nome;
}

export default App;