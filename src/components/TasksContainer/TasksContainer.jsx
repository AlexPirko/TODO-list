import styles from '../../styles/TasksContainer.module.css';

import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import TaskBlock from '../TaskBlock/TaskBlock';

const TasksContainer = () => {
    const [tasks, setTasks] = useState([]);
    const [pages, setPages] = useState(0);

    // Get Data
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((response) => response.json())
            .then((data) => setTasks(data));
    }, []);

    //Add Pagination
    const tasksPerPage = 6;
    const activePage = pages * tasksPerPage;
    const pagesCount = Math.ceil(tasks.length / tasksPerPage);
    const handlePageChange = ({ selected }) => {
        setPages(selected);
    };

    return (
        <section className={styles.tasksContainer}>
            <div>
                {!tasks.length && (
                    <h3 className={styles.noTasksTitle}>
                        You haven&apos;t created any tasks yet
                    </h3>
                )}
                {tasks
                    .slice(activePage, activePage + tasksPerPage)
                    .map((task) => (
                        <TaskBlock
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            completed={task.completed}
                        />
                    ))}
            </div>

            {tasks.length > tasksPerPage + 1 && (
                <ReactPaginate
                    nextLabel={'>'}
                    previousLabel={'<'}
                    containerClassName={styles.pagination}
                    activeClassName={'activePage'}
                    pageLinkClassName={''}
                    nextClassName={'nextBtn'}
                    previousClassName={'prevBtn'}                    
                    disabledClassName={''}
                    disabledLinkClassName={''}
                    pageCount={pagesCount}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageChange}
                />
            )}
        </section>
    );
};

export default TasksContainer;
