var item = document.getElementsByClassName('item')
console.log(item)
console.log([...item].map((item)=>{
 item.addEventListener('click', (e)=>{
    console.log('cliquei', e)
 })

}))

 const filmes =[]

 let div = document.getElementById('filmes')
 let h1 = document.createElement('h1')







function pegaGeneros(){
    const genresDatas=  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=4b89ad07ed030529a49c9cb08eea7f94&language=pt-BR')
    .then(response => response.json())
    .then(response => response.genres).then(
    response => response.map((element, id, array)=>{ 
       
     
        
        poptitles(element.name, element.id)
       
         return element.id})
   
        
    )
   
}
pegaGeneros()




var arrayteste=[]
function poptitles(name, id){
   
    div.innerHTML += `<h1>${name}</h1>          
        <div class="filmes" id =${id}> </div>` ;

       
        
 
      
    listFilmes(id)
    
    arrayteste.push(id)
   
    
  }
 
  


 

 
function listFilmes(id){

    const filmsList = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4b89ad07ed030529a49c9cb08eea7f94&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=${id}`)
    .then(response => response.json())
    .then (response => response.results)
    .then(response => response.map( (element)=>{
        exibFilm(element.title, id, element.backdrop_path)
        objOverview(element.overview, element.id)
    }))
}
function exibFilm(name, id_genero,img){
  
    let div = document.createElement('div')
    document.getElementById(`${id_genero}`).appendChild(div)
    div.classList.add('item')
    div.innerHTML = `<img  src="https://image.tmdb.org/t/p/w500/${img}">`

  

}

let objFilm =[]
function objOverview(overview, id){
  objFilm.push({id: id, overview : overview})
  

}
function searchFilm(id){
  console.log(objFilm)
  let result = objFilm.filter( (film, i , array) => array.id === id)
  console.log('film encontrado ', result)
}

searchFilm(603)



