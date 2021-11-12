import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, Timestamp, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMB8rlDE3XMF3_O2ikukOKfBMg3_wN1fs",

  authDomain: "wheres-waldo-7a519.firebaseapp.com",

  projectId: "wheres-waldo-7a519",

  storageBucket: "wheres-waldo-7a519.appspot.com",

  messagingSenderId: "151832538638",

  appId: "1:151832538638:web:0e3ac17e5e05082facd65f",

  measurementId: "G-1J567BJHDP",
};

// Initialize Firebase

const Firebase = () => {
  initializeApp(firebaseConfig);

  const db = getFirestore();
  const publicMethods = {};
  publicMethods.getCharacterLocations = async () => {
    const querySnapshot = await getDocs(collection(db, "characterLocations"));
    const data = [];
    querySnapshot.forEach((doc) => {
      const current = doc.data().data;
      data.push(...current);
    });

    return data;
  };

  publicMethods.getLeaderboard = async () => {
    const collectionRef = collection(db, "leaderboard");
    const docSnap = await getDocs(collectionRef);
    const data = [];
    docSnap.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  };

  publicMethods.pushToLeaderboard = async (username, time) => {
    console.log("called");
    await addDoc(collection(db, "leaderboard"), {
      name: username,
      timetaken: time,
    });
  };

  publicMethods.getStartTime = () => {
    return Timestamp.now().seconds;
  };
  publicMethods.getTimeTaken = (time) => {
    return Timestamp.now().seconds - time;
  };
  return publicMethods;
};

export { Firebase };
