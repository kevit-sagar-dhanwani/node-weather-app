console.log('Hello server')

// fetch('http://api.weatherstack.com/current?access_key=330e9a8b23cc56f6b7b5addc28a5bfc6&query=37.8267,-122.411').then((response) => {
//     response.json().then((data) => {
//         // console.log(data.current)
//         //console.log(data.location)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const m1 = document.querySelector('#m1')
const m2 = document.querySelector('#m2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    //query=37.8267,-122.411

    m1.textContent = 'Loading.....'
    m2.textContent = ''


    fetch('/weather?address=' +location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                m1.textContent = "Unable to search. Try another one"
            } else {
                m1.textContent = data.tempdata
                m2.textContent = 'Location is :   ' + data.loc.location
                
            }


        })
    })    

})