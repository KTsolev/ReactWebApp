import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import registerServiceWorker from './registerServiceWorker';
import SlideComponent1 from './components/slide1.js';
import SlideComponent2 from './components/slide2.js';
import ParalaxSlide1 from './components/paralaxSlide1.js';
import ParalaxSlide2 from './components/paralaxSlide2.js';
import ContactSlide from './components/ContactSlide/ContactSlide.js';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <div className="paralax-container col">
      <ParalaxSlide1 klass='section parallax parallax-1 row' header='За Mен'/>
      <SlideComponent1 klass='section content row' header='home slide'/>
      <ParalaxSlide2 klass='section parallax parallax-2 col' header='За Кабинета'/>
      <SlideComponent2 klass='section content row' header='home slide'/>
      <ParalaxSlide1 klass='section parallax parallax-1 row' header='За Mен'/>
      <ContactSlide klass='section paralax-2 col'/>
    </div>,
  document.getElementById('root'));
registerServiceWorker();
