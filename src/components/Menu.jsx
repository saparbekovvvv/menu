import React from 'react';
import '../styles/App.css';
import {  useNavigate } from 'react-router-dom';
const menuData = [
  { category: 'Правила заведения', route: '/rules' },
  { category: 'Заказные блюда', route: '/customDishes' },
  { category: 'Выпечка', route: '/vypechka' },
  { category: 'Шашлыки', route: '/shashlyki' },
  { category: 'Супы', route: '/soups' },
  { category: 'Салаты/Закуски', route: '/salads' },
  { category: 'Уйгурская кухня', route: '/uygur' },
  { category: 'Восточная кухня', route: '/vostok' },
  { category: 'Европейская кухня', route: '/european' },
  { category: 'Лагманы/Ганфаны', route: '/lagmans' },
  { category: 'Пицца', route: '/pizza' },
  { category: 'Паста', route: '/pasta' },
  { category: 'Суши', route: '/sushi' },
  { category: 'Фаст фуд', route: '/fastFood' },
  { category: 'Гарниры', route: '/garniers' },
  { category: 'Чаи/Кофе', route: '/teas' },
  { category: 'Напитки', route: '/lemonads' },
  { category: 'Десерты', route: '/deserts' },

];

const Menu = (  ) => {
    const Navigate = useNavigate();
    const handleMenu = () => {
        Navigate('/');
    }
    return (
        <div id='menu'>
        <div className='container'>
            <div className="menu">
            <h1>МЕНЮ</h1>
          
   <span  onClick={handleMenu}>&#10005;</span>

                <div className="menu-content">


                {menuData.map((section, index) => (
              <div className='divider' key={index}>
                <h2 onClick={() =>Navigate(section.route)}>{section.category}</h2>
              </div>
            ))}
    </div>
    </div>
    
    </div>
    </div>

    );
};

export default Menu;