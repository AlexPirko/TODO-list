import styles from '../../styles/Header.module.css';

import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Todo List</h1>
            <FontAwesomeIcon
                className={styles.headerIcon}
                icon={faCalendarCheck}
            />
        </header>
    );
};

export default Header;
