const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const delBtn = document.createElement("button");

li.text = 

button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        li.textContent = input.value;
        delBtn.textContent = "❌";

        li.append(delBtn);
        list.append(li);
    }
})

delBtn.addEventListener("click", function() {
    list.removeChild(li);
    input.focus();
})

input.value = ""
input.focus();