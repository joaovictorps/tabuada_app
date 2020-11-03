import React from 'react';
import {View, Button, ImageBackground} from 'react-native';
import styles from './style';

export default function TelaTabuada(props:any) {

    const voltar = () =>{
        props.navigation.navigate('Inicio');
    }

    return(
        <ImageBackground style={styles.imageBackground} source={require('../../../assets/tabuada.jpeg')} resizeMode='contain' >
            <View style={styles.containerButton}>
                <Button title='Responder' onPress={voltar} color="#a0df52"/>
            </View>
        </ImageBackground>
    );
}