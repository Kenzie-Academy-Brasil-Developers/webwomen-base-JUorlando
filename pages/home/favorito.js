function getFavoritesLocation(){
    return JSON.parse(localStorage.getItem("apply")) || []
 }
 
  
 function alreadyApply(itens){ 
     return getFavoritesLocation().findIndex(element => element.name === itens.name)
 }
 
 function favoriteAndRemove(movie, button){
     const movieExist = alreadyApply(movie)
     let moviesFavoritos = getFavoritesLocation()
 
     if(movieExist < 0 ){
         moviesFavoritos = [...moviesFavoritos, movie]
         button.innerText = "Remover favorito"
         button.classList.add("button-favorite--remove")
     }else{
         moviesFavoritos.splice(movieExist, 1)
         button.innerText = "Favoritar"
         button.classList.remove("button-favorite--remove")
     }
 
     localStorage.setItem("@kenzieMovie:moviesFavorite", JSON.stringify(moviesFavoritos))
 }