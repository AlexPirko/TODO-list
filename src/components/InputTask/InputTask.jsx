import styles from '../../styles/InputTask.module.css';

import { useState } from 'react';

const InputTask = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <section className={styles.inputTask}> 
            <input
                className={styles.inputTaskValue}
                type='text'
                placeholder='Add todo...'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='styles.inputTaskBtn' onClick={() => {}}>Add</button>
        </section>
    );
};

export default InputTask;
