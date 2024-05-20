const { Post } = require("../models/index");

class postController {
  static async createArticle(req, res) {
    try {
      const { title, content, category, status } = req.body;

      const articles = await Post.create({
        title,
        content,
        category,
        status,
      });

      res.status(201).json({
        message: "Success create article",
        articles,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getArticle(req, res) {
    try {
      const { page } = req.query;
      let queryOption = {};
      let limit = 5;
      let pageNumb = 1;

      if (page) {
        if (page.size) {
          limit = +page.size;
          queryOption.limit = limit;
        }

        if (page.number) {
          pageNumb = +page.number;
          queryOption.offset = limit * (pageNumb - 1);
        }
      }
      const { count, rows } = await Post.findAndCountAll(queryOption);
      res.status(200).json({
        message: `Success get product`,
        page: pageNumb,
        totalData: count,
        totalPage: Math.ceil(count / limit),
        dataPerPage: limit,
        data: rows,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getArticleById(req, res) {
    try {
      const { id } = req.params;

      const articles = await Post.findByPk(id);

      res.status(200).json({
        message: "Success get detail Article",
        articles,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updateArticle(req, res) {
    try {
      const { id } = req.params;
      const { title, content, category, status } = req.body;

      const articles = await Post.update(
        { title, content, category, status },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json({
        message: "Success update Article ",
        articles,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteArticle(req, res) {
    try {
      const { id } = req.params;

      const articles = await Post.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: "Success delete Article",
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = { postController };
