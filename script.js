const inputButton = document.querySelector("#add");
const inputField = document.querySelector("#inputField");
const items = document.querySelector(".items")
const itemsList = document.querySelectorAll(".items li")
const inputBox = document.querySelector(".input-box")

inputButton.addEventListener("click", () => {
    const inputFieldValue = inputField.value;
    
    if(inputFieldValue === " "){
        alert("Please type something in the input box");
    }

    else{
        const newlist = document.createElement('li');
        newlist.innerText = inputFieldValue;
        items.appendChild(newlist);
        
        const cross = document.createElement("span");
        newlist.appendChild(cross);
        cross.innerText = "x";
        
        inputField.value = "";
    
        newlist.addEventListener('click', () => {
            newlist.style.textDecoration = "line-through"
            newlist.classList.add("one");

        });
        
        cross.addEventListener('click', () => {
            cross.parentElement.remove();

        });
    }
});
