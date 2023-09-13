import s from "./Happy_hours.module.scss"

export const Happy_hours = () => {
    return (
        <div className={s.main_container}>
            <div className={s.main_container__header}>Happy Hours</div>
            <div className={s.main_container__hours}>Monday - Friday (4:00 Pm - 7:00 Pm)</div>
        </div>
    )
}