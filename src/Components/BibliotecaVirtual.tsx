// import React from 'react';

import { useState } from "react";

class Libro {
    titulo: string;
    autor: string;
    prestado: boolean;
  
    constructor(titulo: string, autor: string) {
      this.titulo = titulo;
      this.autor = autor;
      this.prestado = false;
    }
  
    prestar() {
      if (!this.prestado) {
        this.prestado = true;
        return true;
      } else {
        return false;
      }
    }
  
    devolver() {
      if (this.prestado) {
        this.prestado = false;
        return true;
      } else {
        return false;
      }
    }
  }
  
  class Biblioteca {
    libros: Libro[];
  
    constructor() {
      this.libros = [];
    }
  
    agregarLibro(libro: Libro) {
      this.libros.push(libro);
    }
  
    prestarLibro(index: number) {
      if (index >= 0 && index < this.libros.length) {
        return this.libros[index].prestar();
      }
      return false;
    }
  
    devolverLibro(index: number) {
      if (index >= 0 && index < this.libros.length) {
        return this.libros[index].devolver();
      }
      return false;
    }
  }
  

function BibliotecaVirtual() {
  const [biblioteca, setBiblioteca] = useState(new Biblioteca());
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  const agregarLibro = () => {
    const nuevoLibro = new Libro(titulo, autor);
    const nuevaBiblioteca = new Biblioteca();
    nuevaBiblioteca.libros = [...biblioteca.libros, nuevoLibro];
    setBiblioteca(nuevaBiblioteca);
    setTitulo('');
    setAutor('');
  };
  

  const prestarLibro = (index: number) => {
    const nuevaBiblioteca = new Biblioteca();
    nuevaBiblioteca.libros = [...biblioteca.libros];
    if (nuevaBiblioteca.prestarLibro(index)) {
      setBiblioteca(nuevaBiblioteca);
    }
  };
  
  const devolverLibro = (index: number) => {
    const nuevaBiblioteca = new Biblioteca();
    nuevaBiblioteca.libros = [...biblioteca.libros];
    if (nuevaBiblioteca.devolverLibro(index)) {
      setBiblioteca(nuevaBiblioteca);
    }
  };
  

  return (
    <div>
      <h3>Biblioteca Virtual</h3>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título del libro"
      />
      <br />
      <br />
      <input
        type="text"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        placeholder="Autor del libro"
      />
      <br />
      <br />
      <button onClick={agregarLibro}>Agregar libro</button>

      {biblioteca.libros.map((libro, index) => (
        <div key={index}>
          <h2>{libro.titulo}</h2>
          <p>Autor: {libro.autor}</p>
          <p>Prestado: {libro.prestado ? 'Sí' : 'No'}</p>
          {!libro.prestado && <button onClick={() => prestarLibro(index)}>Prestar libro</button>}
          {libro.prestado && <button onClick={() => devolverLibro(index)}>Devolver libro</button>}
        </div>
      ))}
    </div>
  );
}

export default BibliotecaVirtual;
