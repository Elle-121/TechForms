
import styles from "./accordion.module.scss";



export default function Accordion({ children, title }) {
    return (
        <div className={styles['o-accordion-main']}>
            <div>
                <input type="radio"/>
                <label>{title}</label>
                {children}
            </div>
        </div>
    );
    
}
