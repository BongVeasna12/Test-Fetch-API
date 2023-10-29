'use strict'


const titleElement = document.querySelector('#title')
const descriptionElement = document.querySelector('#description')
const priceElement = document.querySelector('#price')
const fileElement = document.querySelector('#file')

//input value from the user

async function createProduct(){
    const title = titleElement.value
    const description = descriptionElement.value
    const price = Number(priceElement.value)
    const file = fileElement.file[0]
      const imageUrl = await upload(file);
     

      //create product 
      const product = {
        title,
        description,
        price,
        image:[imageUrl.location],
      }


      //create product
      
        fetch('https://api.escuelajs.co/api/v1/products/' ,{
            method: 'POST',
            body: JSON.stringify(product),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data)=> console.log(data))
        .then((error)=> console.log(error))
}
//upload image to server 
async function upload(file){
    //create file form data
    const formData = new formData();
    formData.append('file' , file)

    //send data to server 
    const   res = await fetch('https://api.escuelajs.co/api/v1/files/upload',{
        method: 'POST',
        body: formData
});
 return res.json();

}