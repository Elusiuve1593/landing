import s from "./Footer.module.scss";
import spoon from "../../assets/icons/spoon.svg";
import facebook from "../../assets/icons/logo/facebook.svg";
import twitter from "../../assets/icons/logo/twitter.svg";
import instagram from "../../assets/icons/logo/instagram.svg";

export const Footer = () => {
    return (
        <div>
            <div className={s.footer}>
                <div className={s.contacts}>
                    <div className={s.contacts__head}>
                        Contact Us
                    </div>
                    <div className={s.contacts__text}>
                        New York, NY 10019, USA
                    </div>
                    <div className={s.contacts__phone}>
                        +1 212-344-1230
                    </div>
                    <div className={s.contacts__phone}>
                        +1 212-555-1230
                    </div>
                </div>

                <div className={s.general_information}>
                    <div className={s.general_information__head}>
                        Gerícht
                    </div>
                    <div className={s.general_information__text}>
                        "The best way to find yourself is to lose yourself in the service of others."
                    </div>
                    <img
                        className={s.general_information__spoon}
                        src={spoon}
                        alt="spoon" />

                    <div className={s.general_information__logos}>
                        <img
                            className={s.general_information__logo}
                            src={facebook}
                            alt="facebook" />
                        <img
                            className={s.general_information__logo}
                            src={twitter}
                            alt="twitter" />
                        <img
                            className={s.general_information__logo}
                            src={instagram}
                            alt="instagram" />
                    </div>
                </div>

                <div className={s.working_hours}>
                    <div className={s.working_hours__head}>
                        Working Hours
                    </div>
                    <div className={s.working_hours__text}>
                        Monday-Friday:
                    </div>
                    <div className={s.working_hours__text}>
                        08:00 am - 12:00 am
                    </div>
                    <div className={s.working_hours__text}>
                        Saturday-Sunday:
                    </div>
                    <div className={s.working_hours__text}>
                        07:00 am - 11:00 am
                    </div>
                </div>

            </div>
            <div className={s.rights}>
                2023 Gerícht. All Rights reserved.
            </div>
        </div>
    )
}