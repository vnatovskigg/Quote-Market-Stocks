import React from 'react';
import { Link } from 'react-router-dom';
import { getNewsNav } from "../../services/navigation";
import styles from './index.module.css';

const NewsMenu = () => {
    const today = new Date().toString().slice(0, 15);
    let links = getNewsNav().sort(compare);
    function compare(a, b) {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
      
        let comparison = 0;
        if (titleA > titleB) {
          comparison = 1;
        } else if (titleA < titleB) {
          comparison = -1;
        }
        return comparison;
      }

    return (
        <div className={styles.container}>
            <div className={styles.dateContainer}>
                <h6 className={styles.head}>
                    <p>Headlines Today</p>
                </h6>
                <p className={styles.date}>{today}</p>
            </div>
            <div className={styles.menu}>
                <ul>
                    {links.map(link => {
                        return (
                        <Link to={link.link} className={styles.navLink}>
                            {link.title}
                        </Link>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default NewsMenu;