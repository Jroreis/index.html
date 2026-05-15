// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCbTPTFMUkuF3VVRgl8OOx_w6gIAekAVoQ",
  authDomain: "voltcalc-pro.firebaseapp.com",
  projectId: "voltcalc-pro",
  storageBucket: "voltcalc-pro.firebasestorage.app",
  messagingSenderId: "411208955318",
  appId: "1:411208955318:web:8735802bf0f4ac8a1a3d17"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();