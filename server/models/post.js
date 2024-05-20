"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title required",
          },
          notEmpty: {
            msg: "Title required",
          },
          len: {
            args: 20,
            msg: "Title minimum 20 characters",
          },
        },
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Content required",
          },
          notEmpty: {
            msg: "Content required",
          },
          len: {
            args: 200,
            msg: "Content minimum 200 characters",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Category required",
          },
          notEmpty: {
            msg: "Category required",
          },
        },
        len: {
          args: 3,
          msg: "Category minimum 3 characters",
        },
      },
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
