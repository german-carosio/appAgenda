document.addEventListener('keyup', e=>{

    
    if (e.target.matches("#buscador")) {

        if (e.key == "Escape") {
            e.target.value = ""
        }

        document.querySelectorAll(".item").forEach(contacto =>{

            contacto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? contacto.classList.remove("filtro") 
            : contacto.classList.add("filtro")
        })
    }
    

    //e.target.matches("#buscador")
    //console.log(e.target.value);
})