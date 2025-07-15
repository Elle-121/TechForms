
import styles from "./callout.module.scss";


export default function Callout({ children, title }) {
    console.log(styles);
    return (
        <div className={styles['c-callout']}>
            <header>
                <input className={styles['c-callout__toggle']} type="checkbox"
                    name="toggle" id="toggle"/>
                <label className={styles['c-callout__header']}
                    for="toggle">{title}</label>
            </header>
            <article className={styles['c-callout__content']}>
                {children}
            </article>
        </div>
    );
}
