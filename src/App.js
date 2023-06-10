import React from 'react';
import { app } from './Firebase';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

const Firestore = getFirestore(app);

const App = () => {
  const writeData = () => {
    addDoc(collection(Firestore, 'Cities'), {
      name: 'Delhi',
      pincode: 110012,
      latitude: 123,
      longitude: 456,
    });
  };
  const writeSubData = () => {
    addDoc(collection(Firestore, 'Cities/4s9kgCH9ysdQikObBN6w/Places'), {
      name: 'Shastri Nagar',
      desciption: 'This Place is Awesome',
      date: Date.now(),
    });
  };
  const getDocument = () => {
    const ref = doc(Firestore, 'Cities', '4s9kgCH9ysdQikObBN6w');
    getDoc(ref);
    console.log(getDoc);
  };
  const getDocumentByQuery = async () => {
    const collectionRef = collection(Firestore, 'Cities');
    const q = query(collectionRef, where('longitude', '==', 456));
    const Snapshot = await getDocs(q);
    Snapshot.forEach((data) => console.log(data.data()));
  };
  const updateDocument = async () => {
    const docRef = doc(Firestore, 'cities/4s9kgCH9ysdQikObBN6w');
    await updateDoc(docRef, {
      name: 'New Delhi',
    });
  };

  return (
    <div>
      <h1>Firestore Firebase</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={writeSubData}>Put Sub Data</button>
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getDocumentByQuery}>Get Document by Query</button>
      <button onClick={updateDocument}>Update</button>
    </div>
  );
};

export default App;
