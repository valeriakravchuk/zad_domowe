const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");

const Task = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    deadline: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    is_finished: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    is_expired: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, { timestamps: false, validate: true });


Task.createTask = async function() {
    return Task.create();
};

Task.checkIfNotExpired = async function(current_time) {
    const tasks = await Task.findAll({ where: { is_expired: false, is_finished: false } });
    const promises = tasks.map(task => {
        const deadline = new Date(task.deadline);
        if (deadline < current_time) {
            return task.update({ is_expired: true });
        }
        return Promise.resolve();
    });
    await Promise.all(promises);
};

Task.finish = async function() {
    return Task.update({ is_finished: true });
};

Task.getToDo = async function(current_time) {
    await Task.checkIfNotExpired(current_time);
    return Task.findAll({ where: { is_expired: false, is_finished: false } });
};

Task.getFinished = async function() {
    return Task.findAll({ where: { is_finished: true } });
};

Task.getExpired = async function() {
    return Task.findAll({ where: { is_expired: true } });
};

Task.updateTask = async function(taskId, updateData) {
    const task = await Task.findByPk(taskId);
    return task.update(updateData);
};

module.exports = Task;
