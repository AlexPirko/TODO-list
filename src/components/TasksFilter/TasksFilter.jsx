import styles from '../../styles/TasksFilter.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from '../../store/filters/filters-selectors';
import { setFilter } from '../../store/filters/filters-actions';

const TasksFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return (
        <section className={styles.tasksFilter}>
            <button
                className={styles.tasksFilterBtn}
                onClick={() => dispatch(setFilter('allTasks'))}
                style={{
                    textDecoration:
                        filter === 'allTasks' ? 'underline' : 'none',
                }}>
                All
            </button>
            <button
                className={styles.tasksFilterBtn}
                onClick={() => dispatch(setFilter('incompleted'))}
                style={{
                    textDecoration:
                        filter === 'incompleted' ? 'underline' : 'none',
                }}>
                Incomplete
            </button>
            <button
                className={styles.tasksFilterBtn}
                onClick={() => dispatch(setFilter('completed'))}
                style={{
                    textDecoration:
                        filter === 'completed' ? 'underline' : 'none',
                }}>
                Complete
            </button>
        </section>
    );
};

export default TasksFilter;
