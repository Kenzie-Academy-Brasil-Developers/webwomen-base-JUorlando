function render(jobs) {

    const localCard = document.querySelector(".ul-card")

    jobs.forEach((element) => {

        const filter = filtrandoCards(element)
        localCard.appendChild(filter)
    })

}

render(jobsData)

function filtrandoCards(itens) {

    let id = itens.id
    let title = itens.title
    let enterprise = itens.enterprise
    let location = itens.location
    let descrition = itens.descrition
    let modalities = itens.modalities

    let tagLi = document.createElement("li")
    let tagTitle = document.createElement("h3")
    let tagDiv = document.createElement("div")
    let tagEmp = document.createElement("p")
    let tagLocal = document.createElement("p")
    let tagDesc = document.createElement("p")
    let tagForm = document.createElement("form")
    let tagMod = document.createElement("p")
    let tagApply = document.createElement("button")

    tagLi.classList = "card-principal"
    tagTitle.classList = "card-title"
    tagDiv.classList = "card-mini-box"
    tagEmp.classList = "card-emp"
    tagLocal.classList = "card-local"
    tagDesc.classList = "card-descrip"
    tagForm.classList = "card-form"
    tagMod.classList = "card-mod"
    tagApply.classList = "card-button"

    tagTitle.innerHTML = `${title}`
    tagEmp.innerHTML = `${enterprise}`
    tagLocal.innerHTML = `${location}`
    tagDesc.innerHTML = `${descrition}`
    tagMod.innerHTML = `${modalities}`

    tagApply.innerHTML = "Candidatar"
    tagApply.id = "include-card"
    tagApply.type = "button"

    tagApply.addEventListener("click", (event) => {

        event.preventDefault()

        tagApply.innerText = "Remover Candidatura"

        document.querySelector(".div-card-aside").classList.add("show-card")

        const favorito = localStorage.getItem("apply")

        if(!favorito){

            localStorage.setItem("apply", true)
        } 

        let NewCard = {
            id: id,
            title: title,
            enterprise: enterprise,
            local: location,
        }

        jobsData.push(NewCard)

        filtrandoCards(itens)

        const localCardAside = document.querySelector(".ul-card-aside")
        
        let tagLi = document.createElement("li")
        let tagTitle = document.createElement("h3")
        let tagDelete = document.createElement("button")
        let tagDiv = document.createElement("div")
        let tagEmp = document.createElement("p")
        let tagLocal = document.createElement("p")

        tagLi.classList = "card-principal-aside"
        tagTitle.classList = "card-title-aside"
        tagDelete.classList = "delete-button"
        tagDiv.classList = "card-mini-box-aside"
        tagEmp.classList = "card-emp"
        tagLocal.classList = "card-local"

        tagTitle.innerHTML = NewCard.title
        tagEmp.innerHTML = NewCard.enterprise
        tagLocal.innerHTML = NewCard.local

        tagDelete.id = NewCard.id

        tagDelete.addEventListener("click", (event) => {

            event.preventDefault()

            const favorito = localStorage.getItem("apply")
    
            if(favorito){
    
                localStorage.removeItem("apply")
            }
 
            document.querySelector(".card-button").innerText = "Candidatar"
            let li = event.path[2]
            li.remove()
            filtrandoCards(itens)

        })

        tagDiv.append(tagTitle, tagDelete, tagEmp, tagLocal)
        tagLi.append(tagDiv)
        localCardAside.append(tagLi)
    })


    tagForm.append(tagMod, tagApply)
    tagDiv.append(tagEmp, tagLocal)
    tagLi.append(tagTitle, tagDiv, tagDesc, tagForm)

    return tagLi

}
