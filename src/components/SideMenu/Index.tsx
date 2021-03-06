import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {StatusBar} from 'react-native';

import {Container} from '../../GlobalStyle/styleGlobal';
import HeaderUser from '../HeaderUser/Index';

import { useNavigation } from '@react-navigation/native';

const SideMenu = () => {
  const navigation = useNavigation();
  function handleNavigateToPage(page:string) {
     navigation.navigate(page);
  }

  //Oculta a barra de status
  StatusBar.setHidden(true);
  return (
    <Container>
      <>
        <HeaderUser
          titulo={'Danilo Nunes'}
          ImgSource={'../../assets/images/user-rounded.png'}
        />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/bg.png')}
            style={{position: 'absolute'}}
          />
          <View
            style={{
              justifyContent: 'flex-start',
              alignContent: 'flex-start',
              flexDirection: 'column',
              width: '100%',
              // borderWidth: 2,
              // borderColor: 'red',
              paddingLeft: 30,
            }}>
            <TouchableOpacity onPress={() => handleNavigateToPage('Home')} activeOpacity={0.6}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 30,
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateToPage('Perfil')} activeOpacity={0.6}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 30,
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Perfil</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateToPage('Publicacoes')} activeOpacity={0.6}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 30,
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Ocorr??ncia</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateToPage('Configuracoes')} activeOpacity={0.6}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 30,
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Configura????es</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateToPage('Help')} activeOpacity={0.6}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 30,
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Ajuda</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateToPage('PoliticaPrivacidade')} activeOpacity={0.6}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 30,
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>
                  Politica e Privacidade
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateToPage('Termos')} activeOpacity={0.6}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 30,
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>
                  Termos e Condi????es
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateToPage('Home')} activeOpacity={0.6}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 30,
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Sair</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

SideMenu.navigationOptions = {
  title: 'Menu',
};
export default SideMenu;
