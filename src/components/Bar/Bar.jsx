import s from "./Bar.module.scss";
import logo from "../../assets/img/main-decor.svg"

export const Bar = () => {
    return (
        <div className={s.menu_block}>
            <img
                className={s.menu_block__logo}
                src={logo}
                alt="logo"
            />
            <div className={s.menu_block__container}>
                <a href="#" className={s.menu_block__link}>Bar Menu</a>
                <a href="#" className={s.menu_block__link}>Food Menu</a>
                <a href="#" className={s.menu_block__link}>Desserts Menu</a>
            </div>
        </div>
    )
}