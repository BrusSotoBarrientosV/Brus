// Datos de los proyectos
let projects = [
    {
        id: 1,
        title: "Resumen SGBD",
        description: "Resumen crítico sobre el Libro SGBD",
        category: "Pdf",
        date: "2025-04-05",
        externalUrl: "https://www.canva.com/design/DAGji_mWwSs/zJUd2TxrcH3X4hvvLlT56Q/edit?utm_content=DAGji_mWwSs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        platform: "Canva"
    },
    {
        id: 2,
        title: "Diagrama",
        description: "Diagrama entidad-relación, En Miro",
        category: "Diagrama",
        date: "2024-02-20",
        externalUrl: "https://miro.com/app/board/uXjVIEWtAuc=/?share_link_id=802140616388",
        platform: "Miro"
    },
    {
        id: 3,
        title: "Diagrama",
        description: "Diagrama excel",
        category: "Visualización de Diagrama",
        date: "2024-03-10",
        externalUrl: "https://docs.google.com/spreadsheets/d/1uZKL3w1ifQFyDPiqVZ99NzQVam0-GJDwbgwzowmgKR0/edit?usp=sharing",
        platform: "Google Excel"
    },
    {
        id: 4,
        title: "Diagrama",
        description: "Diagrama entidad-relación. En Canva",
        category: "Diagrama Canva",
        date: "2024-04-05",
        externalUrl: "https://www.canva.com/design/DAGlHR7sRnU/BD1jjQBBoTI3PwTn5GHwQg/edit?utm_content=DAGlHR7sRnU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        platform: "Canva"
    },
    {
        id: 5,
        title: "Manual Azure",
        description: "Manual de creación de cuenta Azure",
        category: "Azure",
        date: "2024-05-12",
        externalUrl: "https://www.canva.com/design/DAGlj5t7bA0/0mk4jIDYPbYNuw8QnwzFSA/edit?utm_content=DAGlj5t7bA0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        platform: "Canva"
    },
    {
        id: 6,
        title: "Manual Azure",
        description: "Manual de alojamiento de sitio web en Azure",
        category: "Azure",
        date: "2024-06-01",
        externalUrl: "https://www.canva.com/design/DAGmIC9TSDM/CM_8nbzstPuOyouCKEC8aw/edit?utm_content=DAGmIC9TSDM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        platform: "Canva"
    },
    {
        id: 7,
        title: "Examen",
        description: "Examen parcial del curso Base de Datos II",
        category: "Examen",
        date: "2024-07-15",
        externalUrl: "https://drive.google.com/file/d/176RycTS8JLJe7M6lAEsWRCpaU3XflwKV/view?usp=sharing",
        platform: "Google Drive"
    },
    {
        id: 8,
        title: "Sistema de Inventario",
        description: "Aplicación para control de inventario y stock",
        category: "Sistemas",
        date: "2024-08-20",
        externalUrl: "",
        platform: ""
    },
    {
        id: 9,
        title: "Portfolio Reactivo",
        description: "Sitio web portfolio con animaciones CSS",
        category: "Frontend",
        date: "2024-09-10",
        externalUrl: "",
        platform: ""
    },
    {
        id: 10,
        title: "Actividad 01",
        description: "Consultas multitablas SQL Server",
        category: "SqlServer",
        date: "2024-10-05",
        externalUrl: "https://docs.google.com/document/d/160DrpBXw9HtZHKxVwdgQA78dndvcOR0IOYSvB_Rw95E/edit?usp=sharing",
        platform: "Google Docs"
    },
    {
        id: 11,
        title: "Actividad 02",
        description: "Consultas de tablas en SQL Server",
        category: "SqlServer",
        date: "2024-11-12",
        externalUrl: "https://docs.google.com/document/d/1VOS39nPkEUfoJeNKZtq51qYS6213T4LnUKxo6ynXCPM/edit?usp=sharing",
        platform: "Google Docs"
    },
    {
        id: 12,
        title: "Módulo 2 & 3",
        description: "Instalación, configuración de SQL Server Y administración de BD",
        category: "SqlServer",
        date: "2024-12-01",
        externalUrl: "https://docs.google.com/document/d/1pgCTyEk372ZlE0WD-0AFdNPJyJG_H-xYVNwDkoB0oWM/edit?usp=sharing",
        platform: "Google Docs"
    },
    {
        id: 13,
        title: "Módulo 4 & 5",
        description: "Seguridad y consultas avanzadas en SQL Server",
        category: "SqlServer",
        date: "2024-12-15",
        externalUrl: "https://docs.google.com/document/d/1TcCVX_GN9ha9BjpijpA1NpJOMd0BzdWKy3DJzh93SaQ/edit?usp=sharing",
        platform: "Google Docs"
    },
    {
        id: 14,
        title: "Módulo 6 & 7",
        description: "Administración de rendimiento y alta disponibilidad",
        category: "SqlServer",
        date: "2024-12-20",
        externalUrl: "https://docs.google.com/document/d/1IX_wXxGpb9elBCUtU7NhOGmoxh_fzXDaIgk4Womvl0w/edit?usp=sharing",
        platform: "Google Docs"
    },
    {
        id: 15,
        title: "Módulo 8",
        description: "Administración de instancias en la nube",
        category: "Azure",
        date: "2024-12-25",
        externalUrl: "https://docs.google.com/document/d/1F67GPtdfwf8xVi36gs8eF388w8_X-jPZaeS8kOG6wzQ/edit?usp=sharing",
        platform: "Google Docs"
    }
];

let currentEditingId = null;

// Función para mostrar secciones
function showSection(sectionName) {
    // Remover clase active de todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Agregar clase active a la sección seleccionada
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Actualizar estado visual de los enlaces del menú
    document.querySelectorAll('nav a').forEach(link => {
        link.style.background = '';
        link.style.color = '#333';
    });
    
    // Resaltar el enlace activo
    if (event && event.target) {
        event.target.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
        event.target.style.color = 'white';
    }
}

// Función para renderizar proyectos
function renderProjects() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Categoría:</strong> ${project.category}</p>
            <p><strong>Plataforma:</strong> <span class="platform-badge">${project.platform}</span></p>
            <div class="card-actions">
                <button class="btn btn-primary" onclick="viewProject(${project.id})">Ver Más</button>
                <button class="btn btn-secondary" onclick="editProject(${project.id})">Modificar</button>
                <button class="btn btn-danger" onclick="deleteProject(${project.id})">Eliminar</button>
                <button class="btn btn-success" onclick="downloadProject(${project.id})">Descargar</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Función para ver proyecto
function viewProject(id) {
    const project = projects.find(p => p.id === id);
    if (project && project.externalUrl) {
        // Abrir el enlace externo en una nueva pestaña
        window.open(project.externalUrl, '_blank');
    } else {
        alert('No se encontró el enlace del proyecto');
    }
}

// Función para editar proyecto
function editProject(id) {
    const project = projects.find(p => p.id === id);
    if (project) {
        currentEditingId = id;
        const modalTitle = document.getElementById('modalTitle');
        const projectTitle = document.getElementById('projectTitle');
        const projectDescription = document.getElementById('projectDescription');
        const projectCategory = document.getElementById('projectCategory');
        const projectUrl = document.getElementById('projectUrl');
        const projectPlatform = document.getElementById('projectPlatform');
        const projectModal = document.getElementById('projectModal');
        
        if (modalTitle) modalTitle.textContent = 'Editar Proyecto';
        if (projectTitle) projectTitle.value = project.title;
        if (projectDescription) projectDescription.value = project.description;
        if (projectCategory) projectCategory.value = project.category;
        if (projectUrl) projectUrl.value = project.externalUrl || '';
        if (projectPlatform) projectPlatform.value = project.platform || '';
        if (projectModal) projectModal.style.display = 'block';
        
        // Asegurarse de que esté en la pestaña manual
        showTab('manual');
    }
}

// Función para eliminar proyecto
function deleteProject(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este proyecto?')) {
        projects = projects.filter(p => p.id !== id);
        renderProjects();
    }
}

// Función para descargar proyecto mejorada
function downloadProject(id) {
    const project = projects.find(p => p.id === id);
    if (!project) {
        alert('Proyecto no encontrado');
        return;
    }
    
    // Si el proyecto tiene un enlace externo, intentar descargarlo
    if (project.externalUrl) {
        try {
            // Crear un elemento anchor temporal
            const linkElement = document.createElement('a');
            linkElement.href = project.externalUrl;
            linkElement.download = `${project.title.replace(/\s+/g, '_').toLowerCase()}`;
            linkElement.target = '_blank';
            
            // Agregar al DOM temporalmente
            document.body.appendChild(linkElement);
            
            // Hacer clic para iniciar la descarga
            linkElement.click();
            
            // Remover el elemento del DOM
            document.body.removeChild(linkElement);
            
            // Mostrar mensaje de confirmación
            alert(`Iniciando descarga de: ${project.title}`);
            
        } catch (error) {
            console.error('Error al intentar descargar:', error);
            // Fallback: abrir en nueva pestaña si la descarga falla
            window.open(project.externalUrl, '_blank');
            alert('No se pudo descargar automáticamente. Se abrió en una nueva pestaña.');
        }
    } else {
        // Si no hay enlace externo, descargar como JSON (comportamiento original)
        const dataStr = JSON.stringify(project, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        const exportFileDefaultName = `proyecto_${project.title.replace(/\s+/g, '_').toLowerCase()}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        alert('Proyecto descargado como archivo JSON');
    }
}

// Función alternativa más robusta que maneja diferentes tipos de enlaces
function downloadProjectAdvanced(id) {
    const project = projects.find(p => p.id === id);
    if (!project) {
        alert('Proyecto no encontrado');
        return;
    }
    
    if (project.externalUrl) {
        const url = project.externalUrl;
        
        // Detectar el tipo de plataforma y manejar accordingly
        if (url.includes('docs.google.com')) {
            // Para Google Docs, convertir a enlace de descarga
            let downloadUrl = url;
            
            if (url.includes('/edit')) {
                // Convertir URL de edición a URL de descarga
                const docId = extractGoogleDocsId(url);
                if (docId) {
                    // Opción 1: Descargar como PDF
                    downloadUrl = `https://docs.google.com/document/d/${docId}/export?format=pdf`;
                    
                    // Opción 2: Descargar como Word
                    // downloadUrl = `https://docs.google.com/document/d/${docId}/export?format=docx`;
                }
            }
            
            // Crear enlace temporal y descargar
            const linkElement = document.createElement('a');
            linkElement.href = downloadUrl;
            linkElement.download = `${project.title.replace(/\s+/g, '_').toLowerCase()}.pdf`;
            linkElement.target = '_blank';
            document.body.appendChild(linkElement);
            linkElement.click();
            document.body.removeChild(linkElement);
            
        } else if (url.includes('drive.google.com')) {
            // Para Google Drive, convertir a enlace de descarga directa
            let fileId = '';
            const match = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
            if (match) {
                fileId = match[1];
                const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
                
                const linkElement = document.createElement('a');
                linkElement.href = downloadUrl;
                linkElement.download = `${project.title.replace(/\s+/g, '_').toLowerCase()}`;
                linkElement.target = '_blank';
                document.body.appendChild(linkElement);
                linkElement.click();
                document.body.removeChild(linkElement);
            } else {
                // Si no se puede extraer el ID, abrir en nueva pestaña
                window.open(url, '_blank');
            }
            
        } else if (url.includes('canva.com')) {
            // Para Canva, normalmente no se puede descargar directamente
            // Abrir en nueva pestaña con mensaje
            window.open(url, '_blank');
            alert('Para descargar desde Canva, usa la opción de descarga dentro de la plataforma.');
            
        } else if (url.includes('miro.com')) {
            // Para Miro, similar a Canva
            window.open(url, '_blank');
            alert('Para descargar desde Miro, usa la opción de exportar dentro de la plataforma.');
            
        } else {
            // Para otros enlaces, intentar descarga directa
            try {
                const linkElement = document.createElement('a');
                linkElement.href = url;
                linkElement.download = `${project.title.replace(/\s+/g, '_').toLowerCase()}`;
                linkElement.target = '_blank';
                document.body.appendChild(linkElement);
                linkElement.click();
                document.body.removeChild(linkElement);
            } catch (error) {
                window.open(url, '_blank');
                alert('Se abrió el enlace en una nueva pestaña.');
            }
        }
        
    } else {
        // Si no hay enlace externo, descargar como JSON
        const dataStr = JSON.stringify(project, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        const exportFileDefaultName = `proyecto_${project.title.replace(/\s+/g, '_').toLowerCase()}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        alert('Proyecto descargado como archivo JSON');
    }
}

// Función para cambiar pestañas
function showTab(tabName) {
    // Ocultar todas las pestañas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar pestaña seleccionada
    const targetTab = document.getElementById(tabName + '-tab');
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// Función para cargar desde Google Docs
async function loadFromGoogleDocs() {
    const urlInput = document.getElementById('googleDocsUrl');
    const categoryInput = document.getElementById('projectCategoryDocs');
    
    if (!urlInput || !categoryInput) return;
    
    const url = urlInput.value;
    const category = categoryInput.value;
    
    if (!url || !category) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    // Mostrar loading
    const button = event.target;
    if (!button) return;
    
    const originalText = button.textContent;
    button.innerHTML = 'Cargando...';
    button.disabled = true;
    
    try {
        // Extraer ID del documento de Google Docs
        const docId = extractGoogleDocsId(url);
        if (!docId) {
            throw new Error('URL de Google Docs no válida');
        }
        
        // Simular carga del documento (en producción usarías Google Docs API)
        await simulateGoogleDocsLoad(docId, category);
        
    } catch (error) {
        alert('Error al cargar el documento: ' + error.message);
    } finally {
        button.textContent = originalText;
        button.disabled = false;
    }
}

// Función para extraer ID de Google Docs
function extractGoogleDocsId(url) {
    const match = url.match(/\/document\/d\/([a-zA-Z0-9-_]+)/);
    return match ? match[1] : null;
}

// Simular carga desde Google Docs
async function simulateGoogleDocsLoad(docId, category) {
    // Simular delay de carga
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simular contenido extraído (en producción usarías la API de Google Docs)
    const mockContent = {
        title: "Proyecto desde Google Docs",
        description: "Este es un proyecto cargado desde Google Docs. Aquí iría el contenido real del documento. Puedes editarlo antes de guardarlo.",
        category: category
    };
    
    // Mostrar preview
    const previewTitle = document.getElementById('previewTitle');
    const previewDescription = document.getElementById('previewDescription');
    const previewCategory = document.getElementById('previewCategory');
    const docsPreview = document.getElementById('docsPreview');
    
    if (previewTitle) previewTitle.value = mockContent.title;
    if (previewDescription) previewDescription.value = mockContent.description;
    if (previewCategory) previewCategory.value = mockContent.category;
    if (docsPreview) docsPreview.style.display = 'block';
}

// Función para guardar desde preview
function saveFromPreview() {
    const titleInput = document.getElementById('previewTitle');
    const descriptionInput = document.getElementById('previewDescription');
    const categoryInput = document.getElementById('previewCategory');
    
    if (!titleInput || !descriptionInput || !categoryInput) return;
    
    const title = titleInput.value;
    const description = descriptionInput.value;
    const category = categoryInput.value;
    
    if (!title || !description || !category) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    // Crear nuevo proyecto
    const newProject = {
        id: Math.max(...projects.map(p => p.id)) + 1,
        title,
        description,
        category,
        date: new Date().toISOString().split('T')[0],
        externalUrl: '',
        platform: 'Google Docs',
        source: 'google-docs'
    };
    
    projects.push(newProject);
    renderProjects();
    closeModal();
    
    alert('Proyecto agregado exitosamente desde Google Docs!');
}

// Función para abrir modal de agregar
function openAddModal() {
    currentEditingId = null;
    const modalTitle = document.getElementById('modalTitle');
    const projectForm = document.getElementById('projectForm');
    const projectModal = document.getElementById('projectModal');
    
    if (modalTitle) modalTitle.textContent = 'Agregar Nuevo Proyecto';
    if (projectForm) projectForm.reset();
    if (projectModal) projectModal.style.display = 'block';
}

// Función para cerrar modal
function closeModal() {
    const projectModal = document.getElementById('projectModal');
    const projectForm = document.getElementById('projectForm');
    const googleDocsForm = document.getElementById('googleDocsForm');
    const docsPreview = document.getElementById('docsPreview');
    
    if (projectModal) projectModal.style.display = 'none';
    if (projectForm) projectForm.reset();
    if (googleDocsForm) googleDocsForm.reset();
    if (docsPreview) docsPreview.style.display = 'none';
    
    currentEditingId = null;
    
    // Resetear pestañas
    showTab('manual');
}

// Función para cerrar modal de vista
function closeViewModal() {
    const viewModal = document.getElementById('viewModal');
    if (viewModal) viewModal.style.display = 'none';
}

// Función para manejar el envío del formulario de proyecto
function handleProjectFormSubmit(e) {
    e.preventDefault();
    
    const titleInput = document.getElementById('projectTitle');
    const descriptionInput = document.getElementById('projectDescription');
    const categoryInput = document.getElementById('projectCategory');
    const urlInput = document.getElementById('projectUrl');
    const platformInput = document.getElementById('projectPlatform');
    
    if (!titleInput || !descriptionInput || !categoryInput || !urlInput || !platformInput) {
        return;
    }
    
    const title = titleInput.value;
    const description = descriptionInput.value;
    const category = categoryInput.value;
    const url = urlInput.value;
    const platform = platformInput.value;
    
    if (currentEditingId) {
        // Editar proyecto existente
        const projectIndex = projects.findIndex(p => p.id === currentEditingId);
        if (projectIndex !== -1) {
            projects[projectIndex] = {
                ...projects[projectIndex],
                title,
                description,
                category,
                externalUrl: url,
                platform
            };
        }
    } else {
        // Agregar nuevo proyecto
        const newProject = {
            id: Math.max(...projects.map(p => p.id)) + 1,
            title,
            description,
            category,
            externalUrl: url,
            platform,
            date: new Date().toISOString().split('T')[0]
        };
        projects.push(newProject);
    }
    
    renderProjects();
    closeModal();
}

// Función para manejar el envío del formulario de contacto
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const asuntoInput = document.getElementById('asunto');
    const mensajeInput = document.getElementById('mensaje');
    
    if (!nombreInput || !emailInput || !asuntoInput || !mensajeInput) {
        return;
    }
    
    const nombre = nombreInput.value;
    const email = emailInput.value;
    const asunto = asuntoInput.value;
    const mensaje = mensajeInput.value;
    
    alert(`Gracias ${nombre}! Tu mensaje ha sido enviado. Te responderé pronto.`);
    
    // Limpiar formulario
    e.target.reset();
}

// Función para manejar clics fuera del modal
function handleWindowClick(event) {
    const projectModal = document.getElementById('projectModal');
    const viewModal = document.getElementById('viewModal');
    
    if (event.target === projectModal) {
        closeModal();
    }
    if (event.target === viewModal) {
        closeViewModal();
    }
}

// Función de inicialización
function initializePortfolio() {
    // Renderizar proyectos
    renderProjects();
    
    // Configurar event listeners
    const projectForm = document.getElementById('projectForm');
    if (projectForm) {
        projectForm.addEventListener('submit', handleProjectFormSubmit);
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    // Event listener para clics en la ventana
    window.addEventListener('click', handleWindowClick);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializePortfolio);
