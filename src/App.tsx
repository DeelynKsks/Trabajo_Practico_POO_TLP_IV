import { useState } from 'react';
import './App.css'  
import ToDoList from './Components/ToDoList';
import CalculadoraGeometria from './Components/CalculadoraGeometría';
import BibliotecaVirtual from './Components/BibliotecaVirtual';
import SimulacionMascotas from './Components/SimulaciónMascotas';
import GestorDeContactos from './Components/GestorDeContactos';

function App() {
  const [selectedComponent, setSelectedComponent] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(event.target.value);
  };
  

  return (
    <>
      <select onChange={handleSelectChange}>
        <option value="">--Selecciona un componente--</option>
        <option value="ToDoList">To Do List</option>
        <option value="CalculadoraGeometria">Calculadora Geometría</option>
        <option value="BibliotecaVirtual">Biblioteca Virtual</option>
        <option value="SimulacionMascotas">Simulación Mascotas</option>
        <option value="GestorDeContactos">Gestor De Contactos</option>
      </select>

      {selectedComponent === 'ToDoList' && <ToDoList />}
      {selectedComponent === 'CalculadoraGeometria' && <CalculadoraGeometria />}
      {selectedComponent === 'BibliotecaVirtual' && <BibliotecaVirtual />}
      {selectedComponent === 'SimulacionMascotas' && <SimulacionMascotas />}
      {selectedComponent === 'GestorDeContactos' && <GestorDeContactos />}
    </>
  );
}

export default App;
