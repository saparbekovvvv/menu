import React from 'react'
import { useNavigate } from 'react-router-dom';
import pizzas from "../images/пицца1 1.png"
import pizzas1 from "../images/пицца3 1.png"
import pizzas2 from "../images/пицца4 1.png"

function Pizzas() {
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
            <img src={pizzas} alt="pizzas" />
            <img src={pizzas1} alt="pizzas" />
            <img src={pizzas2} alt="pizzas" />
          </div>
         


</div>

</div>

  )
}

export default Pizzas