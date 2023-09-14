import s from "./Subscription.module.scss";
import spoon from "../../assets/icons/spoon.svg";

export const Subscription = () => {
    return (
        <div className={s.subscription_container}>
            <div>
                <div className={s.subscription_container__text}>
                    <div className={s.subscription_container__main}>
                        Newsletter
                    </div>
                    <img
                        className={s.subscription_container__spoon}
                        src={spoon}
                        alt="spoon" />
                    <div className={s.subscription_container__header}>
                        Subscribe To Our Newsletter
                    </div>
                    <div className={s.subscription_container__wish}>
                        And newer miss latest Updates!
                    </div>
                    <div >
                        <input
                            className={s.subscription_container__input}
                            type="text"
                            placeholder="Email Address"
                        />
                        <a
                            className={s.subscription_container__btn}
                            href="#"
                        >
                            Subscribe
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}