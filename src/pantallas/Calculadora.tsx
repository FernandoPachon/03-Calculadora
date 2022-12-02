import React, {useRef, useState} from 'react';
import {Switch, Text, View} from 'react-native';
import {Botones} from '../componentes/Botones';
import {styles} from '../estilos/Estilos';
import { useCalculadora } from '../hoocks/useCalculadora';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
  current,
}

export const Calculadora = () => {
  const {
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
  }=useCalculadora();
  return (
    <View style={styles.contenedorCalculadora}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultados}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {' '}
        {numero}
      </Text>

      <View style={styles.filaBotones}>
        <Botones texto="c" color="#9B9B9B" acción={limpiar} />
        <Botones texto="+/-" color="#9B9B9B" acción={positivoNegativo} />
        <Botones texto="del" color="#9B9B9B" acción={btnDel} />
        <Botones texto="/" color="#FF9427" acción={btnDividir} />
      </View>
      <View style={styles.filaBotones}>
        <Botones texto="7" acción={armarNumero} />
        <Botones texto="8" acción={armarNumero} />
        <Botones texto="9" acción={armarNumero} />
        <Botones texto="X" color="#FF9427" acción={btnMultiplicar} />
      </View>
      <View style={styles.filaBotones}>
        <Botones texto="4" acción={armarNumero} />
        <Botones texto="5" acción={armarNumero} />
        <Botones texto="6" acción={armarNumero} />
        <Botones texto="-" color="#FF9427" acción={btnRestar} />
      </View>
      <View style={styles.filaBotones}>
        <Botones texto="1" acción={armarNumero} />
        <Botones texto="2" acción={armarNumero} />
        <Botones texto="3" acción={armarNumero} />
        <Botones texto="+" color="#FF9427" acción={btnSumar} />
      </View>
      <View style={styles.filaBotones}>
        <Botones texto="0" ancho acción={armarNumero} />
        <Botones texto="." acción={armarNumero} />
        <Botones texto="=" color="#FF9427" acción={calcular} />
      </View>
    </View>
  );

};
