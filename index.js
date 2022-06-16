function submitData(name, email){
    return fetch( 'http://localhost:3000/users',  {
     method: 'POST',
        header: {
            'content-type' :   'application/json',
           'accept':  'application/json'
        },
        body:  JSON.stringify({
                name ,
                email
            } ) 
        })

            .then((response) => response.json())
             
            .then((data) => document.body.innerHTML = data["id"])
            .catch( (error) => document.body.innerHTML = error.message)           
            
}
submitData()