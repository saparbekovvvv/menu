import React from 'react'
import { useNavigate } from 'react-router-dom';
import sushi from "../images/Суши 1.png"
import sushi1 from "../images/суши1 1.png"

function Sushi() {
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
          <img src={sushi} alt="sushi" />
          <img src={sushi1} alt="sushi1" />
          </div>
         


</div>

</div>

  )
}

export default Sushi