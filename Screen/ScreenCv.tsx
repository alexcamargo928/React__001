import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import One from '../Components/partOne';
import Two from '../Components/parteTwo';
import Three from '../Components/parteThree';
import Personal from '../Components/Personal';

export const Cv = () => {
    return (
      <View style = {styles.container}>
        <View style = {styles.hoja}>
          <One></One>
          <Personal></Personal>
          <Two></Two>
          <Three></Three>
        </View>
      </View>
    );
};
const styles = StyleSheet.create({
    container:{
      width: "100%",
      height: "100%",
      backgroundColor: "#d6eaf8",
      alignItems: 'center',
      justifyContent: 'center',
    },

    hoja:{
      display:'flex',
      backgroundColor: 'white',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '80%',
      maxWidth: 355, 
    }
})
export default Cv
