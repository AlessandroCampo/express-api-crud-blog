
const posts = require('../postsDb.json');

module.exports = (req, res, next) => {
    const slug = req.params.slug;
    const postExists = posts.some(s => slug === s.slug);
    if (postExists) {
        next();
        return
    }

    res.format({
        "html": () => {
            return res.type("html").status(404).send(`<h1> Could not find post with slug ${slug}</h1>`);
        },
        "json": () => {
            return res.type("json").status(404).send({
                success: false,
                errror: `Could not find post with slug ${slug}`
            });
        }
    })

}