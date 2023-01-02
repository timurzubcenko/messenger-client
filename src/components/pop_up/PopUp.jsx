import React from 'react'
import styles from './PopUp.module.scss'

const PopUp = ({ animateName, nameNotSave, onChangeName, inputName, saveName, ...props }) => {
    return (
        <div className={`${styles.pop_app} ${nameNotSave ? '' : styles.hidden}`}>
            <div className={styles.window}>
                <h3>Введите свое имя</h3>
                <input
                    onChange={onChangeName}
                    value={inputName}
                    className={`${styles.input_name} ${animateName ? styles.onAnimate : ''}`}
                    type="text"
                    name="" id=""
                    placeholder='Введите имя' />
                <div className={styles.btns}>
                    <div onClick={saveName} className={`${styles.btn} ${styles.yes}`}>Ок</div>
                </div>
            </div>
        </div>
    );
};
export default PopUp