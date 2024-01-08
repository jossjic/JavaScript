import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();//sirve para evitar que se refresque la pagina en automatico al enviar el formulario, esto es un valor default
    const input = document.querySelector("[data-form-input]")
    const value = input.value;
    const task = document.createElement("li");
    const list = document.querySelector("[data-list]")
    task.classList.add("card")
    input.value= "";
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);
};

btn.addEventListener("click", createTask)
