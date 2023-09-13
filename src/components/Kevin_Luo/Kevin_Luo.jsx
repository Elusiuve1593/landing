import s from "./Kevin_luo.module.scss";
import photo from "../../assets/img/kevin.jpg";
import spoon from "../../assets/icons/spoon.svg";
import quote from "../../assets/icons/quote.svg";
import sign from "../../assets/icons/kevin-luo.svg";

export const Kevin_Luo = () => {
    return (
        <div className={s.container}>
            <div>
                <img
                    className={s.container__photo}
                    src={photo}
                    alt="photo" />
            </div>
            <div >
                <div className={s.container__word}>Chef's Word</div>
                <div >
                    <img
                        className={s.container__spoon}
                        src={spoon}
                        alt="spoon" />
                </div>
                <div className={s.container__header}>
                    What We Believe In
                </div>
                <div className={s.container__text}>
                    <img
                        className={s.container__quote}
                        src={quote}
                        alt="quote" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat omnis hic molestias voluptatum quod odio, ullam, facere nisi corrupti maxime dolor dolorum debitis voluptatem numquam repellendus, iusto cumque totam ipsa cum aliquam! Et nihil odit quia eligendi nesciunt error assumenda.
                </div>
                <div className={s.container__name}>
                    Kevin Luo
                </div>
                <div className={s.container__job}>Chef & Founder</div>
                <div className={s.container__signature}>
                    <img src={sign} alt="sign" />
                </div>
            </div>
        </div>
    )
}