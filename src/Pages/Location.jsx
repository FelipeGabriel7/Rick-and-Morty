import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import "./Location.css";
import { Navbar } from "../components/Navbar";
import planet from '../images/planets.jpg'
import { ButtonTop } from "../components/ButtonTop";

export const Location = () => {
  const url = `https://rickandmortyapi.com/api/location`;
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(false);

  function fetchLocation() {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data.results);
        setLoading(false);
      })

      .catch((e) => console.log(e));
  }

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <>
      <Navbar />
      <ButtonTop/>
      <div className="card-local">
        <h1> Conheça algumas Localizações </h1>
        {loading && <h1> Buscando Localizações... </h1>}

        <div className="content">
          {location.map((local) => (
            <div key={local.id} className="location-card">
              <p> {local.name} </p>
              <p> {local.type} </p>
              <p> {local.dimension} </p>
              <img src={planet} alt={local.id} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
