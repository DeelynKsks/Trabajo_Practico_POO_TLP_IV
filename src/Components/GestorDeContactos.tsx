// import React from 'react';
import { useState, useEffect } from 'react';

class Contacto {
    nombre: string;
    correoElectronico: string;
    numeroTelefono: string;
  
    constructor(nombre: string, correoElectronico: string, numeroTelefono: string) {
      this.nombre = nombre;
      this.correoElectronico = correoElectronico;
      this.numeroTelefono = numeroTelefono;
    }
  }
  
class GestorContactos {
    contactos: Contacto[];

    constructor() {
        this.contactos = [];
    }

    agregarContacto(contacto: Contacto) {
        this.contactos.push(contacto);
    }

    buscarContacto(nombre: string) {
        return this.contactos.filter(contacto => contacto.nombre === nombre);
    }
}
  
function GestorDeContactos() {
    const [gestorContactos, setGestorContactos] = useState(new GestorContactos());
    const [nombre, setNombre] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [numeroTelefono, setNumeroTelefono] = useState('');
    const [nombreBusqueda, setNombreBusqueda] = useState('');
    const [contactosEncontrados, setContactosEncontrados] = useState<Contacto[]>([]);

    useEffect(() => {
        buscarContacto(nombreBusqueda);
    }, [gestorContactos]);

    const agregarContacto = () => {
        const nuevoContacto = new Contacto(nombre, correoElectronico, numeroTelefono);
        const nuevoGestorContactos = new GestorContactos();
        nuevoGestorContactos.contactos = [...gestorContactos.contactos, nuevoContacto];
        setGestorContactos(nuevoGestorContactos);
        setNombre('');
        setCorreoElectronico('');
        setNumeroTelefono('');
    };

    const buscarContacto = (nombre: string) => {
        if (nombre !== '') {
        const contactosEncontrados = gestorContactos.buscarContacto(nombre);
        setContactosEncontrados(contactosEncontrados);
        } else {
        setContactosEncontrados(gestorContactos.contactos);
        }
    };

    return (
        <div>
            <h3>Gestor de Contacctos</h3>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre del contacto"
            />
            <br />
            <br />
            <input
                type="text"
                value={correoElectronico}
                onChange={(e) => setCorreoElectronico(e.target.value)}
                placeholder="Correo electrónico del contacto"
            />
            <br />
            <br />
            <input
                type="text"
                value={numeroTelefono}
                onChange={(e) => setNumeroTelefono(e.target.value)}
                placeholder="Número de teléfono del contacto"
            />
            <br />
            <br />
            <button onClick={agregarContacto}>Agregar contacto</button>
            <br />
            <br />
            <input
                style={{width:'200px'}}
                type="text"
                value={nombreBusqueda}
                onChange={(e) => {setNombreBusqueda(e.target.value); buscarContacto(e.target.value);}}
                placeholder="Buscar contacto por nombre"
            />
            {contactosEncontrados.map((contacto, index) => (
                <div key={index}>
                <h2>{contacto.nombre}</h2>
                <p>Correo electrónico: {contacto.correoElectronico}</p>
                <p>Número de teléfono: {contacto.numeroTelefono}</p>
                </div>
            ))}
        </div>
    );
}

export default GestorDeContactos;