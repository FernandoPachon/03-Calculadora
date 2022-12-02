import React, {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
  current,
}
export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const ultimaOperación = useRef<Operadores>;

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };
  const armarNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero === '0' && numeroTexto !== '.') {
      setNumero(numeroTexto);
    } else {
      setNumero(numero + numeroTexto);
    }
  };
  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };
  const btnDel = () => {
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substring(1);
    }
    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };
  const cambioNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };
  const btnDividir = () => {
    cambioNumPorAnterior();
    ultimaOperación.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    cambioNumPorAnterior();
    ultimaOperación.current = Operadores.multiplicar;
  };
  const btnSumar = () => {
    cambioNumPorAnterior();
    ultimaOperación.current = Operadores.sumar;
  };
  const btnRestar = () => {
    cambioNumPorAnterior();
    ultimaOperación.current = Operadores.restar;
  };
  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperación.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);

        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);

        break;
      case Operadores.dividir:
        setNumero(`${num2 / num1}`);

        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);

        break;
    }
    setNumeroAnterior('0');
  };
  return{
    calcular,
    armarNumero,
    btnRestar,
    btnSumar,
    btnMultiplicar,
    btnDividir,
    btnDel,
    positivoNegativo,
    limpiar,
    numero,
    numeroAnterior,
    
  }
};
