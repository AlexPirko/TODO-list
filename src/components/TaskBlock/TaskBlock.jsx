import styles from '../../styles/TaskBlock.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const TaskBlock = (props) => {
    const { id, title, complited } = props;

    return (
        <div className={styles.taskBlock}>
            <h2 className={styles.taskBlockTitle}>{title}</h2>
            <div className={styles.taskBlockBtnsContainer}>
                <button className={styles.taskBlockBtn}>
                    <FontAwesomeIcon
                        className={styles.taskBlockIcon}
                        icon={faPen}
                    />
                </button>
                <button className={styles.taskBlockBtn}>
                    <FontAwesomeIcon
                        className={styles.taskBlockIcon}
                        icon={faTrashCan}
                    />
                </button>
                <input
                    className={styles.taskBlockInput}
                    type='checkbox'
                    id={id}
                    checked={complited}
                    onChange={() => {}}
                />
                <label htmlFor={id}></label>
            </div>
        </div>
    );
};

export default TaskBlock;
