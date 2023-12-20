//comments.js in models
module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        commentBody: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            // allowNull: false
        }
    });

    Comments.associate = (models) => {
        Comments.belongsTo(models.Posts, {
            foreignKey: 'PostId', 
        });
    };
    

    return Comments;
};
