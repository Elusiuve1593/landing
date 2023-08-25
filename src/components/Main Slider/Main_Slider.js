import s from "./Main_Slider.module.scss"
import food from "../../assets/img/joseph-gonzalez.jpg"
import spoon from "../../assets/icons/spoon.svg"

export const Main_Slider = () => {
    return (
        <div className={s.slide}>
            <div className={s.slide__content}>
                <div className={s.slide__label}>Chase the new Flavour</div>
                <div>
                    <img className={s.slide__spoon} src={spoon}></img>
                </div>
                <div className={s.slide__tittle}>The key to fine dining</div>
                <div className={s.slide__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <a href="#" className={s.slide__button}>Explore Menu</a>
            </div>

            <div className={s.slide__ibg}>
                <img src={food} alt="food"></img>
            </div>
        </div>
    )
}