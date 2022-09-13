let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("input ul") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;
// let tarefas: string [];

let listaSalva = localStorage.getItem("@listagem_tarefas");
let tarefas: string[] = listaSalva !== null && JSON.parse(listaSalva) || [];

//Testar essa função ao invés da linha 7
// let tarefas = listaSalva !== null && JSON.parse(listaSalva) || []; 

function listar() {
    listElement.innerHTML = "";

    tarefas.map(function (item) {
        let todoElement = document.createElement("li");
        let tarefaText = document.createTextNode(item);
        let linkElement = document.createElement("a");
        
        linkElement.setAttribute("href", "#");

        let posicao = tarefas.indexOf(item);

        linkElement.setAttribute("onclick", "deletarTarefa (${posicao})");
        let linkText = document.createTextNode("excluir");

        linkElement.appendChild(linkText);
        todoElement.appendChild(tarefaText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    });
}

listar();
function add() {
    if (inputElement.value === "") {
        alert("digite alguma tarefa")
        return false;
    } else {
        let tarefaDigitada: string = inputElement.value;
        tarefas.push(tarefaDigitada);
        inputElement.value = "";
        listar();
        salvar();
        console.log("salvo com sucesso");
    }
}
buttonElement.onclick = add;

function deletarTarefa(posicao: number) {
    tarefas.splice(posicao, 1);
    listar();
    salvar();
}

function salvar() {
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas))
}