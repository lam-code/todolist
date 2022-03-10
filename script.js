const btnAjouter = document.getElementById("btnAjouter");
const champ = document.getElementById("champ");
const list = document.getElementById("list");

// btnAjouter.addEventListener("click", list);

form.onsubmit = () => {
  const li = document.createElement("li");
  li.textContent = champ.value;

  // bouton editer
  const editButton = document.createElement("button");
  editButton.innerText = "Editer";
  editButton.classList.add("edit-btn");
//   li.appendChild(editButton);

  // bouton supprimer

  const suppButton = document.createElement("button");
  suppButton.innerText = "Supprimer";
  suppButton.classList.add("supp-btn");
  //   list.appendChild(suppButton);
 
  suppButton.addEventListener("click", supprimer);
  function supprimer() {
    li.remove();
  }
  const addInput = document.createElement("input");
  addInput.type = "text";
  addInput.value = "maman";
  // addInput.setAttribute("readonly",true);
  console.log(addInput);
  
  li.append(addInput, editButton, suppButton);
  // li.appendChild(editButton);
  // li.appendChild(suppButton);
  list.appendChild(li);
  champ.value = "";

  // editButton.addEventListener("click", () =>{
  //       if (editButton.toLowerCase() == "Editer") {
  //           addInput.removeAttribute("reandonly");
  //           addInput.focus();
  //           editButton.innerText ="enregistrer";
  //           console.log("marche");
  //       } else {
  //           addInput.setAttribute("readonly" ,"readonly");
  //           editButton.innerText = "modifier;"
  //       }

  // });
//   editButton ();
  return false;
}
