form.onsubmit = () =>{
    const li = document.createElement("li");
    li.textContent = champ.value ;
    list.appendChild(li);
    champ.value="";
    return false;

    // bouton supprimer
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "Editer";
    completeButton.classList.add("complet-btn");
    list.appendChild(completeButton);
}


