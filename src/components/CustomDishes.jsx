import React from 'react'
import { useNavigate } from 'react-router-dom';
import hanplow from "../images/ханскийплов 1.png"
import mixHouse from "../images/миксхаус 1.png"
import dymlyama from "../images/дымдама 1.png"
import besh from "../images/бешбармак 1.png"

function CustomDishes() {
  const Navigate = useNavigate();
  const handleMenu = () => {
      Navigate('/menu');
  }
  return (
    <div id='bgForPages'>
      <div className="exitPages">

   <h2  onClick={handleMenu}>&#10005;</h2>
      </div>
        <div className='pages'>
          <div className="pagesImg">
          <img src={hanplow} alt="hanplow" />
          <img src={mixHouse} alt="mixHouse" />
          <img src={dymlyama} alt="dymlyama" />
          <img src={besh} alt="besh" />
          </div>
         


</div>

</div>

  )
}

export default CustomDishes