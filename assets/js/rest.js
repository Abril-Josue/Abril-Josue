
function getdata(){
    fetch('https://back-boda-abril-files.vercel.app/api/listfiles')
      .then(response => response.json())
      .then(json => console.log(json))
}

function getFiles() {
  const fileInput = document.getElementById('formFile');
  const files = fileInput.files;
  const extensionesValidas = ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG', 'gif', 'GIF'];
  if (files.length === 0) {
    console.log('No se han seleccionado archivos.');
    return;
  }
  document.getElementById('upload-text').style.display = 'none';
  document.getElementById('upload-loading').style.display = 'inline';

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const extension = file.name.split('.').pop().toLowerCase();
    if (!extensionesValidas.includes(extension)) {
      alert(`El archivo ${file.name} tiene una extensión no válida.`);
      return;
    }
    uploadFile(files[i]);
  }
  setTimeout(() => {
    document.getElementById('upload-text').style.display = 'inline';
    document.getElementById('upload-loading').style.display = 'none';
  }, 2500); 

}
function uploadFile(file) {
  const formData = new FormData();
  formData.append('files', file);

  fetch('https://back-boda-abril-files.vercel.app/api/upload', {
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
