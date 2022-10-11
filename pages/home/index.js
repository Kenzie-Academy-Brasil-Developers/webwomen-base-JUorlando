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
    let tagRemove = document.createElement("button")

    tagLi.classList = "card-principal"
    tagTitle.classList = "card-title"
    tagDiv.classList = "card-mini-box"
    tagEmp.classList = "card-emp"
    tagLocal.classList = "card-local"
    tagDesc.classList = "card-descrip"
    tagForm.classList = "card-form"
    tagMod.classList = "card-mod"
    tagApply.classList = "card-button"
    tagRemove.classList = "card-button-remove"

    tagTitle.innerHTML = `${title}`
    tagEmp.innerHTML = `${enterprise}`
    tagLocal.innerHTML = `${location}`
    tagDesc.innerHTML = `${descrition}`
    tagMod.innerHTML = `${modalities}`

    tagApply.innerText = "Candidatar"
    tagApply.id = id
    tagApply.type = "button"

    tagRemove.innerText = "Remover Candidatar"
    tagRemove.id = id
    tagRemove.type = "button"
    
    tagApply.addEventListener("click", () => {
        tagRemove.classList.add("show-card")
        tagApply.classList.add("hide-card")
        document.querySelector(".box-card-vazio").classList.add("hide-card")
    })

    tagRemove.addEventListener("click", () => {
        tagApply.classList.remove("hide-card")
        tagRemove.classList.remove("show-card")
        document.querySelector(".box-card-vazio").classList.remove("hide-card")
    })

    tagForm.append(tagMod, tagApply, tagRemove)
    tagDiv.append(tagEmp, tagLocal)
    tagLi.append(tagTitle, tagDiv, tagDesc, tagForm)

    return tagLi

}

let buttonApply = document.querySelectorAll(".card-button")


buttonApply.forEach((button) => {
    
    button.addEventListener("click", salvarCandidatura)
    
})


function salvarCandidatura(event) {
    
    let id = event.target.id
    
    let objetoComFilter = jobsData.filter((elemento) => elemento.id == id)

    newArray.push(objetoComFilter[0])
    renderNewCard(newArray)

    const favorito = localStorage.getItem("apply")

    if (!favorito) {

        localStorage.setItem("apply", JSON.stringify(newArray))
    }

}

let removeApply = document.querySelectorAll(".card-button-remove")


removeApply.forEach((button) => {
    
    button.addEventListener("click", removerCandidatura)
    
})


function removerCandidatura(event) {

    let id = event.target.id

    removeApply.id = id

    newArray.splice(removeApply, 1)
    renderNewCard(newArray)

    const favorito = localStorage.getItem("apply")

    if (favorito) {

        localStorage.removeItem("apply", JSON.stringify(newArray))
    }

}

function renderNewCard(newArray) {

    const localCardAside = document.querySelector(".ul-card-aside")


    localCardAside.innerHTML = ""

    newArray.forEach((job, index) => {

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

        tagTitle.innerText = job.title
        tagEmp.innerText = job.enterprise
        tagLocal.innerText = job.location

        tagDelete.id = job.id

        tagDelete.addEventListener("click", () => {

            const favorito = localStorage.getItem("apply")

            let add = document.querySelector(".card-button")
            
            let remove = document.querySelector(".card-button-remove")

            add.classList.remove("hide-card")

            remove.classList.remove("show-card")

            document.querySelector(".box-card-vazio").classList.remove("hide-card")
            
            if (favorito) {

                localStorage.removeItem("apply")
            }

            newArray.splice(index, 1)
            renderNewCard(newArray)


        })

        tagDiv.append(tagTitle, tagDelete, tagEmp, tagLocal)
        tagLi.append(tagDiv)
        localCardAside.append(tagLi)

    })

}

