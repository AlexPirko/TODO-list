export const initialState = await fetch(
    'https://jsonplaceholder.typicode.com/users/1/todos',
)
    .then((response) => response.json())
    .then((data) => data);
