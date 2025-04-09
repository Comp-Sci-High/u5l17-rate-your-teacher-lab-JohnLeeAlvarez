// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page

const { json } = require("body-parser")
const { response } = require("express")
const { DefaultDeserializer } = require("v8")

const form = document.guerySelector("form")

form.addEventListener("submit", async (e) =>{
    e.prevent Default()

    const bookData = new FormData(form)
    const reqBody = object.formEntries(bookData)

    const response = await fetch("/add,{
        method:"post",
        headers:{
            "Content-Types":"application/json"
        },
        body:json.stringify(reqBody)
    })
    const data = await response.json()
    console.log(data)
})















