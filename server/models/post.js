// post.js inside models
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    // association
    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade"
        });

        Posts.belongsTo(models.Users, {
            
        });
    };

    return Posts;
};

