import { initialState } from '../../helpers/getInitialState';

export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.title,
                    completed: false,
                },
            ];
        }

        case 'EDIT_TASK': {
            return state.map((task) =>
                task.id === action.id ? { ...task, title: action.title } : task,
            );
        }

        case 'CHECK_TASK': {
            return state.map((task) =>
                task.id === action.id
                    ? { ...task, completed: !task.completed }
                    : task,
            );
        }

        case 'REMOVE_TASK': {
            return state.filter((task) => task.id !== action.id);
        }

        default: {
            return state;
        }
    }
};
