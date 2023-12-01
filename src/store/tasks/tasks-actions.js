export const addTask = (title) => ({
    type: 'ADD_TASK',
    title,
});

export const checkTask = (id) => ({
    type: 'CHECK_TASK',
    id,
});

export const removeTask = (id) => ({
    type: 'REMOVE_TASK',
    id,
});
