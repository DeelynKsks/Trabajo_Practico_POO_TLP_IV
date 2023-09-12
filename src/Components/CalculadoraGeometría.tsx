// import React from 'react'
import { useState } from 'react';

abstract class FormaGeometrica {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
  }
  
  class Circulo extends FormaGeometrica {
    radio: number;
  
    constructor(radio: number) {
      super();
      this.radio = radio;
    }
  
    calcularArea(): number {
      return Math.PI * Math.pow(this.radio, 2);
    }
  
    calcularPerimetro(): number {
      return 2 * Math.PI * this.radio;
    }
  }
  
  class Rectangulo extends FormaGeometrica {
    ancho: number;
    alto: number;
  
    constructor(ancho: number, alto: number) {
      super();
      this.ancho = ancho;
      this.alto = alto;
    }
  
    calcularArea(): number {
      return this.ancho * this.alto;
    }
  
    calcularPerimetro(): number {
      return 2 * (this.ancho + this.alto);
    }
  }
  
  class Triangulo extends FormaGeometrica {
    base: number;
    altura: number;
  
    constructor(base: number, altura: number) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return (this.base * this.altura) / 2;
    }
  
    calcularPerimetro(): number {
      // Esto es un cálculo simplificado y asume que todos los lados del triángulo son iguales (triángulo equilátero)
      return this.base * 3;
    }
  }
  
  function CalculadoraGeometria() {
    const [listaFormas, setListaFormas] = useState<FormaGeometrica[]>([]);
    const [tipoForma, setTipoForma] = useState('');
    const [parametro1, setParametro1] = useState('');
    const [parametro2, setParametro2] = useState('');
    const [calculo, setCalculo] = useState('');
  
    const agregarForma = () => {
      let nuevaForma: FormaGeometrica;
      if (tipoForma === 'circulo') {
        nuevaForma = new Circulo(parseFloat(parametro1));
      } else if (tipoForma === 'rectangulo') {
        nuevaForma = new Rectangulo(parseFloat(parametro1), parseFloat(parametro2));
      } else if (tipoForma === 'triangulo') {
        nuevaForma = new Triangulo(parseFloat(parametro1), parseFloat(parametro2));
      } else {
        return;
      }
      setListaFormas([...listaFormas, nuevaForma]);
      setTipoForma('');
      setParametro1('');
      setParametro2('');
    };
  
    return (
      <div>
        <h2>Calculadora de Geometría</h2>
        <select value={tipoForma} onChange={(e) => setTipoForma(e.target.value)}>
          <option value="">--Seleccionar forma--</option>
          <option value="circulo">Círculo</option>
          <option value="rectangulo">Rectángulo</option>
          <option value="triangulo">Triángulo</option>
        </select>
        <br />
        <br />
        <input
          style={{width:'360px'}}
          type="number"
          value={parametro1}
          onChange={(e) => setParametro1(e.target.value)}
          placeholder="Radio (para círculos) o base (para rectángulos y triángulos)"
        />
        <br />
        <br />
        {tipoForma !== 'circulo' && (
        <>
            <input
                style={{width:'230px'}}
                type="number"
                value={parametro2}
                onChange={(e) => setParametro2(e.target.value)}
                placeholder="Altura (para rectángulos y triángulos)"
            />
            <br />
            <br />
        </>
        )}
        <select value={calculo} onChange={(e) => setCalculo(e.target.value)}>
          <option value="">--Seleccionar cálculo--</option>
          <option value="area">Área</option>
          <option value="perimetro">Perímetro</option>
        </select>
        <br />
        <br />
        <button onClick={agregarForma}>Agregar forma</button>
  
        {listaFormas.map((forma, index) => (
          <div key={index}>
            {calculo === 'area' && <p>Área: {forma.calcularArea()}</p>}
            {calculo === 'perimetro' && <p>Perímetro: {forma.calcularPerimetro()}</p>}
          </div>
        ))}
      </div>
    );
  }
  
export default CalculadoraGeometria;