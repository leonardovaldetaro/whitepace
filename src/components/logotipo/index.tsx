import Styles from './Logo.module.scss';
import { ReactComponent as Logo } from 'assets/Logo.svg'
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default function Logotipo({ className }: { className?: string } ) {

    // Define um array de objetos que contém a rota e o componente do logotipo
    const rotaLogo = [{
        label: <Logo className={classNames(Styles.logo__img, className)} />,
        to: '/'
    }];

    return (

        < div className={Styles.containerLogo} >
            {
                rotaLogo.map((rota, index) => (
                    <figure key={index} className={classNames(Styles.logo, className)}>
                        <Link to={rota.to} className={Styles.containerLogo__link}>{rota.label}</Link>
                    </figure>
                ))
            }
        </div >

    );
};