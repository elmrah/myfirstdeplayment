const main = document.getElementById('main-container')

function getpage(e){
    fetch(`${e.id}.html`)
    .then(response => response.text())
    .then(html => {

        while(main.firstChild){
            main.firstChild.remove()
        }
        main.insertAdjacentHTML("afterbegin", html)
        console.log(html)
        console.log(typeof html)
    })
    .catch(error => console.error('Error fetching content:', error));

    
}