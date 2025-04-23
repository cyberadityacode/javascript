const APIURL = 'https://api.github.com/users/'

const containerGit = document.querySelector('.container-git') 
const form = document.querySelector('.user-form')
const input = document.querySelector('input')


 const  getUser = async (username)=>{
    try{
        // const {data} = await axios(APIURL+username)
        const response = await fetch(APIURL+username)
        // console.log(response);
        if(!response.ok){
            throw new Error(`user not found ${response.status}`)
        }
        const data = await response.json()
        console.log(data);


        addReposToCard(data)


    }catch(error){
        console.error(error)
        containerGit.innerHTML = error
    }
}

const addReposToCard = (data)=>{
    const updateHtml =  `
    <img style="width: 100px; height: 100px; border-radius: 50%;" src="${data.avatar_url}" alt="">
        <h2>${data.login}</h2>
        <table>
            <td>${data.followers} follower</td>
            <td>${data.following} following</td>
            <td>${data.public_repos} repo</td>
        </table>
        <div class="repo">
            

        </div>
    </div>
    `
    containerGit.innerHTML = updateHtml
    // containerGit.appendChild(updateHtml)


}
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const user = input.value
    if(user){
         getUser(user)
        input.value =''
    }
})