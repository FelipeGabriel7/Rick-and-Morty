import React from 'react'
import { TbChevronUp } from "react-icons/tb";

export const ButtonTop = () => {


    
  function returnToTop() {
    const top = document.querySelector(".toTop");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }


  return (
    <div>
        <p onClick={() => returnToTop()} className="toTop">
        {" "}
        <TbChevronUp />{" "}
      </p>
    </div>
  )
}
