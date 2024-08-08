import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Apartamiento from './Apartamiento'
const Photo= require('../assets/Foto.jpeg');

export const One = () => {
  return (
    <><View style={styles.container}>
      <Image style={styles.foto} source={Photo} />
      <Text style={styles.Encabezado}>Israel Steven Camargo Menjura</Text>
      <Text style={styles.subEncabezado}>Tecnologo en Analisis y Desarrollo de Software</Text>
    </View><Apartamiento></Apartamiento></>

  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    alignItems: 'center',

  },

  foto: {
    marginTop: -5,
    height: 100,
    width: 100,
    marginHorizontal:'auto',
    borderRadius: 90
  },

  Encabezado: {
    fontSize: 16,
    textAlign: "center",
    color: "black",
    marginTop: 0,
    fontWeight: "bold",
  },

  subEncabezado: {
    fontSize: 14,
    textAlign: "center",
    color: "black",
    marginTop: -4,
    fontWeight: "600",
  },
})

export default One