import mysql from 'mysql2';

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});
const handleHomePage = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = (req, res) => {
    return res.render("users.ejs");
}
const handleCreateNewUser = (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    connection.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password],
        function (err, result, fields) {
            if (err) {
                console.log(err)
            }
        }
    );
    return res.send("Handle Create New User");
}

module.exports = {
    handleHomePage, handleUserPage, handleCreateNewUser
}