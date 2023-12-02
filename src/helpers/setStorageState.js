export const setStorageState = (state) => {
    try {
        const setState = JSON.stringify(state);

        localStorage.setItem('state', setState);
    } catch (error) {
        console.error(error);
    }
};
