const inputName = document.querySelector("#name")
const btn = document.querySelector("#btn")

btn.addEventListener("click", (e) => {
    e.preventDefault()

    const filmName = inputName.value

    async function getPosts(filmName) {
        try {
            const a = await axios.get(`https://api.themoviedb.org/3/movie/${filmName}`);
            console.log(a);
        } catch (error) {
          console.error(error);
        }
    }

    getPosts(filmName)
      
    
})