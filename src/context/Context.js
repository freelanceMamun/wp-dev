import React, { useEffect } from 'react';
import { useContext, createContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDocs, collection } from 'firebase/firestore';

import { auth, db } from '../firebase/firebase.config';

export const UserContext = createContext();

export const UseContextProvider = ({ children }) => {
  const [navToggle, setNavToggle] = useState(false);
  const [user, setUser] = useState('');

  const [dataInfo, setDataInfo] = useState([]);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function LogOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
    });

    return () => {
      unSubcribe();
    };
  }, []);

  useEffect(() => {
    const getInfodata = async () => {
      const data = await getDocs(collection(db, 'Info'));
      setDataInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getInfodata();
  }, []);

  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <UserContext.Provider
      value={{ navToggle, setNavToggle, signup, login, LogOut, user, dataInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseContent = () => {
  return useContext(UserContext);
};
