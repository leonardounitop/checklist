import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes/Routes';
import { SafeAreaView, StyleSheet } from 'react-native';
import { VeiculoVault } from './Context/VeiculooVault';
import { MotoristaVault } from './Context/MotoristaVault';
import { DocumentacaoVault } from './Context/DocumentacaoVault';
import { FerramentasVault } from './Context/FerramentasVault';
import { ConservacaoVault } from './Context/ConservacaoVault';
import { CarroceriaVault } from './Context/CarroceriaVault';
import { PneusVault } from './Context/PneusVault';
import { GlobalVault } from './Context/GlobalVault'


const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1E88E5', // Azul primário
    accent: '#42A5F5',  // Azul claro
    background: '#FFF', // Fundo branco
    surface: '#FFFFFF', // Superfície branca
    text: '#0D47A1', // Texto azul escuro
    placeholder: '#90CAF9', // Placeholder azul claro
    backdrop: '#E3F2FD', // Backdrop azul claro
    outline: '#1E88E5', // Contorno azul primário
  },
};

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <GlobalVault>
            <VeiculoVault>
              <MotoristaVault>
                <DocumentacaoVault>
                  <FerramentasVault>
                    <ConservacaoVault>
                      <CarroceriaVault>
                        <PneusVault>
                          <Routes />
                        </PneusVault>
                      </CarroceriaVault>
                    </ConservacaoVault>
                  </FerramentasVault>
                </DocumentacaoVault>
              </MotoristaVault>
            </VeiculoVault>
          </GlobalVault>
        </SafeAreaView>
        <StatusBar
          barStyle="light-content" // ou "dark-content"
          backgroundColor="#fff"
          hidden={false}
          translucent={true}
        />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25, // Garante que o conteúdo não fique sob a StatusBar
  },
});
