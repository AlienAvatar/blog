const User = require('../lib/mongo').User

module.exports = {
    // 注册一个用户
    create: function create (user) {
        return User.create(user).exec()
    },

    // 通过用户名获取用户信息
    getUserByName: function getUserByName (name) {
        return User
            .findOne({ name: name })
            .addCreatedAt()
            .exec()
    },

    //通过authorid 来获取用户信息
    getUserById: function getUserById (_id) {
        return User
            .findOne({ _id: _id })
            .addCreatedAt()
            .exec()
    }
}