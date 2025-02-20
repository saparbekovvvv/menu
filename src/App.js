import React from 'react';
import { Route, Routes,  } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import Vypechka from './components/Vypechka';
import Shashlyki from './components/Shashlyki';
import Soups from './components/Soups';
import Rules from './components/Rules';
import Salads from './components/Salads';
import Uygur from './components/Uygur';
import Vostok from './components/Vostok';
import Lagmans from './components/Lagmans';
import Pizzas from './components/Pizzas';
import Pasta from './components/Pasta';
import Sushi from './components/Sushi';
import European from './components/European';
import Garniers from './components/Garniers';
import FastFood from './components/FastFood';
import Deserts from './components/Deserts';
import Lemonads from './components/Lemonads';
import Teas from './components/Teas';
import CustomDishes from './components/CustomDishes';

const App = () => {
  return (
    <Routes >
      <Route path="/" element={<Home/>}  />
      <Route path="/menu" element={<Menu/>} />
      <Route path='/vypechka' element={<Vypechka/>} />
      <Route path="/shashlyki" element={<Shashlyki />} />
      <Route path="/soups" element={<Soups />} />
      <Route path='/salads' element={<Salads/>} />
      <Route path="/uygur" element={<Uygur />} />
      <Route path="/vostok" element={<Vostok />} />
      <Route path="/lagmans" element={<Lagmans />} />
      <Route path="/pizza" element={<Pizzas />} />
      <Route path="/pasta" element={<Pasta />} />
      <Route path="/sushi" element={<Sushi />} />
      <Route path="/european" element={<European />} />
      <Route path="/garniers" element={<Garniers />} />
      <Route path="/fastFood" element={<FastFood />} />
      <Route path="/deserts" element={<Deserts />} />
      <Route path="/lemonads" element={<Lemonads />} />
      <Route path="/teas" element={<Teas />} />
      <Route path="/customDishes" element={<CustomDishes />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="*" element={<h1>Not Found</h1>} />

    </Routes>
  );
};

export default App;