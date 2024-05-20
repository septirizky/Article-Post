const router = require("express").Router();

const { postController } = require("../controllers/controller");

router.post("/article", postController.createArticle);
router.get("/article", postController.getArticle);
router.get("/article/:id", postController.getArticleById);
router.put("/article/:id", postController.updateArticle);
router.delete("/article/:id", postController.deleteArticle);

module.exports = router;
