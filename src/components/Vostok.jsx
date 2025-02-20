import React from 'react'
import { useNavigate } from 'react-router-dom';
import vostok from "../images/восточка1 1.png"
import vostok1 from "../images/восточка2 1.png"
import vostok2 from "../images/восточка3 1.png"
import vostok3 from "../images/восточка4 1.png"


function Vostok() {
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
            <img src={vostok} alt="vostok" />
            <img src={vostok1} alt="vostok1" />
            <img src={vostok2} alt="vostok2" />
            <img src={vostok3} alt="vostok3" />
          </div>
         


</div>

</div>

  )
}

export default Vostok