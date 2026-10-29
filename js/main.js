// Función para abrir la ventana emergente con información detallada
function openModal(title, longDescription, tagsString) {
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const tagsContainer = document.getElementById('modal-tags');
    const modal = document.getElementById('project-modal');

    if (modalTitle && modalDesc && tagsContainer && modal) {
        modalTitle.innerText = title;
        modalDesc.innerText = longDescription; // Carga el texto largo solo en el modal
        
        // Limpiar etiquetas anteriores del modal
        tagsContainer.innerHTML = '';
        
        // Generar etiquetas dinámicamente
        const tagsArray = tagsString.split(',');
        tagsArray.forEach(tag => {
            const span = document.createElement('span');
            span.innerText = tag.trim();
            span.style.background = 'var(--bg-light)';
            span.style.border = '1px solid var(--border-color)';
            span.style.color = 'var(--primary-color)';
            span.style.padding = '5px 10px';
            span.style.fontSize = '0.78rem';
            span.style.fontWeight = '500';
            span.style.borderRadius = '6px';
            span.style.display = 'inline-block';
            span.style.marginRight = '6px';
            span.style.marginBottom = '6px';
            tagsContainer.appendChild(span);
        });

        // Mostrar el modal
        modal.classList.add('active');
    }
}

// Función para cerrar la ventana emergente
function closeModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Cerrar el modal al hacer clic fuera del cuadro de contenido
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
}