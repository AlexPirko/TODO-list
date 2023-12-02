export const getStorageState = () => {
    try {
        const storageState = localStorage.getItem('state');

        if (storageState === null) {
            return undefined;
        }

        return JSON.parse(storageState);
    } catch (error) {
        return undefined;
    }
};
