const inputName = document.querySelector("#name")
const btn = document.querySelector("#btn")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const userName = inputName.value

    async function getPosts(user) {
        try {
            const api = await axios.get(`https://api.github.com/users/${user}`);
            const userData = api.data
            console.log(userData.name);
            console.log(userData.public_repos);
            console.log(userData.avatar_url);
        } catch (error) {
          console.error(error);
        }
    }

    getPosts(userName)
      
    
})