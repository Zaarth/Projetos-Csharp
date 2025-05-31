import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import useFirebase from '../hooks/useFirebase';
import globalStyles from '../styles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProjectScreen = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null);
  const { addProject, fetchProjects } = useFirebase();

  useEffect(() => {
    const loadUserAndProjects = async () => {
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        const userData = JSON.parse(userString);
        setUser(userData);
        
        // Carregar projetos
        const projectsData = await fetchProjects();
        setProjects(projectsData);
      }
    };
    loadUserAndProjects();
  }, []);

  const handleAddProject = async () => {
    if (!titulo.trim()) {
      Alert.alert('Atenção', 'Preencha o título do projeto');
      return;
    }
    
    await addProject({
      titulo,
      descricao,
      autorId: user?.id || 'unknown',
      autorNome: user?.nome || 'Usuário',
      periodo: user?.periodo || '',
      curso: user?.curso || ''
    });
    
    setTitulo('');
    setDescricao('');
    
    // Recarregar projetos
    const projectsData = await fetchProjects();
    setProjects(projectsData);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Projetos</Text>
      
      <TextInput
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
        style={globalStyles.input}
      />
      
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={globalStyles.input}
        multiline
      />
      
      <TouchableOpacity style={globalStyles.button} onPress={handleAddProject}>
        <Text style={globalStyles.buttonText}>Adicionar Projeto</Text>
      </TouchableOpacity>

      <FlatList
        data={projects}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={globalStyles.listItem}>
            <Text style={{fontWeight: 'bold'}}>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
            <Text>Autor: {item.autorNome}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProjectScreen;