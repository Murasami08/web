let arro = document.getElementById('arrow')
arro.addEventListener('click', function(e) {
    e.preventDefault()
    window.scrollTo({top: 0, behavior: "smooth"})
})