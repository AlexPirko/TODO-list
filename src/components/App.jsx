import Header from './Header/Header';
import InputTask from './InputTask/InputTask';
import TasksContainer from './TasksContainer/TasksContainer';

const App = () => {
    return (
        <main>
            <Header/>
            <InputTask />
            <TasksContainer />
        </main>
    );
};

export default App;
