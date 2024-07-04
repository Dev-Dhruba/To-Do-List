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
    }
});

items.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.style.textDecoration = "line-through"
        e.target.classList.add("one");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})
