import s from "../About/About.module.scss"
import knife from "../../assets/img/knife.png"
import spoon from "../../assets/icons/spoon.svg"

export const About = () => {
    return (
        <div className={s.about}>
            <div className={s.about__section}>
                <div>
                    <h3>About us</h3>
                    <div className={s.spoon_container} >
                        <img
                            className={s.spoon}
                            src={spoon}
                            alt="spoon"
                        />
                    </div>
                    <div className={s.about__section_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                    </div>
                    <a href="#" className={s.button}>Know more</a>
                </div>
                <div className={s.about__section_knife}>
                    <img
                        className={s.knife}
                        src={knife}
                        alt="knife" />
                </div>
                <div>
                    <h3>Our History</h3>
                    <div className={s.spoon_container}>
                        <img
                            className={s.spoon}
                            style={{ transform: "rotate(180deg)" }}
                            src={spoon}
                            alt="spoon"
                        />
                    </div>
                    <div className={s.about__section_text}>
                        Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
                    </div>
                    <a href="#" className={s.button}>Know more</a>
                </div>
            </div>
        </div>
    )
}