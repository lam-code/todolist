const btnAjouter = document.getElementById("btnAjouter");
const champ = document.getElementById("champ");
const list = document.getElementById("list");

btnAjouter.addEventListener("click",list);


form.onsubmit = () =>{
    const li = document.createElement("li");
    li.textContent = champ.value ;
   

    // bouton editer
    const editButton = document.createElement("button");
    editButton.innerText = "Editer";
    editButton.classList.add("edit-btn");
    list.appendChild(editButton);
    
    
    editButton.addEventListener("click", function modifier(e) {
        // e.preventDefault();
        const addInput = document.createElement("input");
        addInput.type = "text";
        addInput.innerText = li.value;
        li.appendChild(addInput);
        
    });

    // bouton supprimer

    const suppButton = document.createElement("button");
    suppButton.innerText = "Supprimer";
    suppButton.classList.add("supp-btn");
    list.appendChild(suppButton);
    li.appendChild(editButton);
    suppButton.addEventListener("click",supprimer);
    li.appendChild(suppButton);

    function supprimer(){
        li.remove();
    }
    

    list.appendChild(li);
    champ.value="";
    return false;
}





