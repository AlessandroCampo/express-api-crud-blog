const express = require('express')
const multer = require('multer');
const router = express.Router();
const postController = require('../controllers/posts.js')
const utils = require('../utils.js');
const storage = require('../middlewares/storage.js');
const checkPostExists = require('../middlewares/checkPostExists.js');
const upload = multer({ storage });


router.get('/', postController.index)
    .post('/create', upload.single('image'), postController.create)
    .get('/:slug', checkPostExists, postController.show)
    .get('/:slug/download', checkPostExists, postController.download)
    .post('/:slug/comment', checkPostExists, postController.comment)

module.exports = router;