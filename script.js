function parsedResponse(data){
    console.log(data);
}

function callback(resp){
    resp.json.then(parsedResponse);
}

function onPress(){
    fetch("http://localhost:3000/todos",{
    method:"Get"
    }).then(callback)
}