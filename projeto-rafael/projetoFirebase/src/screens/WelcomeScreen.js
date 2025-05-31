import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import globalStyles from '../styles/globalStyles';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Text style={[globalStyles.title, { textAlign: 'center', marginBottom: 30 }]}>
        Bem-vindo ao Sistema de Projetos!
      </Text>
      
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={globalStyles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
      
      <Text style={{ marginVertical: 15, textAlign: 'center' }}>Ou registre-se como:</Text>
      
      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: '#3498db' }]}
        onPress={() => navigation.navigate('Register', { userType: 'aluno' })}
      >
        <Text style={globalStyles.buttonText}>Aluno</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: '#9b59b6' }]}
        onPress={() => navigation.navigate('Register', { userType: 'avaliador' })}
      >
        <Text style={globalStyles.buttonText}>Avaliador</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: '#e74c3c' }]}
        onPress={() => navigation.navigate('Register', { userType: 'administrador' })}
      >
        <Text style={globalStyles.buttonText}>Administrador</Text>
      </TouchableOpacity>
      
      <Text style={{ marginTop: 30, fontStyle: 'italic', textAlign: 'center' }}>
        Nota: O registro de avaliadores e administradores normalmente seria restrito, 
        mas está disponível para fins de teste.
      </Text>
    </ScrollView>
  );
};

export default WelcomeScreen;