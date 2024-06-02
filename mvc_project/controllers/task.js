const Task = require("../models/Task");

const update = async (req, res) => {
    try {
        const { task_id, name, deadline } = req.body;
        await Task.updateTask(task_id, { name, deadline });
        res.status(200).send("Task updated successfully");
    } catch (error) {
        console.log(error);
        res.status(400).send("Incorrect or empty fields");
    }
};

const add = async (req, res) => {
    try {
        const { name, deadline } = req.body;
        await Task.create({ name, deadline });
        res.status(200).send("Task created successfully");
    } catch (error) {
        console.log(error);
        res.status(400).send("Incorrect or empty fields");
    }
};

const finishTask = async (req, res) => {
    try {
        const { task_id } = req.body;
        await Task.updateTask(task_id, { is_finished: true });
        res.status(200).send("Task finished successfully");
    } catch (error) {
        console.log(error);
        res.status(400).send("Incorrect or empty fields");
    }
};

module.exports = {
    finishTask,
    update,
    add
};
