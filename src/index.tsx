import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TelaInicio from './components/TelaInicio';
import TelaRespostaErrada from './components/TelaRespostaErrada';
import TelaRespostaCorreta from './components/TelaRespostaCorreta';
import TelaTabuada from './components/TelaTabuada';

const Navegacao = createStackNavigator();

const Principal = () => {
    return(
        <NavigationContainer>
            <Navegacao.Navigator headerMode='none'>
                <Navegacao.Screen name='Inicio' component={TelaInicio}
                    options= {{title: 'Não foi dessa vez'}} />
                <Navegacao.Screen name='Tabuada' component={TelaTabuada} />
                <Navegacao.Screen name='RespostaCorreta' component={TelaRespostaCorreta} />
                <Navegacao.Screen name='RespostaErrada' component={TelaRespostaErrada} />
            </Navegacao.Navigator>
        </NavigationContainer>
    );
}

export default Principal;