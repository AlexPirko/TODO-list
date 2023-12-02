export const selectAllTasks = (state) => state.tasks;

export const selectUndoneTasks = (state) =>
    state.tasks.filter((task) => task.completed === true);

export const selectCurrTasks = (state, filter) => {
    switch (filter) {
        case 'allTasks': {
            return state.tasks;
        }
        case 'incompleted': {
            return state.tasks.filter((tasks) => !tasks.completed);
        }
        case 'completed': {
            return state.tasks.filter((tasks) => tasks.completed);
        }
    }
};
