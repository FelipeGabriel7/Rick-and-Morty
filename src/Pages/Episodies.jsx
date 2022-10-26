import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useState, useEffect } from "react";
import episodies from '../images/episodies.jpeg'
import { Link } from "react-router-dom";
import '../components/style.css';
import { ButtonTop } from "../components/ButtonTop";

export function Episodies() {
  const [ep, setEp] = useState([]);

  function fetchEpisodies() {
    fetch(`https://rickandmortyapi.com/api/episode`)
      .then((res) => res.json())
      .then((data) => setEp(data.results));
  }

  useEffect(() => {
    fetchEpisodies();
  }, []);

  return (
    <div>
      <Navbar />
      <ButtonTop/>
      <div className="episodies">
        {ep &&
          ep.map((e) => (
            <div key={e.id} className="cards" translate="pt-br">
              <p>{e.name}</p>
              <p>{e.episode}</p>
              <img src={episodies} alt={episodies}/>
              <Link className="details" to={`/episodies/${e.id}`}> Detalhes </Link>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}
