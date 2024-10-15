import Button from 'components/button';
import Styles from './Hero.module.scss';
import ImgTop from 'assets/placeHoldImage.jpg'
import { MdOutlineArrowForward } from "react-icons/md";

export default function Hero() {
    return (
        <section className={Styles.mainHero}>
            <div className={Styles.mainHero__container}>
                <article className={Styles.mainHero__container__content}>
                    <h1 className={Styles.mainHero__container__content__title}>Get More Done with whitepace</h1>
                    <p className={Styles.mainHero__container__content__text}>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>

                    <div className={Styles.mainHero__container__content__buttonContainer}>
                        <Button to="/">
                            Try TasKey Free <MdOutlineArrowForward />
                        </Button>
                    </div>
                    
                </article>
                <figure className={Styles.mainHero__container__imgContainer}>
                    <img src={ImgTop} alt="" />
                </figure>
            </div>
        </section>
    );
}