export const filters = (state = 'allTasks', action) => {
    switch (action.type) {
        case 'SET_FILTER': {
            return action.filter;
        }
        default: {
            return state;
        }
    }
};