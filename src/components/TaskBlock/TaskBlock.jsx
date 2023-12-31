import styles from '../../styles/TaskBlock.module.css';

import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faShare } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import {
    editTask,
    removeTask,
    checkTask,
} from '../../store/tasks/tasks-actions';

const TaskBlock = ({ id, title, completed }) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(title);
    const editInputRef = useRef(null);

    //Animation properties
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    //Add input focus
    useEffect(() => {
        if (isEdit) {
            editInputRef?.current?.focus();
        }
    }, [isEdit]);

    const handleEditTask = () => {
        dispatch(editTask(id, value));
        setIsEdit(false);
    };

    return (
        <motion.div className={styles.taskBlock} variants={item}>
            {isEdit ? (
                <input
                    type='text'
                    value={value}
                    ref={editInputRef}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
            ) : (
                <h2
                    className={
                        completed === false
                            ? styles.taskBlockTitle
                            : styles.taskBlockTitleCompleted
                    }>
                    {title}
                </h2>
            )}
            <div className={styles.taskBlockBtnsContainer}>
                {isEdit ? (
                    <button
                        className={styles.taskBlockBtn}
                        onClick={handleEditTask}>
                        <FontAwesomeIcon
                            className={styles.taskBlockIcon}
                            icon={faShare}
                        />
                    </button>
                ) : (
                    <button
                        className={styles.taskBlockBtn}
                        onClick={() => {
                            setIsEdit(true);
                        }}>
                        <FontAwesomeIcon
                            className={styles.taskBlockIcon}
                            icon={faPen}
                        />
                    </button>
                )}

                <button className={styles.taskBlockBtn}>
                    <FontAwesomeIcon
                        className={styles.taskBlockIcon}
                        onClick={() => dispatch(removeTask(id))}
                        icon={faTrashCan}
                    />
                </button>
                <input
                    className={styles.taskBlockInput}
                    disabled={isEdit}
                    type='checkbox'
                    id={id}
                    checked={completed}
                    onChange={() => dispatch(checkTask(id))}
                />
                <label htmlFor={id}></label>
            </div>
        </motion.div>
    );
};

export default TaskBlock;
