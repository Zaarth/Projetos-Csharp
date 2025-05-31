import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../services/credenciaisFirebaseAuth';
import useFirebase from '../hooks/useFirebase';
import globalStyles from '../styles/globalStyles';

export default function AdminRegisterScreen({ navigation }) {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    tipo: 'administrador', // Fixo como administrador
    periodo: 'N/A',
    curso: 'Administração'
  });

  const { addUser } = useFirebase();

  const handleSubmit = async () => {
    try {
      // Criar usuário no Auth
      await createUserWithEmailAndPassword(auth, form.email, form.senha);
      
      // Salvar dados adicionais no Firestore
      await addUser(form);
      
      Alert.alert('Sucesso', 'Administrador cadastrado!');
      navigation.navigate('Welcome');
    } catch (error) {
      Alert.alert('Erro', 'Falha no cadastro: ' + error.message);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Registro de Administrador</Text>
      
      <TextInput
        placeholder="Nome"
        style={globalStyles.input}
        value={form.nome}
        onChangeText={v => setForm({...form, nome: v})}
      />

      <TextInput
        placeholder="Email"
        style={globalStyles.input}
        value={form.email}
        onChangeText={v => setForm({...form, email: v})}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha"
        style={globalStyles.input}
        secureTextEntry
        value={form.senha}
        onChangeText={v => setForm({...form, senha: v})}
      />

      <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
        <Text style={globalStyles.buttonText}>Cadastrar Administrador</Text>
      </TouchableOpacity>
    </View>
  );
}