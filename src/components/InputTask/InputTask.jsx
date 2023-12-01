import styles from '../../styles/InputTask.module.css';

import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { addTask } from '../../store/tasks/tasks-actions';

const InputTask = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        dispatch(addTask(value));
        setValue('');
    };

    return (
        <section className={styles.inputTask}>
            <input
                className={styles.inputTaskValue}
                type='text'
                placeholder='Add todo...'
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <button className='styles.inputTaskBtn' onClick={handleAddTask}>
                Add
            </button>
        </section>
    );
};

export default InputTask;
