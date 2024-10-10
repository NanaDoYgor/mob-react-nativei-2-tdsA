import React from  'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

import topo from '../../assets/topo.png'

const width = Dimensions.get ('screen').width;

export default function cesta() {
    return <>
     <Image source={topo} style={estilos.topo}/>
     <Text style={estilos.titulo}>Detalhes da Ceta</Text>
     </>
}

const estilos = StyleSheet.create({
    topo: {
width: "100%",
height:578 / 768 * width,
    },
    titulo: {
        position: "absolute",
        textAlign: "center"
    }
});