import React, { useState } from 'react'
import axios from 'axios'
import styles from './Massage.module.scss'
const API_URL = process.env.REACT_APP_API_URL

const Massage = ({ massages, setMassages, inputName, massage }) => {
    const { _id, name, text } = massage
    const [deleteMassage, setDeleteMassage] = useState(false)

    const removeMassage = () => {
        setDeleteMassage(!deleteMassage)
    }

    const yesRemove = (id) => {
        // setMassages(massages.filter(m => m._id !== _id))
        // setDeleteMassage(!deleteMassage)
        axios.delete(API_URL + 'api/messages/' + id)
            .then(res => {
                console.log(res.data.msg)
                setMassages(massages.filter(m => m._id !== id))
                setDeleteMassage(!deleteMassage)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const noRemove = () => {
        setDeleteMassage(!deleteMassage)
    }

    return (
        <div className={`${styles.align} ${inputName === name ? styles.my_massage : ''}`}>
            <div onClick={removeMassage} className={styles.massage}>
                <h6 className={inputName === name ? styles.my_color : ''} >{name}</h6>
                <p>{text}</p>
            </div>
            <div className={`${styles.pop_up_2} ${!deleteMassage ? styles.hidden : ''}`}>
                <div className={styles.window}>
                    <h3>Вы хотите удалить данное сообщение?</h3>
                    <div className={styles.btns}>
                        <div onClick={noRemove} className={styles.btn}>Нет</div>
                        <div onClick={() => yesRemove(_id)} className={`${styles.btn} ${styles.yes}`}>Да</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Massage