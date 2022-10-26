import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../components/style.css";
import background from "../images/background.jpg";
import { ButtonTop } from "../components/ButtonTop";

export function Persons() {
  const [newP, setNewP] = useState([]);
  const [search, setSearch] = useState("");
  

  const requestData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setNewP(data.results);
  };

  useEffect(() => {
    requestData();
    console.log("Component renderizing");
  }, [search]);

  return (
    <div className="container">
      <ButtonTop/>
      <div className="searchAndTitle">
        <h1> Personagens </h1>
        <input
          className="search"
          type="search"
          placeholder="Buscar personagem"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="containerPerson">
        {newP &&
          newP.filter((p , index ) => p.name.toLowerCase().includes(search.toLowerCase())).map((p, index) =>
          (
              <div
                className="Persons"
                key={index}
                style={{ backgroundImage: `url(${background})` }}
              >
                <div className="cardPersons">
                  <img
                    className="imagePerson"
                    src={p.image}
                    alt="não contém imagem"
                  />
                  <div className="text">
                    <h2 className="namePerson"> Nome: {p.name}</h2>
                    <hr />
                    <p className="housePerson"> Status: {p.status}</p>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
}
