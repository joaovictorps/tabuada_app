import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, ImageBackground} from 'react-native';

import {gerarNumero, validarResposta} from './functions';

import styles from './style';

export default function TelaInicio(props:any) {
    const [primeiroNumero, setPrimeiroNumero] = useState(1);
    const [segundoNumero, setSegundoNumero] = useState(1);
    const [respostaUsuario, setRespostaUsuario] = useState(0);

    useEffect(() => {
        criarQuestao();
    }, []);

    const criarQuestao = () => {
        setPrimeiroNumero(gerarNumero());
        setSegundoNumero(gerarNumero());
        setRespostaUsuario(0);
    }

    const responder = () => {
        if(validarResposta(primeiroNumero, segundoNumero, respostaUsuario)) {
            props.navigation.navigate('RespostaCorreta');
        } else {
            props.navigation.navigate('RespostaErrada');
        }

        criarQuestao();
    }

    const abrirTelaTabuada = () => {
        props.navigation.navigate('Tabuada');
    }

    return(
        <ImageBackground style={styles.imageBackground} source={require('../../../assets/fundo.png')}>
            <View style={styles.containerMain}>

                <View style={styles.container}>
                    <Text style={styles.title}>Duvido você acertar!</Text>
                    <View style={styles.question}>
                        <Text style={styles.text}>{primeiroNumero} X {segundoNumero} = </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={ respostaUsuario => setRespostaUsuario(Number(respostaUsuario)) } 
                            keyboardType="numeric" 
                            value={respostaUsuario.toString()} 
                            autoFocus={true}
                            maxLength={3} 
                        />
                    </View>

                    <View style={styles.containerButtons}>
                        <View style={styles.button}>
                            <Button title='Pular' onPress={criarQuestao} color="#e53b62"/>
                        </View>

                        <View style={styles.button}>
                            <Button title='Responder' onPress={responder} color="#a0df52" />
                        </View>
                    </View>

                </View>

                <View style={styles.button}>
                    <Button title='Ver tabuada' onPress={abrirTelaTabuada} color="#1f4f66"/>
                </View>
            </View>
        </ImageBackground>
    );
}