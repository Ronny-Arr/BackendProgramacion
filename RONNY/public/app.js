const API_URL = '/api/tareas';
const listaTareas = document.getElementById('listaTareas');
const form = document.getElementById('tareaForm');
let editandoId = null;

async function cargarTareas() {
    listaTareas.innerHTML = '<li>Cargando...</li>';
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            listaTareas.innerHTML = '<li>No hay tareas registradas</li>';
            return;
        }
        const data = await res.json();
        mostrarTareas(data.tareas);
    } catch (error) {
        listaTareas.innerHTML = '<li>Error al cargar tareas</li>';
    }
}

function mostrarTareas(tareas) {
    listaTareas.innerHTML = '';
    tareas.forEach(tarea => {
        const fecha = tarea.fechaLimite ? new Date(tarea.fechaLimite).toISOString().split('T')[0] : '';
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${tarea.titulo}</strong><br>
                <small>${tarea.descripcion || ''}</small><br>
                <small>Estado: ${tarea.estado}</small><br>
                <small>Fecha límite: ${fecha || 'No definida'}</small>
            </div>
            <div class="acciones">
                <button class="editar" onclick="editarTarea('${tarea._id}', '${tarea.titulo.replace(/'/g, "\\'")}', '${(tarea.descripcion || '').replace(/'/g, "\\'")}', '${fecha}')">✏️</button>
                <button class="eliminar" onclick="eliminarTarea('${tarea._id}')">🗑️</button>
            </div>
        `;
        listaTareas.appendChild(li);
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const tarea = {
        titulo: document.getElementById('titulo').value,
        descripcion: document.getElementById('descripcion').value,
        fechaLimite: document.getElementById('fechaLimite').value
    };

    try {
        if (editandoId) {
            const res = await fetch(`${API_URL}/${editandoId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(tarea)
            });
            if (res.ok) {
                editandoId = null;
                form.reset();
                document.querySelector('button[type="submit"]').textContent = 'Agregar Tarea';
                cargarTareas();
            } else {
                alert('Error al actualizar la tarea');
            }
        } else {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(tarea)
            });
            if (res.ok) {
                form.reset();
                cargarTareas();
            } else {
                alert('Error al crear la tarea');
            }
        }
    } catch (error) {
        alert('Error en la conexión con el servidor');
    }
});

function editarTarea(id, titulo, descripcion, fechaLimite) {
    document.getElementById('titulo').value = titulo;
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('fechaLimite').value = fechaLimite;
    editandoId = id;
    document.querySelector('button[type="submit"]').textContent = 'Actualizar Tarea';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function eliminarTarea(id) {
    if (!confirm('¿Seguro que deseas eliminar esta tarea?')) return;
    try {
        const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (res.ok) {
            cargarTareas();
        } else {
            alert('Error al eliminar la tarea');
        }
    } catch (error) {
        alert('Error en la conexión');
    }
}

cargarTareas();
