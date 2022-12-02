import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { styles } from './src/estilos/Estilos'
import { Calculadora } from './src/pantallas/Calculadora'


export const App = () => {
  return (
    <SafeAreaView
    style={styles.fondo}>
    <StatusBar 
    backgroundColor='black'
    barStyle='light-content'
    />
    <Calculadora/>
    </SafeAreaView>
  )
}
export default App