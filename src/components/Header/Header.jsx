import styles from '../../styles/Header.module.css';

import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const Header = () => {
    //Animation properties
    const title = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 1.2,
                staggerChildren: 0.32,
            },
        },
    };
    const letter = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
            },
        },
    };
    const text = 'Todo List';

    return (
        <header className={styles.header}>
            <motion.h1 variants={title} initial='initial' animate='animate'>
                {text.split(' ').map((elem, ind) => (
                    <motion.span
                        key={elem + '-' + ind}
                        className='inline-block'
                        variants={letter}>
                        {elem}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
            <FontAwesomeIcon
                className={styles.headerIcon}
                icon={faCalendarCheck}
            />
        </header>
    );
};

export default Header;
