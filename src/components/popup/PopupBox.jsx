import styles from './PopupBox.module.css'

function PopupBox(){

    return(
        <div className={styles.container}>
            <div className={styles.popup}>
                <h1 className={styles['popup-header']}>Invalid Input</h1>
                <p className={styles['popup-content']}>Please enter a valid name and age (non-empty values)</p>
                <button className={styles['ok-button']}>Okay</button>
            </div>
        </div>
    );
};

export default PopupBox;