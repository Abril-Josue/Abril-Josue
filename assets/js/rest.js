
// function getdata(){
//     fetch('http://3.14.68.118:9001/api/listfiles')
//       .then(response => response.json())
//       .then(json => console.log(json))
// }

function getFiles() {
  const fileInput = document.getElementById('formFile');
  const files = fileInput.files;

  if (files.length === 0) {
    console.log('No se han seleccionado archivos.');
    return;
  }

  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
    uploadFile(files[i]);
  }
}
function uploadFile(file) {
  const formData = new FormData();
  formData.append('files', file);

  fetch('http://3.14.68.118:9001/api/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('Archivo subido con éxito:', data);
    window.location.href = 'index.html'
  })
  .catch(error => {
    console.error('Error al subir el archivo:', error);
  });
}

