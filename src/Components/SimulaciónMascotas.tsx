// import React from 'react';
import { useState } from 'react';

abstract class Mascota {
    nombre: string;
    nivelFelicidad: number;
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.nivelFelicidad = 0;
    }
  
    abstract alimentar(): void;
    abstract jugar(): void;
  }
  
  class Perro extends Mascota {
    alimentar() {
      this.nivelFelicidad += 10;
    }
  
    jugar() {
      this.nivelFelicidad += 5;
    }
  }
  
  class Gato extends Mascota {
    alimentar() {
      this.nivelFelicidad += 7;
    }
  
    jugar() {
      this.nivelFelicidad += 3;
    }
  }
  
  class CriaturaImaginaria extends Mascota {
    alimentar() {
      this.nivelFelicidad += 20;
    }
  
    jugar() {
      this.nivelFelicidad += 10;
    }
  }
  

function SimulacionMascotas() {
  const [listaMascotas, setListaMascotas] = useState<Mascota[]>([]);
  const [tipoMascota, setTipoMascota] = useState('');
  const [nombreMascota, setNombreMascota] = useState('');

  const agregarMascota = () => {
    let nuevaMascota: Mascota;
    if (tipoMascota === 'perro') {
      nuevaMascota = new Perro(nombreMascota);
    } else if (tipoMascota === 'gato') {
      nuevaMascota = new Gato(nombreMascota);
    } else if (tipoMascota === 'criaturaImaginaria') {
      nuevaMascota = new CriaturaImaginaria(nombreMascota);
    } else {
      return;
    }
    setListaMascotas([...listaMascotas, nuevaMascota]);
    setTipoMascota('');
    setNombreMascota('');
  };

  const alimentarMascota = (index: number) => {
    const nuevaListaMascotas = [...listaMascotas];
    nuevaListaMascotas[index].alimentar();
    setListaMascotas(nuevaListaMascotas);
  };

  const jugarConMascota = (index: number) => {
    const nuevaListaMascotas = [...listaMascotas];
    nuevaListaMascotas[index].jugar();
    setListaMascotas(nuevaListaMascotas);
  };

  return (
    <div>
      <h3>Simulación de Mascotas Virtuales</h3>
      <select value={tipoMascota} onChange={(e) => setTipoMascota(e.target.value)}>
        <option value="">--Seleccionar tipo de mascota--</option>
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
        <option value="criaturaImaginaria">Criatura Imaginaria</option>
      </select>
      <br />
      <br />
      <input
        type="text"
        value={nombreMascota}
        onChange={(e) => setNombreMascota(e.target.value)}
        placeholder="Nombre de la mascota"
      />
      <br />
      <br />
      <button onClick={agregarMascota}>Agregar mascota</button>
      <br />
      <br />
      {listaMascotas.map((mascota, index) => (
        <div key={index}>
          <h2>{mascota.nombre}</h2>
          <p>Nivel de felicidad: {mascota.nivelFelicidad}</p>
          <button onClick={() => alimentarMascota(index)}>Alimentar mascota</button>
          <button onClick={() => jugarConMascota(index)}>Jugar con mascota</button>
        </div>
      ))}
    </div>
  );
}

export default SimulacionMascotas;
