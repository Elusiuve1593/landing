import s from "./Happy_customers.module.scss";
import logo from "../../assets/img/main-decor.svg";
import spoon from "../../assets/icons/spoon.svg";
import Wade from "../../assets/img/Customers/Wade.png";
import Jane from "../../assets/img/Customers/Jane.png";
import Robert from "../../assets/img/Customers/Robert.png";
import Brooklin from "../../assets/img/Customers/Brooklin.png";

export const Happy_customers = () => {
    return (
        <div className={s.container}>
            <div className={s.container__logo}>
                <img
                    className={s.logo}
                    src={logo}
                    alt="logo" />
            </div>

            <div className={s.container__header_text}>
                <div className={s.container__text}>
                    <div className={s.container__text_main}>
                        Testimony
                    </div>
                    <img
                        className={s.container__text_spoon}
                        src={spoon}
                        alt="spoon" />
                    <div className={s.container__text_header}>
                        Happy Customers
                    </div>
                </div>

            </div>

            <div className={s.container__customers}>
                <div className={s.container__customers_customer}>
                    <img
                        className={s.container__customers_photo}
                        src={Wade}
                        alt="photo" />
                    <div className={s.container__customers_person}>
                        <div className={s.container__customers_text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus aliquid harum suscipit inventore illum.
                        </div>
                        <div className={s.container__customers_name}>
                            Wade Warren
                        </div>
                        <div className={s.container__customers_position}>
                            Sommelier
                        </div>
                    </div>
                </div>

                <div className={s.container__customers_customer}>
                    <img
                        className={s.container__customers_photo}
                        src={Jane}
                        alt="photo" />
                    <div className={s.container__customers_person}>
                        <div className={s.container__customers_text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus aliquid harum suscipit inventore illum.
                        </div>
                        <div className={s.container__customers_name}>
                            Jane Cooper
                        </div>
                        <div className={s.container__customers_position}>
                            Chef
                        </div>
                    </div>
                </div>

                <div className={s.container__customers_customer}>
                    <img
                        className={s.container__customers_photo}
                        src={Robert}
                        alt="photo" />
                    <div className={s.container__customers_person}>
                        <div className={s.container__customers_text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus aliquid harum suscipit inventore illum.
                        </div>
                        <div className={s.container__customers_name}>
                            Robert Fox
                        </div>
                        <div className={s.container__customers_position}>
                            Chef
                        </div>
                    </div>
                </div>

                <div className={s.container__customers_customer}>
                    <img
                        className={s.container__customers_photo}
                        src={Brooklin}
                        alt="photo" />
                    <div className={s.container__customers_person}>
                        <div className={s.container__customers_text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus aliquid harum suscipit inventore illum.
                        </div>
                        <div className={s.container__customers_name}>
                            Brooklyn Simmons
                        </div>
                        <div className={s.container__customers_position}>
                            Caterer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}