import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import auth from '../services/credenciaisFirebaseAuth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import globalStyles from '../styles/globalStyles';
import useFirebase from '../hooks/useFirebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { fetchUsers } = useFirebase();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      
      // Buscar dados do usuário no Firestore
      const users = await fetchUsers();
      const loggedUser = users.find(u => u.email === userCredential.user.email);
      
      if (loggedUser) {
        // Salvar dados do usuário no AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify(loggedUser));
        
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        
        // Redirecionar para a tela apropriada
        if (loggedUser.tipo === 'administrador') {
          navigation.navigate('UserList');
        } else {
          navigation.navigate('Projects');
        }
      } else {
        Alert.alert('Erro', 'Usuário não encontrado no sistema');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha no login: ' + error.message);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login</Text>
      
      <TextInput
        placeholder="Email"
        style={globalStyles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      
      <TextInput
        placeholder="Senha"
        style={globalStyles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      
      <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: '#95a5a6' }]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={globalStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}