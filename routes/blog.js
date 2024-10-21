const express = require('express');
const router = express.Router();

let posts = [];

router.get('/', (req, res) => {
    res.render('index', { posts });
});

router.get('/new', (req, res) => {
    res.render('post', { post: null }); 
});

router.post('/', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content });
    res.redirect('/blog');
});

router.get('/edit/:id', (req, res) => {
    const post = posts[req.params.id];
    res.render('post', { post, id: req.params.id });
});

router.post('/edit/:id', (req, res) => {
    const { title, content } = req.body;
    posts[req.params.id] = { title, content };
    res.redirect('/blog');
});

router.post('/delete/:id', (req, res) => {
    posts.splice(req.params.id, 1);
    res.redirect('/blog');
});

module.exports = router;
