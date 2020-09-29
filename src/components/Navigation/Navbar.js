import React, { useState, useEffect } from 'react';
import ImageComponent from '../ImageComponent/imageComponent';
import './styles.scss';

export const Navbar = (props) => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect (() => {
        setShowMenu(false);
    }, []);

 
    const onClickHandler = () => {
        console.log('click handler', showMenu)
        setShowMenu(!showMenu);
    };

    const menuStyles = `menuItems menuItems--vertical ${showMenu ? 'shown': 'hidden' }`;

    return (
        <>
        <nav>
            <ImageComponent 
                src={require('../../images/72873961_l.jpg')} 
                alt="logo" 
                klass="logo_holder"
                imgClass="logo"
            />
            <a className="toggle-button" onClick={onClickHandler}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <ul className="menuItems">
                <li onClick={props.scrollTo}>
                <i className="fas fa-home"></i>
                <a data-item="Начало" href="#home">Начало</a>
                </li>
                <li onClick={props.scrollTo}>
                <i className="fas fa-tooth"></i>
                <a data-item="За&#32;Мен" href="#forme">За&#32;Мен</a>
                </li>
                <li onClick={props.scrollTo}>
                <i className="fas fa-clinic-medical"></i>
                <a data-item="За&#32;Кабинета" href="#cabinet">За&#32;Кабинета</a>
                </li>
                <li onClick={props.scrollTo}>
                <i className="fas fa-certificate"></i>
                <a data-item="Сертификати" href="#certificates">Сертификати</a>
                </li>
                <li onClick={props.scrollTo}>
                <i className="fas fa-address-book"></i>
                <a data-item="Контакти" href="#contact">Контакти</a>
                </li>
            </ul>
            <ul className={menuStyles}>
                <li onClick={props.scrollTo}>
                <i className="fas fa-home"></i>
                <a data-item="Начало" href="#home">Начало</a>
                </li>
                <li onClick={props.scrollTo}>
                <i className="fas fa-tooth"></i>
                <a data-item="За&#32;Мен" href="#forme">За&#32;Мен</a>
                </li>
                <li onClick={props.scrollTo}>
                <i className="fas fa-clinic-medical"></i>
                <a data-item="За&#32;Кабинета" href="#cabinet">За&#32;Кабинета</a>
                </li>
                <li onClick={props.scrollTo}>
                <i className="fas fa-certificate"></i>
                <a data-item="Сертификати" href="#certificates">Сертификати</a>
                </li>
                <li onClick={props.scrollTo}>
                <i className="fas fa-address-book"></i>
                <a data-item="Контакти" href="#contact">Контакти</a>
                </li>
            </ul>
        </nav>
        </>
    )
}