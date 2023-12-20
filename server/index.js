// index.js
const express = require('express');
const app = express();
const cors = require('cors');


const db = require('./models');

//middleware
app.use(express.json());
app.use(cors());

// Routes
const postRoutes = require('./routes/post');
app.use('/post', postRoutes); // Updated middleware

const commentsRoutes = require('./routes/Comments');
app.use('/comments',commentsRoutes);

const usersRouter = require('./routes/User');
app.use('/auth',usersRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server Running on port 3001");
    });
});
