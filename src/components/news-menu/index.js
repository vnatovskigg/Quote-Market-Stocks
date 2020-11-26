import React from 'react';
import styles from './index.module.css';

const NewsMenu = () => {
    const today = new Date().toString().slice(0, 15);
    
    return (
        <div className={styles.container}>
            <div className={styles.dateContainer}>
                <h6 className={styles.head}>
                    <p>Headlines Today</p>
                </h6>
                <p className={styles.date}>{today}</p>
            </div>
            
        </div>
    )
}

export default NewsMenu;