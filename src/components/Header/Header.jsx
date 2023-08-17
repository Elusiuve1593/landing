import s from "./Header.module.scss"

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__container}>
                <a href="#" className={s.header__logo}>
                    Gerichgt
                </a>

                <div className={s.header__menu}>
                    <nav className={s.header__menu_body}>
                        <ul className={s.header__menu_list}>
                            <li className={s.header__menu_item}>
                                <a href="#">Home </a>
                                <a href="#">Pages </a>
                                <a href="#">Contact Us </a>
                                <a href="#">Blog </a>
                                <a href="#">Landing </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <ul className={s.header__auth}>
                    <li className={s.header__auth_item}>
                        <a href="#" className={s.header__auth_link}>
                            Log In / Registration
                        </a>
                    </li>

                    <li className={s.header__auth_item}>
                        <a href="#" className={s.header__auth_link}>
                            Book table
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}