import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import useFirebase from '../hooks/useFirebase';
import globalStyles from '../styles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CourseScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState(null);
  const { addCourse, fetchCourses } = useFirebase();

  useEffect(() => {
    const loadUserAndCourses = async () => {
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        const userData = JSON.parse(userString);
        setUser(userData);
        if (userData.tipo === 'administrador') {
          const coursesData = await fetchCourses();
          setCourses(coursesData);
        }
      }
    };
    loadUserAndCourses();
  }, []);

  const handleAddCourse = async () => {
    if (!nome.trim()) {
      Alert.alert('Atenção', 'Preencha o nome do curso');
      return;
    }
    
    await addCourse(nome);
    setNome('');
    
    // Recarregar cursos
    const coursesData = await fetchCourses();
    setCourses(coursesData);
  };

  if (!user || user.tipo !== 'administrador') {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Acesso restrito a administradores</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Gerenciar Cursos</Text>
      
      <TextInput
        placeholder="Nome do curso"
        value={nome}
        onChangeText={setNome}
        style={globalStyles.input}
      />
      
      <TouchableOpacity style={globalStyles.button} onPress={handleAddCourse}>
        <Text style={globalStyles.buttonText}>Adicionar Curso</Text>
      </TouchableOpacity>
      
      <FlatList
        data={courses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={globalStyles.listItem}>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CourseScreen;