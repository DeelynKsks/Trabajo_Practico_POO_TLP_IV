// import React from 'react';
import { useState } from 'react';

interface ITarea {
  nombre: string;
  fechaVencimiento: Date;
  completada: boolean;
}

class Tarea implements ITarea {
  nombre: string;
  fechaVencimiento: Date;
  completada: boolean;

  constructor(nombre: string, fechaVencimiento: Date) {
    this.nombre = nombre;
    this.fechaVencimiento = fechaVencimiento;
    this.completada = false;
  }
}

class ListaTareas {
  tareas: Tarea[];

  constructor() {
    this.tareas = [];
  }

  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
  }

  completarTarea(index: number) {
    if (index >= 0 && index < this.tareas.length) {
      this.tareas[index].completada = true;
    }
  }

  eliminarTarea(index: number) {
    if (index >= 0 && index < this.tareas.length) {
      this.tareas.splice(index, 1);
    }
  }
}

function ToDoList() {
    const [listaTareas, setListaTareas] = useState(new ListaTareas());
    const [nombreTarea, setNombreTarea] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');
  
    const agregarTarea = () => {
      const nuevaTarea = new Tarea(nombreTarea, new Date(fechaVencimiento));
      const nuevaListaTareas = new ListaTareas();
      nuevaListaTareas.tareas = [...listaTareas.tareas, nuevaTarea];
      setListaTareas(nuevaListaTareas);
      setNombreTarea('');
      setFechaVencimiento('');
    };
  
    const completarTarea = (index: number) => {
      const nuevaListaTareas = new ListaTareas();
      nuevaListaTareas.tareas = [...listaTareas.tareas];
      nuevaListaTareas.completarTarea(index);
      setListaTareas(nuevaListaTareas);
    };
  
    const eliminarTarea = (index: number) => {
      const nuevaListaTareas = new ListaTareas();
      nuevaListaTareas.tareas = [...listaTareas.tareas];
      nuevaListaTareas.eliminarTarea(index);
      setListaTareas(nuevaListaTareas);
    };
  
    return (
      <div>
        <h3>Lista de Tareas</h3>
        <input
          type="text"
          value={nombreTarea}
          onChange={(e) => setNombreTarea(e.target.value)}
          placeholder="Nombre de la tarea"
        />
        <br />
        <br />
        <input
          type="date"
          value={fechaVencimiento}
          onChange={(e) => setFechaVencimiento(e.target.value)}
        />
        <br />
        <br />
        <button onClick={agregarTarea}>Agregar tarea</button>
  
        {listaTareas.tareas.map((tarea, index) => (
          <div key={index}>
            <h2>{tarea.nombre}</h2>
            <p>Fecha de vencimiento: {tarea.fechaVencimiento.toDateString()}</p>
            <p>Completada: {tarea.completada ? 'Sí' : 'No'}</p>
            <button onClick={() => completarTarea(index)}>Completar tarea</button>
            <button onClick={() => eliminarTarea(index)}>Eliminar tarea</button>
          </div>
        ))}
      </div>
    );
  }
  
export default ToDoList;
  
