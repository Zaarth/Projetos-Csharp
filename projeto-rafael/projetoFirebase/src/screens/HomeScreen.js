import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Bem-vindo ao Sistema de Projetos!</Text>
      
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={globalStyles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate('Register', { userType: 'aluno' })}
      >
        <Text style={globalStyles.buttonText}>Registrar como Aluno</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[globalStyles.button, {backgroundColor: '#8e44ad'}]}
        onPress={() => navigation.navigate('Register', { userType: 'avaliador' })}
      >
        <Text style={globalStyles.buttonText}>Registrar como Avaliador</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[globalStyles.button, {backgroundColor: '#e74c3c'}]}
        onPress={() => navigation.navigate('Register', { userType: 'administrador' })}
      >
        <Text style={globalStyles.buttonText}>Registrar como Administrador</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;