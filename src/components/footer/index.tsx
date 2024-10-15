import Logotipo from 'components/logotipo';
import Styles from './Footer.module.scss';
import Button from 'components/button';
import { IconContext } from "react-icons";
import { MdOutlineArrowForward } from "react-icons/md";
import { FaWindows, FaApple, FaAndroid } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const navProduct = [
    {
        label: 'Overview',
        to: 'overview'
    },
    {
        label: 'Pricing',
        to: 'pricing'
    },
    {
        label: 'Customer stories',
        to: 'customer'
    },
]


export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footer__container}>

                <article className={Styles.footer__container__today}>
                    <h3 className={Styles.footer__container__today__title}>Try Whitepace today</h3>
                    <p className={Styles.footer__container__today__text}>Get started for free. Add your whole team as your needs grow.</p>
                    <Button to='/'>
                        Try Taskey free <MdOutlineArrowForward />
                    </Button>
                    <p className={Styles.footer__container__today__bigTeam}>On a big team? Contact sales.</p>

                    <div className='faIconsContainer'>
                        <IconContext.Provider value={{ className: 'faIcons' }}>
                            <FaApple />
                            <FaWindows />
                            <FaAndroid />
                        </IconContext.Provider>
                    </div>

                </article>

                <div className={Styles.footer__container__LogoTxtContainer}>
                    <Logotipo className={Styles.footer__container__LogoTxtContainer__img} />

                    <p className={Styles.footer__container__LogoTxtContainer__text}>Whitepace was created for the new ways we live and work. We make beautyfully designed around the world</p>
                </div>

                <section className={Styles.footer__container__productMenu}>
                    <h5 className={Styles.footer__container__productMenu__title}>Product</h5>

                    <ul className={Styles.footer__container__productMenu__list}>
                        {navProduct.map((rota, index) => (
                            <li
                                className={Styles.footer__container__productMenu__list__item}
                                key={index}
                            >
                                <NavLink
                                    className={Styles.footer__container__productMenu__list__item__link}
                                    to={rota.to}
                                >
                                    {rota.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                </section>

            </div>

        </footer>
    );
};