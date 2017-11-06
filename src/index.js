import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TextComponent from './components/textComponent';
import ImageComponent from './components/imageComponent';
import mama from './images/mama.jpg';

ReactDOM.render(
  <div className="container">
    <ImageComponent src={mama} alt="dentist" klass="imgs"/>
    <TextComponent header="За Mен" article="Д-р Анна Кирилова-Цолева се дипломира като Доктор по Дентална Медицина през 1984 година в \'Медицинска Академия\' гр. София Факултет по \'Дентална Медицина\' През 1992г защитава поливалентна специалност в същия факултет.Работи като доктор по дентална медицина в \'Институт по зърнени храни и изхранване на населението\' и  \'Институт по Генно Инженерство\'. От 1994 година работи в собствен кабинет със самостоятелна частна практика в гр. Костинброд, област Софийска, България.Редовен член на Български Зъболекарски Съюз." klass="home"/>
  </div>,
  document.getElementById('root'));
registerServiceWorker();
