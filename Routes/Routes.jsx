import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeCheckList from '../pages/CheckList/HomeCheckList';
import VeiculoCheck from '../pages/CheckList/VeiculoCheck';
import MotoristaCheck from '../pages/CheckList/MotoristaCheck';
import DocumentacaoCheck from '../pages/CheckList/DocumentacaoCheck';
import FerramentasCheck from '../pages/CheckList/FerramentasCheck';
import ConservacaoCheck from '../pages/CheckList/ConservacaoCheck';
import ConservacaoCarroceriaCheck from '../pages/CheckList/ConservacaoCarroceriaCheck';
import PneusCheck from '../pages/CheckList/PneusCheck';
import Login from '../pages/Login/Login';

const AuthStack = createNativeStackNavigator();

function Routes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name='Home'
                component={HomeCheckList}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name='Veiculo'
                component={VeiculoCheck}
                options={{ headerShown: false }}
            />

            <AuthStack.Screen
                name='Documentacao'
                component={DocumentacaoCheck}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name='Ferramentas'
                component={FerramentasCheck}
                options={{ headerShown: false }}

            />
            <AuthStack.Screen
                name='Conservacao'
                component={ConservacaoCheck}
                options={{ headerShown: false }}

            />
            <AuthStack.Screen
                name='Carroceria'
                component={ConservacaoCarroceriaCheck}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name='Pneus'
                component={PneusCheck}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name='Motorista'
                component={MotoristaCheck}
                options={{ headerShown: false }}
            />
        </AuthStack.Navigator>
    );
}

export default Routes;
