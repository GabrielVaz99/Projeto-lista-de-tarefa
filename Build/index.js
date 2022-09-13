"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("app input ");
let buttonElement = document.querySelector("#app button");
// let tarefas: string [];
let listaSalva = localStorage.getItem("@listagem_tarefas");
let tarefas = listaSalva !== null && JSON.parse(listaSalva) || [];
function listar() {
    listElement.innerHTML = "";
    tarefas.map(item => {
        let todoElement = document.createElement("li");
        let tarefaText = document.createTextNode(item);
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        let posicao = tarefas.indexOf(item);
        linkElement.setAttribute("onclick", "deletarTarefa (${posicao})");
        let linkText = document.createTextNode("excluir");
        linkElement.appendChild(linkText);
        todoElement.appendChild(tarefaText);
        listElement.appendChild(todoElement);
    });
}
listar();
function add() {
    if (inputElement.value === "") {
        alert("digite alguma tarefa");
        return false;
    }
    else {
        let tarefaDigitada = inputElement.value;
        tarefas.push(tarefaDigitada);
        inputElement.value = "";
        listar();
        salvar();
    }
}
function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    listar();
    salvar();
}
function salvar() {
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
}
buttonElement.onclick = add;
