import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'

export const Apartamiento = () => {
    return (
        <View style ={styles.separar} ></View>
    )
}
const styles = StyleSheet.create({
    separar: {
        width: '100%',
        height: 6,
        backgroundColor: '#21618c',
        borderWidth: 0,
        marginTop: 2
    },
  
  })

export default Apartamiento