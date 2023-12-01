import styles from '../../styles/TasksContainer.module.css';

import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

import TaskBlock from '../TaskBlock/TaskBlock';

const TasksContainer = () => {
    const [pages, setPages] = useState(0);

    const tasks = useSelector((store) => store.tasks);

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
                    pageClassName={styles.pageClass}
                    activeClassName={styles.activePage}
                    pageLinkClassName={styles.activeLink}
                    nextClassName={styles.nextBtn}
                    previousClassName={styles.prevBtn}
                    disabledClassName={styles.disabled}
                    disabledLinkClassName={styles.disabledLink}
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
