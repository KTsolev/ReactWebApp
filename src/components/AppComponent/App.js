import React, { Component } from 'react';
import SlideComponent1 from '../slide1.js';
import ParalaxSlide1 from '../paralaxSlide1.js';
import ParalaxSlide2 from '../paralaxSlide2.js';
import ContactSlide from '../ContactComponent/ContactSlide.js';
import SertificatesSlide from '../SertificatesComponent/Sertificates.js';
import toothImg from '../../images/happytooth.png';
import MessageBox from '../MessageBox/MessageBox';
import store from '../Store/StoreProvider';
import services from '../../Services/Services';
import './App.scss';

const { StoreProvider } = store;
const { inView } = services;
// @ts-ignore
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false
    };    
    this.scrollTo = this.scrollTo.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  updatePredicate() {
    if(window.innerWidth <= 450) {
      this.setState({ toggleMenu: false });
    }
   
    this.forceUpdate();
  }

  scrollTo(event) {
    const section = document.querySelector(event.target.hash);

    if(!section) return;
    if (!inView(section)) {
      section.scrollIntoView(true);
    } else {
      section.scrollIntoView(false);
    }
  }

  toggleMenu() {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }

  render() {
    
    return (
      <StoreProvider>
        <div className="App">
          <div className="nav__holder">
              <div className="menu__toggle">
                <ul onClick={this.toggleMenu}>
                  <li>
                    <i className={this.state.toggleMenu ? 'fas fa-ellipsis-v hide' : 'fas fa-ellipsis-v menu__toggle--open'}></i>
                  </li>
                  <li>
                    <i className={this.state.toggleMenu ? 'fas fa-times show' : 'fas fa-times menu__toggle--closed'}></i>
                  </li>
                </ul>
              </div>
              <ul className={this.state.toggleMenu ? 'navbar navbar--shown' : 'navbar navbar--hidden'}>
                <li><img src={toothImg} alt="happytooth"/></li>
                <li onClick={this.scrollTo}>
                  <i className="fas fa-home"></i>
                  <a href="#home">Начало</a>
                </li>
                <li onClick={this.scrollTo}>
                  <i className="fas fa-tooth"></i>
                  <a href="#forme">За Mен</a>
                </li>
                <li onClick={this.scrollTo}>
                  <i className="fas fa-clinic-medical"></i>
                  <a href="#cabinet">За Кабинета</a>
                </li>
                <li onClick={this.scrollTo}>
                  <i className="fas fa-certificate"></i>
                  <a href="#certificates">Сертификати</a>
                </li>
                <li onClick={this.scrollTo}>
                  <i className="fas fa-address-book"></i>
                  <a href="#contact">Контакти</a>
                </li>
              </ul>
            </div>
            <div className={this.state.toggleMenu ? 'paralax-container paralax-container--shifted': 'paralax-container'}>
              <ParalaxSlide1 
                klass='content' 
                header='За Mен'/>
              <ParalaxSlide2 
                ids='forme' 
                klass='paralax__header' 
                bgImages={['mama.jpg']} header='За Mен'/>
              <SlideComponent1 
                ids='home' 
                klass='section content' 
                header='home slide'/>
              <ParalaxSlide2 
                ids='cabinet' 
                klass='paralax__header--lighter' 
                bgImages={[
                  'IMG_0516.jpg',
                  'IMG_0515.jpg', 
                  'IMG_0511.jpg', 
                  'IMG_0510.jpg', 
                  'IMG_0509.jpg']}
                header='За Кабинета'/>
              <ParalaxSlide2 
                ids='certificates' 
                klass='paralax__header'
                movable={true}
                bgImages={['graduation.jpg']} 
                header='Сертификати'/>
              <SertificatesSlide
                klass='section content' 
                header='Сертификати'/>
              <ParalaxSlide2 
                ids='contact'
                klass='paralax__header' 
                textAnim={[
                  'Можете да се свържете с мен', 
                  'чрез следните контакти:', 
                  'тел: (+359)/721/66933', 
                  'GSM: (+359)/889 81 20 27', 
                  'Email: atzoleva@abv.bg', 
                  'Адрес: гр.Костинброд', 
                  'ул."Христо Ботев"16'
                ]} 
                bgImages={['writing-pad.jpg']} 
                header='Контакти'/>
              <ContactSlide 
                klass='section content'/>
            </div>
            <MessageBox />
          </div>
      </StoreProvider>
    );
  }
}

export default App;