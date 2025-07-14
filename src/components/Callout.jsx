
import styles from "./callout.module.scss";



export default function Callout({ children, title }) {
    return (
        <div className={styles['c-callout']}>
            <input className={styles['c-callout__toggle']} type="checkbox"
                name="toggle" id="toggle"/>
            <label className={styles['c-callout__header']}
                for="toggle">{title}</label>
            <div className={styles['c-callout__content']}>
                {children}
            </div>
        </div>
    );
    
}
