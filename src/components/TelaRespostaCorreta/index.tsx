import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import styles from './style';

export default function TelaRespostaCorreta(props:any) {

    const voltar = () => {
        props.navigation.goBack();
    }

    return(
        <ImageBackground style={styles.imageBackground} source={require('../../../assets/trofeu.jpg')} resizeMode="contain">
                <Text style={styles.title}>Parabêns, você acertou!</Text>

                <View style={styles.containerButton}>
                    <Button title='RESPONDER OUTRO' onPress={voltar} color="#a0df52"/>
                </View>
        </ImageBackground>
    );
}