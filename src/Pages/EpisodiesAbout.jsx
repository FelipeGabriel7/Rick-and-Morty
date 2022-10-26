import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EpisodieAbout.css";

export const EpisodiesAbout = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = "https://rickandmortyapi.com/api/episode";

  const navigate = useNavigate();

  const { name } = useParams();

  async function fetchD() {
    try {
      setLoading(true);

      const request = await fetch(url + "/" + name);
      const response = await request.json();

      setLoading(false);
      setData(response);
    } catch (e) {
      setError(true);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchD();
  }, []);

  function handleReturn() {
    navigate("/episodies");
  }

  return (
    <div className="information">
      <button onClick={() => handleReturn()} className="btn-return">
        {" "}
        Retornar{" "}
      </button>
      <div className="content-information">
        <h1> Sobre o episódio </h1>
        {loading && <h1> Buscando ... </h1>}
        {error && <h1> Algo deu errado </h1>}
        <div className="card-info">
          <h1 className="title"> Episodio: #{name} </h1>
          <p className="name"> Nome: {data.name} </p>
          <p className="created"> Criado em: {data.created} </p>
          <p className="airdate"> Adicionado em:  {data.air_date} </p>
          <p className="episode"> Temporada: {data.episode} </p>
        </div>
      </div>
    </div>
  );
};
