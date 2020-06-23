const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneID = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneID,
    name: 'Bob',
    email: 'samplaysmobile@gmail.com',
    password: 'saywhatttt',
    tokens: [{
        token: jwt.sign({_id: userOneID}, process.env.JWT_SECRET)
    }]
}



const userTwoID = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoID,
    name: 'Gus',
    email: 'gus@example.com',
    password: 'myhouseisonfire',
    tokens: [{
        token: jwt.sign({_id: userTwoID},process.env.JWT_SECRET)
    }]
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    task: 'First task',
    completed: false,
    owner: userOne._id
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    task: 'Second task',
    completed: true,
    owner: userOne._id
}
const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    task: 'Third task',
    completed: false,
    owner: userTwo._id
}
module.exports = {
    userOneID,
    userOne,
    userTwoID,
    userTwo,
    setupDatabase,
    taskOne,
    taskTwo,
    taskThree
}