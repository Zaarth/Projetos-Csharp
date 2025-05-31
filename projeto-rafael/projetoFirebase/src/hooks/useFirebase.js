import { useState } from 'react';
import { 
  collection, addDoc, getDocs, doc, deleteDoc, getDoc
} from 'firebase/firestore';
import { db } from '../services/credenciaisFirebase';

const useFirebase = () => {
  const [loading, setLoading] = useState(false);

  const addUser = async (data) => {
    setLoading(true);
    try {
      await addDoc(collection(db, 'usuarios'), data);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, 'usuarios'));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, 'usuarios', id));
  };

  const getUserById = async (id) => {
    const document = await getDoc(doc(db, 'usuarios', id));
    return document.data();
  };

  const addProject = async (data) => {
    setLoading(true);
    try {
      await addDoc(collection(db, 'projetos'), data);
    } finally {
      setLoading(false);
    }
  };

  const fetchProjects = async () => {
    const snapshot = await getDocs(collection(db, 'projetos'));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  return { 
    addUser, fetchUsers, deleteUser, getUserById,
    addProject, fetchProjects,
    loading 
  };
};

export default useFirebase;