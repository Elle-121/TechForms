import styles from "./callout.module.scss";

// Third Party Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Callout({ children, title }) {
    console.log(styles);
    return (
        <div className={styles['c-callout']}>
            <button className={styles['c-callout__header']}>
                <div className={styles['c-callout__heading']}>
                    <FontAwesomeIcon icon={faChevronRight}
                        className={styles['c-callout__toggle']}/>
                    <span>{title}</span>
                </div>
            </button>
            <article className={styles['c-callout__content']}>
                {children}
            </article>
        </div>
    );
}
