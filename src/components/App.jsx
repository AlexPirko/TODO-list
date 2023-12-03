import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Header from './Header/Header';
import InputTask from './InputTask/InputTask';
import TasksContainer from './TasksContainer/TasksContainer';
import TasksFilter from './TasksFilter/TasksFilter';
import { addInitTask } from '../store/tasks/tasks-actions';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users/1/todos',
            );
            const data = await response.json();
            dispatch(addInitTask(data));
        }
        fetchData();
    }, [dispatch]);

    return (
        <main>
            <Header />
            <InputTask />
            <TasksFilter />
            <TasksContainer />
        </main>
    );
};

export default App;
