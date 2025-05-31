import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../services/credenciaisFirebaseAuth';
import useFirebase from '../hooks/useFirebase';
import globalStyles from '../styles/globalStyles';

export default function RegisterScreen({ route, navigation }) {
  const { userType = 'aluno' } = route.params || {};
  
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    tipo: userType,
    periodo: '',
    curso: ''
  });

  const { addUser } = useFirebase();

  const getTitle = () => {
    switch(userType) {
      case 'avaliador': return 'Registro de Avaliador';
      case 'administrador': return 'Registro de Administrador';
      default: return 'Registro de Aluno';
    }
  };

  const handleSubmit = async () => {
    try {
      // Criar usuário no Auth
      await createUserWithEmailAndPassword(auth, form.email, form.senha);
      
      // Salvar dados adicionais no Firestore
      await addUser(form);
      
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erro', 'Falha no cadastro: ' + error.message);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{getTitle()}</Text>
      
      <TextInput
        placeholder="Nome completo"
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
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Senha"
        style={globalStyles.input}
        secureTextEntry
        value={form.senha}
        onChangeText={v => setForm({...form, senha: v})}
      />

      {userType === 'aluno' && (
        <>
          <TextInput
            placeholder="Período"
            style={globalStyles.input}
            value={form.periodo}
            onChangeText={v => setForm({...form, periodo: v})}
          />

          <TextInput
            placeholder="Curso"
            style={globalStyles.input}
            value={form.curso}
            onChangeText={v => setForm({...form, curso: v})}
          />
        </>
      )}

      <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
        <Text style={globalStyles.buttonText}>Completar Cadastro</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: '#95a5a6' }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={globalStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}