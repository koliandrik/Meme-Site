const Username = require('./Username');
const Post = require('./Post');
const Comment = require('./Comment');

Username.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(Username, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

Comment.belongsTo(Username, {
    foreignKey: 'user_id',
});

Username.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = { Username, Post, Comment };