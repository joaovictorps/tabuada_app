import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import styles from './style';

export default function TelaRespostaErrada(props:any) {

    const mostrarTabuada = () => {
        props.navigation.navigate('Tabuada');
    }

    const voltar = () => {
        props.navigation.goBack();
    }

    return(
        <ImageBackground style={styles.imageBackground} source={require('../../../assets/errou.jpg')} resizeMode="cover">
            <View style={styles.container}>
                <Text style={styles.title}>Ops! Resposta errada que tal ver a tabuada?</Text>

                <View style={styles.containerButtons}>
                    <View style={styles.button}>
                        <Button title='VER TABUADA' onPress={mostrarTabuada} color="#1f4f66"/>
                    </View>

                    <View style={styles.button}>
                        <Button title='TENTAR OUTRO' onPress={voltar} color="#a0df52"/>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}