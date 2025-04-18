const { get } = require("http");

const users = [
    {id: 1, name: 'John Doe' },
    {id: 2, name: 'Jane Doe' },
];

const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);

    (user)
    ? callback(`USUARIO NO ENCONTRADO ${id}`)
    : callback(null, user);

}
 module.exports = { getUserById };