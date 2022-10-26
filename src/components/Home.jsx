import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Persons } from "../Pages/Persons";


export function Home() {
  return (
    <div>
        <Navbar/>
        <Persons/>
        <Footer/>
    </div>
  );
}
