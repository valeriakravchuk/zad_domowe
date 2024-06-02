const path = require("../path");
const Task = require("../models/Task");

const renderHomePage = async (req, res) => {
    const param = req.params.page;
    try {
        if (typeof param === "undefined") {
            let tasks = await Task.getToDo(new Date());
            res.render(path + "/views/active.ejs", {tasks});
        } else if (param === "expired") {
            let tasks = await Task.getExpired();
            res.render(path + "/views/expired.ejs", {tasks});
        } else if (param === "finished") {
            let tasks = await Task.getFinished();
            res.render(path + "/views/finished.ejs", {tasks});
        } else {
            const error = new Error("Page not found")
            res.render(path + "/views/error.ejs", {error})
        }
    } catch (error) {
        console.log(error);
        res.render(path + "/views/error.ejs", {error});
    }
};

module.exports = {
    renderHomePage
};
