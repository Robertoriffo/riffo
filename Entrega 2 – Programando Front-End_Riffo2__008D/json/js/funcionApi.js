//implementamos método Fetch para consumir una Api 

function mostrarRopa(){
    let url='https://www.themealdb.com/api/json/v1/1/categories.php';
    fetch(url)='https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/3043132.jpg'
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    const mostrarData=(data)=>{
        console.log(data)
        let body="https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/3043132.jpg"
        for(var i=0; i<data.categories.length; i++){
            body+=`<tr>
                <td>${data.categories[i].idCategory}</td>
                <td>${data.categories[i].strCategory}</td>
                <td><img src="${data.categories[i].strCategoryThumb}"></td>
                <td>${data.categories[i].strCategoryDescription}</td>
                </tr>`
        }
        document.getElementById('categorias').innerHTML=body
    }
}

function VerTodos(){
    let url='https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    const mostrarData=(data)=>{
        console.log(data)
        let body=""
        for(var i=0; i<data.length; i++){
            body+=`<tr>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
                <td>${data[i].address.street}</td>
                <td>${data[i].address.zipcode}</td>
                </tr>`
        }
        document.getElementById('usuarios').innerHTML=body
    }
}


function Buscar(){
    let url='https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    const mostrarData=(data)=>{
        console.log(data)
        let body=""
        let user=document.getElementById('buscar').value;
        let encontrado=0
        for(var i=0; i<data.length; i++){
            if (data[i].id==user){ 
                encontrado=1
                body+=`<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].address.street}</td>
                    <td>${data[i].address.zipcode}</td>
                    </tr>`
            }
        }
        if (encontrado==1){
            document.getElementById('usuarios').innerHTML=body
        }
        else{
            alert('Usuario no encontrado :(');
            VerTodos();
        }
        
    }
}