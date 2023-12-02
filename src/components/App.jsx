import Header from './Header/Header';
import InputTask from './InputTask/InputTask';
import TasksContainer from './TasksContainer/TasksContainer';
import TasksFilter from './TasksFilter/TasksFilter';

const App = () => {
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
