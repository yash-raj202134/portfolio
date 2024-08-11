
const scriptURL = 'https://script.google.com/macros/s/AKfycbxb0w63m4Ugpgu_Nc8dOrx_n28GSt9IE8wVIOTxrfMq9tNzdZm-z4kOZjmJZFi_Txl7Kg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You For Subscribing!"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()

        })

        .catch(error => console.error('Error!', error.message))
})