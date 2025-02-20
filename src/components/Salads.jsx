import React from 'react'
import { useNavigate } from 'react-router-dom';
import Salad from "../images/салаты 1.png";
import Salad1 from "../images/салаты1 1.png";
import Salad2 from "../images/салаты2 1.png";
import Salad3 from "../images/салат3 1.png";
import Salad4 from "../images/салаты4 1.png";
import Salad5 from "../images/салаты 5 1.png";
import Salad6 from "../images/салаты6 1.png";


function Salads() {
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
          <img src={Salad} alt="Salads" />
          <img src={Salad1} alt="Salads1" />
          <img src={Salad2} alt="Salads2" />
          <img src={Salad3} alt="Salads3" />
          <img src={Salad4} alt="Salads4" />
          <img src={Salad5} alt="Salads5" />
          <img src={Salad6} alt="Salads6" />
          </div>
         


</div>

</div>

  )
}

export default Salads