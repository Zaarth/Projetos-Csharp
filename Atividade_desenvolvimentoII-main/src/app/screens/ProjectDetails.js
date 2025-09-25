import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Button,
  ActivityIndicator 
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../services/credenciaisFirebase';
import { useTipoUsuario } from '../../hooks/useTipoUsuario';
import styles from '../styles/styles';

const ProjectDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { projeto, podeEditar } = route.params || {};
  const { tipo, userId, loading: loadingTipo } = useTipoUsuario();

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'projetos', projeto.id));
      Alert.alert('Sucesso', 'Projeto excluído com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir o projeto.');
      console.error('Erro ao excluir projeto:', error);
    }
  };

  if (loadingTipo) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#18C0C1" />
      </View>
    );
  }

  if (!projeto) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nenhum projeto selecionado.</Text>
      </View>
    );
  }

  // Verifica se o usuário atual pode editar/excluir este projeto
  const podeExcluir = tipo === 'administrador' || projeto.criadoPor === userId;
  const podeEditarProjeto = podeEditar !== undefined ? podeEditar : (tipo === 'administrador' || projeto.criadoPor === userId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{projeto.titulo}</Text>
      
      <Text style={localStyles.label}>Autor: 
        <Text style={localStyles.value}> {projeto.autor}</Text>
      </Text>
      
      <Text style={localStyles.label}>Período: 
        <Text style={localStyles.value}> {projeto.periodo}</Text>
      </Text>
      
      <Text style={localStyles.label}>Curso: 
        <Text style={localStyles.value}> {projeto.curso}</Text>
      </Text>
      
      <Text style={localStyles.label}>Ano: 
        <Text style={localStyles.value}> {projeto.ano}</Text>
      </Text>
      
      <Text style={localStyles.label}>Criado por: 
        <Text style={localStyles.value}> {projeto.criadoPor || projeto.alunoId || 'N/A'}</Text>
      </Text>
      
      <Text style={localStyles.label}>Seu User ID: 
        <Text style={localStyles.value}> {userId}</Text>
      </Text>
      
      <Text style={[localStyles.label, { marginTop: 10 }]}>Descrição:</Text>
      <Text style={localStyles.value}>{projeto.descricao || 'Sem descrição'}</Text>

      <View style={localStyles.actions}>
        {podeEditarProjeto && (
          <Button
            title="Editar Projeto"
            onPress={() => navigation.navigate('Formulário de Projeto', { projeto })}
            color="#18C0C1"
          />
        )}
        
        {podeExcluir && (
          <Button
            title="Excluir Projeto"
            onPress={handleDelete}
            color="#FF6347"
            style={localStyles.deleteButton}
          />
        )}
      </View>
    </View>
  );
};

export default ProjectDetails;

const localStyles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#555',
  },
  actions: {
    marginTop: 20,
    gap: 10,
  },
  deleteButton: {
    marginTop: 10,
  },
});