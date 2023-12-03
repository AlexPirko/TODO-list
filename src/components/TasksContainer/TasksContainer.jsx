import styles from '../../styles/TasksContainer.module.css';

import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import TaskBlock from '../TaskBlock/TaskBlock';
import {selectAllTasks } from '../../store/tasks/tasks-selectors';

const TasksContainer = () => {
    const [pages, setPages] = useState(0);
    const tasks = useSelector((state) => selectAllTasks(state));

    //Add Pagination
    const tasksPerPage = 6;
    const activePage = pages * tasksPerPage;
    const pagesCount = Math.ceil(tasks.length / tasksPerPage);
    const handlePageChange = ({ selected }) => {
        setPages(selected);
    };

    //Add animation
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2,
            },
        },
    };


    return (
        <section className={styles.tasksContainer}>
            <motion.div variants={container} initial='hidden' animate='visible'>
                {!tasks.length && (
                    <motion.h3 className={styles.noTasksTitle}>
                        You haven&apos;t created any tasks yet
                    </motion.h3>
                )}
                {tasks
                    .toSorted((a, b) => b.id - a.id)
                    .slice(activePage, activePage + tasksPerPage)
                    .map((task) => (
                        <TaskBlock
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            completed={task.completed}
                            
                        />
                    ))}
            </motion.div>

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
