//Declaracion de variables
const userInput = document.getElementById("userInput");
const list = document.getElementById("list");
const input = document.querySelector('input[type="text"]');
const stats = document.getElementById('stats');
let idCounter = 0;


userInput.addEventListener("submit", (event) => {
  event.preventDefault(); //Mantener la data en la consola
  console.log("Se ha dipsparado el evento submint");
  addTask(); //Colocamos la funcion
});

let addTask = () => {
    idCounter++;
    let newValue = input.value;
    list.innerHTML += `<div class="task-container" id="${idCounter}">
                            <label for="">
                                <input type="checkbox" class="checkbox" > ${newValue}
                            </label>
                            <img src="images/bote-de-basura.png" alt="" class="closeBtn">
                        </div>`;
    input.value = "";
    updateStats();
};

list.addEventListener('click',(event)=>{
    console.log(event);
    console.log(event.target.nodeName == 'INPUT');
    console.log(event.target.nodeName == 'IMG')
    console.log(event.target.parentNode.id);
    if (event.target.nodeName == 'INPUT') {
        updateStats();
        console.log(event.target.parentNode.id);
    }else if (event.target.nodeName == 'IMG') {
        deleteTask(event.target.parentNode.id)
        console.log("Elemento Borrado")
    }
});



let updateStats = ()=>{
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} Tareas Competadas: ${checkbox.length} </p>`
}


//Eliminar una tarea
let deleteTask = (id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
}
