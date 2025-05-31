import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import UserListScreen from '../screens/UserListScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import ProjectScreen from '../screens/ProjectScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ title: 'Início' }} 
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen 
      name="Register" 
      component={RegisterScreen} 
      options={({ route }) => ({ 
        title: route.params?.userType === 'administrador' 
          ? 'Registro Admin' 
          : route.params?.userType === 'avaliador' 
            ? 'Registro Avaliador' 
            : 'Registro Aluno' 
      })} 
    />
    <Stack.Screen name="UserList" component={UserListScreen} options={{ title: 'Usuários' }} />
    <Stack.Screen name="UserDetails" component={UserDetailsScreen} options={{ title: 'Detalhes' }} />
    <Stack.Screen name="Projects" component={ProjectScreen} options={{ title: 'Projetos' }} />
  </Stack.Navigator>
);

export default StackNavigator;