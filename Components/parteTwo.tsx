import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Apartamiento from './Apartamiento'


export const Two = () => {
    return (
      <><View style={styles.container}>
        <Text style={styles.ta}>Perfil</Text>
        <Text style={styles.subtexto}>Soy un técnico en programación de software con una sólida
          experiencia en lenguajes como PHP, HTML y CSS, así como en diversas
          tecnologías. Mi pasión porla programación me impulsa a buscar constantemente oportunidades
          para crecer y perfeccionar mis capacidades en este campo en
          constante evolución.
        </Text>
      </View><Apartamiento></Apartamiento></>
    )

}
const styles = StyleSheet.create({
  container:{
    display:'flex',
    marginHorizontal: 'auto',
    alignItems: 'center',
  },

  ta:{
    fontSize: 15, 
    fontWeight:"bold",
    textAlign: "center",
    paddingBottom: 7
  },
  
  subtexto:{
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 22,
  }
})
export default Two