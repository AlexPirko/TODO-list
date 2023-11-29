import styles from '../../styles/TasksContainer.module.css';

import { useState, useEffect } from 'react';

import TaskBlock from '../TaskBlock/TaskBlock';

const TasksContainer = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((response) => response.json())
            .then((data) => setTasks(data));
    }, []);

    return (
        <section className={styles.tasksContainer}>
            {!tasks.length && (
                <h3 className={styles.noTasksTitle}>
                    You haven&apos;t created any tasks yet
                </h3>
            )}
            {tasks.map((task) => (
                <TaskBlock
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    completed={task.completed}
                />
            ))}
        </section>
    );
};

export default TasksContainer;
