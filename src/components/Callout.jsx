import styles from "./callout.module.scss";

// Third Party Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Callout({ children, title }) {
    console.log(styles);
    return (
        <div className={styles['c-callout']}>
            <header>
                <input className={styles['c-callout__toggle']} type="checkbox"
                    name="toggle" id="toggle"/>
                <FontAwesomeIcon icon={faArrowRight} />
                <label className={styles['c-callout__header']}
                    for="toggle">{title}</label>
            </header>
            <article className={styles['c-callout__content']}>
                {children}
            </article>
        </div>
    );
}
