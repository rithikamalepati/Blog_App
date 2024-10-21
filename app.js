const express = require('express');
const app = express();
const path = require('path');
const blogRoutes = require('./routes/blog');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/blog', blogRoutes);

app.get('/', (req, res) => {
    res.redirect('/blog');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
