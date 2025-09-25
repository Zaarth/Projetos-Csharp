import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../services/credenciaisFirebase';
import auth from '../../services/credenciaisFirebaseAuth';
import styles from '../styles/styles';

const UserForm = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSalvar = async () => {
    if (!nome || !email || !tipo || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Validação básica de email
    if (!email.includes('@') || !email.includes('.')) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return;
    }

    // Validação de senha
    if (senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setLoading(true);

    try {
      // 1. Criar usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;

      // 2. Salvar informações adicionais no Firestore
      await addDoc(collection(db, 'usuarios'), {
        uid, // Armazena o UID do Authentication
        nome,
        email,
        tipo,
        criadoEm: new Date(),
      });

      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      navigation.goBack();
    } catch (error) {
      let errorMessage = 'Não foi possível salvar o usuário.';
      
      // Tratamento de erros comuns
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Este email já está sendo usado por outra conta.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'O endereço de email é inválido.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'A senha é muito fraca. Tente uma mais complexa.';
      }
      
      Alert.alert('Erro', errorMessage);
      console.error('Erro ao salvar usuário:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text style={styles.label}>Nome*</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite o nome completo"
              maxLength={100}
            />

            <Text style={styles.label}>E-mail*</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Digite o e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              maxLength={100}
            />

            <Text style={styles.label}>Tipo*</Text>
            <View style={[styles.input, { padding: 0 }]}>
              <Picker
                selectedValue={tipo}
                onValueChange={(itemValue) => setTipo(itemValue)}
              >
                <Picker.Item label="Selecione o tipo de usuário" value="" />
                <Picker.Item label="Administrador" value="administrador" />
                <Picker.Item label="Aluno" value="normal" />
                <Picker.Item label="Avaliador" value="avaliador" />
              </Picker>
            </View>

            <Text style={styles.label}>Senha*</Text>
            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
              placeholder="Digite a senha (mínimo 6 caracteres)"
              secureTextEntry
              maxLength={20}
            />

            <View style={styles.buttonContainer}>
              <Button 
                title={loading ? "Salvando..." : "Salvar"} 
                onPress={handleSalvar} 
                color="#18C0C1" 
                disabled={loading}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button 
                title="Voltar" 
                onPress={() => navigation.goBack()} 
                color="#546A83" 
                disabled={loading}
              />
            </View>

            <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 12, color: '#666', textAlign: 'center' }}>
                * Campos obrigatórios. A senha será armazenada de forma segura no sistema de autenticação.
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserForm;