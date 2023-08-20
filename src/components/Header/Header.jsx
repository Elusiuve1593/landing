import { useEffect, useState } from "react";
import s from "./Header.module.scss"
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";


export const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className={s.header}>

            <div className={s.header__container}>
                <a href="#" className={s.header__logo}>
                    Gerícht
                </a>

                {windowWidth < 767.98 ? <BurgerMenu />
                    : <>
                        <div className={s.header__menu}>
                            <ul className={s.header__menu_list}>
                                <li>
                                    <a href="#">Home </a>
                                    <a href="#">Pages </a>
                                    <a href="#">Contact Us </a>
                                    <a href="#">Blog </a>
                                    <a href="#">Landing</a>
                                </li>
                            </ul>
                        </div>

                        <ul className={s.header__auth}>
                            <li>
                                <a href="#" className={s.header__auth_link}>
                                    Log In
                                </a>
                            </li>
                            <div> </div>
                        </ul>
                    </>}
            </div>
        </div>
    )
}