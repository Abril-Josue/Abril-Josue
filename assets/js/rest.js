
function getdata(){
    fetch('http://localhost:9001/api/listfiles')
      .then(response => response.json())
      .then(json => console.log(json))
}
getdata()