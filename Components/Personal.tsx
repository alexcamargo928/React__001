import { Text, View,StyleSheet} from 'react-native' 
import React, { Component } from 'react'
import Apartamiento from './Apartamiento'

const Personal = () => {
    return (
      <><View style={styles.container}>
            <Text style={styles.title}>Info Personal</Text>
            <Text style={styles.info}>Tel: 3138127792</Text>
            <Text style={styles.info}>Email: alexcamargomenjura21@gmail.com</Text>
        </View><Apartamiento></Apartamiento></>
    );
  }

const styles = StyleSheet.create({ 
    container: { 
        paddingHorizontal: 'auto',  
        paddingTop: 5
    },  
    
    title:{
        fontSize: 15, 
        fontWeight:"bold",
        textAlign: "center",
        paddingBottom: 7
    },
    info:{
        fontSize: 12,
        textAlign: 'center',
        paddingBottom: -2,
    }

});

export default Personal