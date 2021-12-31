var tasks= [
    "Go to the cinema",
    "Drop the rubbish",
    "Play the guitar"
    ];

    var todoList= document.querySelector('#todo_list');

    for (let i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        doAddTask(task,'element_'+i);
        
    }
    //Eliminar nodo
    var removedElement = document.getElementById('element_1');
    todoList.removeChild(removedElement);


    //Eliminar nodo con delay
    setTimeout(function(){
        var elementToRemove = document.getElementById('element_0');
        todoList.removeChild(elementToRemove);
    },2000)

    //Boton Insertar tareas y eventos
    var addTask = document.getElementById("addTaskButton");
    cont=1;
    var eventAddTask = addTask.addEventListener('click',function(){
        cont++
        var input = document.getElementById("inputText").value;
        doAddTask(input,'element_'+cont);
        tasks.push(input);
        console.log(tasks.toLocaleString());
    console.log(input);

});

function doAddTask(task, id){
    //Insertar nodo
    var li = document.createElement('li');
    li.textContent = task;
    todoList.appendChild(li);
    if(id){li.id=id;}


}



    

