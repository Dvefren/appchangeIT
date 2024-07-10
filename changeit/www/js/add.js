document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementsByClassName('close')[0];
    const productImage = document.getElementById('productImage');
    const imagePreview = document.getElementById('imagePreview');
  
    openModalBtn.onclick = () => {
      modal.style.display = 'block';
    };
  
    closeModalBtn.onclick = () => {
      modal.style.display = 'none';
    };
  
    window.onclick = (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  
    // Mostrar vista previa de la imagen seleccionada
    productImage.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                imagePreview.innerHTML = '';
                imagePreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
  
    const productForm = document.getElementById('productForm');
    productForm.onsubmit = (event) => {
      event.preventDefault();
      // Aquí puedes agregar la lógica para manejar el envío del formulario
      alert('Producto Publicado!');
      modal.style.display = 'none';
      productForm.reset();
      imagePreview.innerHTML = ''; // Limpiar la vista previa de la imagen después de enviar el formulario
    };
});
