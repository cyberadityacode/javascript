const btnToast = document.querySelector('.btn-toast')
const toasts = document.querySelector('.toasts')

const messageType =['info','success','error']
const messages = [
    'fantastic!',
    'impeccable',
    'mindblowing'
]
const randomMessageType = ()=>{
    return messageType[Math.floor(Math.random()* messageType.length)]
}

const randomMessages = ()=>{
    return messages[Math.floor(Math.random()* messageType.length)]
}

const createNotification = (msg=null, type=null)=>{
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(type ? type: randomMessageType())
    toast.innerText = msg? msg: randomMessages()
    toasts.appendChild(toast)

    setTimeout(()=>{
        toast.remove()
    },3000)
}

btnToast.addEventListener('click', ()=>createNotification())