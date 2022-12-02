import React, { useState } from 'react'
import { ColorSchemeName, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../estilos/Estilos'

interface Props {
    texto: string;
    color?: string;
    ancho?:boolean;
    acción: (numeroTexto:string) =>void;
  }

export const Botones = ({texto,color='#2D2D2D',ancho=false,acción,}:Props) => {
    return (
    <TouchableOpacity
    onPress={()=>acción(texto)}
    >
          <View style={{
            ...styles.boton,
            backgroundColor: color,
           width: (ancho)?180:80,
        }}

            >
            <Text style={{
                ...styles.botonTexto,
                color: (color==='#9B9B9B')?'black':'white',
                
                }}>
                {texto} </Text>
          </View>
    </TouchableOpacity>
  )
}
