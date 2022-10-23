// To do list
let todoList = [
    {
        id: "1",
        description:"Completion of assignment",
        date:"10-23-2022",
        category:"Work"
    },
    {
        id: "2",
        description:"Let's make to do apps",
        date:"10-25-2022",
        category:"School"
    }
]

let nextId = 3;

module.exports.homeGet = function(req,res){
    return res.render('home',{
        title:"Home",
        tasks:todoList
    });
}

module.exports.homePost = function(req,res){
    todoList.push({
        id: nextId++,
        description: req.body.description,
        date: req.body.dueDate,
        category: req.body.category
    });
    return res.redirect('back');
}

module.exports.homeDelete = function(req,res){
    todoList = todoList.filter((task)=>{
        return !req.body.taskId.includes(task.id);
    })
    return res.redirect('back');
}