import React from 'react';
import MainNavigator from './src/navigations/MainNavigator';
import firebase from '@react-native-firebase/app';
import {auth, db, storage} from './src/firebase/config';


const App: React.FC = () => {
  return <MainNavigator />;
};

export default App;
