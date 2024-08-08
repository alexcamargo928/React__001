import { Text, View,StyleSheet } from 'react-native' 
import React, { Component } from 'react'

export const Three = () => { 
    return ( 
    <><Text style={styles.ta}>Habilidaes</Text>
        <View style={styles.container}>
            <View style={styles.tableContainer}>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>Skills</Text>
                    <Text style={styles.tableHeaderText}>Soft skills</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tablet}>
                        • Lenguaje SQL.{'\n'}
                        • Lenguaje HTML. {'\n'}
                        • Lenguaje CSS.{'\n'}
                        • Lenguaje PHP.{'\n'}
                        • Lenguaje JavaScript.{'\n'}
                        • Lenguaje Java. {'\n'}
                        • Lenguaje Python{'\n'}
                    </Text>
                    <Text style={styles.tablet}>
                        • Adaptabilidad{'\n'}
                        • Trabajo en Equipo{'\n'}
                        • Creatividad{'\n'}
                        • Resposabilidad{'\n'}
                        • Gestión del tiempo{'\n'}
                        • Resolución de problemas{'\n'}
                    </Text>
                </View>
            </View>
        </View></> 
)}

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        paddingHorizontal: 'auto', 
        paddingVertical:'auto', 
        paddingTop: 4
    }, 

    ta:{
        fontSize: 15, 
        fontWeight:"bold",
        textAlign: "center",
        paddingBottom: -10
    },
  
    tableContainer: { 
        borderRadius: 2, 
    }, 

    tableHeader: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: 20,
 
        paddingHorizontal: 60, 
        backgroundColor: '#d6eaf8',  
    }, 
    tableHeaderText: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: 24, 
        fontSize: 12, 
        fontWeight: 'bold', 
    }, 
    tableRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingVertical: '1%', 
        paddingHorizontal: 24, 
    }, 
    tablet: { 
        flex: 1, 
        fontSize: 11, 
        lineHeight: 20,
    }, 
});

export default Three