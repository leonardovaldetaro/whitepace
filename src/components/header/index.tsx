
import Styles from "./Header.module.scss";
import classNames from 'classnames';
import Logotipo from "components/logotipo";
import { useState } from "react";
import { NavLink } from 'react-router-dom';


export default function Header() {

    // Define um array de objetos que contém as rotas e links para o menu
    const rotasNav = [{
        label: 'Product',
        to: '/'
    }, {
        label: 'Solutions',
        to: 'solutions'
    }, {
        label: 'Resources',
        to: 'resources'
    }, {
        label: 'Pricing',
        to: 'pricing'
    }];

    //Define o comportamento do rock useState para dar a dinâmica de abrir e fechar o menu
    const [isMenuOpen, setMenuOpen] = useState(false);
    const togleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className={Styles.header}>

            {/* Define o container do header com largura maxima de 1400px */}
            <div className={Styles.header__container}>

                {/* Implemanta a importação do logotipo do header */}
                <div className={Styles.header__container__logo}>
                    <Logotipo />
                </div>
                
                {/* Define os recursos do elemento do menu hamburger */}
                <div className={Styles.header__container__menuContainer}>
                    
                    {/* define o comportamento do texto Menu do elemento menu hamburger */}
                    <span
                        className={classNames({
                            [Styles.header__container__menuContainer__nameMenu]: !false,
                            [Styles.hide]: isMenuOpen
                        })}
                    >
                        Menu
                    </span>
                    
                    {/* define o comportamento do texto close do elemento menu hamburger */}
                    <span 
                        className={classNames({
                            [Styles.header__container__menuContainer__nameClose]: !false,
                            [Styles.show]: isMenuOpen
                        })}
                    >
                        Close
                    </span>

                    {/* Define os comportamentos das barras do menu hamburger */}
                    <div className={Styles.header__container__menuContainer__bars} onClick={togleMenu}>

                        <div 
                            className={classNames({
                                [Styles.header__container__menuContainer__bars__bar]: !false,
                                [Styles.header__container__menuContainer__bars__bar__barTop]: isMenuOpen
                            })}
                        ></div>

                        <div 
                            className={classNames({
                                [Styles.header__container__menuContainer__bars__bar]: !false,
                                [Styles.header__container__menuContainer__bars__bar__barMidle]: isMenuOpen
                            })}
                        ></div>


                        <div className={classNames({
                            [Styles.header__container__menuContainer__bars__bar]: !false,
                            [Styles.header__container__menuContainer__bars__bar__barBotton]: isMenuOpen
                        })}
                        ></div>

                    </div>

                </div>

            </div>
            
            {/* Define o menu escondido que é revelado quando o menu hamburger é acionado */}
            <nav 
                className={classNames({
                    [Styles.header__nav]: !false,
                    [Styles['header__nav--open']]: isMenuOpen
                })}
            >

                <span className={Styles.header__nav__title}>Menu</span>

                <ul className={Styles.header__nav__list}>
                    {rotasNav.map((rota, index) => (

                        <li
                            className={Styles.header__nav__list__item}
                            key={index}
                        >
                            <NavLink 
                                className={Styles.header__nav__list__item__link}
                                onClick={togleMenu}
                                to={rota.to}
                            >
                                {rota.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                
                <h5 className={Styles.header__nav__copyright}>&copy; The Whitepace Tecnology. All rights reserved.</h5>

            </nav>

        </header>
    );
};
