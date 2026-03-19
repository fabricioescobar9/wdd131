const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;

        const delBtn = document.createElement("button");
        delBtn.textContent = "❌";

        delBtn.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        });

        li.appendChild(delBtn);
        list.appendChild(li);
        input.value = "";
    }

	input.focus();
});
