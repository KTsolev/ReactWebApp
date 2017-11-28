import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SlideComponent1 from './components/slide1.js'
import SlideComponent2 from './components/slide2.js'
import ParalaxSlide1 from './components/paralaxSlide1.js'
import ParalaxSlide2 from './components/paralaxSlide1.js'

ReactDOM.render(
    <div className="paralax-container col">
      <ParalaxSlide1 klass='section parallax parallax-1 row' header='За Mен'/>
      <SlideComponent1 klass='section content row' header='home slide'/>
      <ParalaxSlide2 klass='section parallax parallax-2 row' header='За Кабинета'/>
      <SlideComponent2 klass='section content' header='home slide'/>
    </div>,
  document.getElementById('root'));
registerServiceWorker();
