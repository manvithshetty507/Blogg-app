module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users",{
        username:{
            type:DataTypes.STRING,
            allownull:false
        },
        password:{
            type:DataTypes.STRING,
            allownull:false
        }
    })

    //associate
    Users.associate = (models) => {
        Users.hasMany(models.Posts, {
            onDelete:"cascade",
        });
    };

    return Users;
}