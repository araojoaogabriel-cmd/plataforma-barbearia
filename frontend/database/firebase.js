// Configuração do Firebase (Firestore)
// Substitua pelos dados do seu projeto Firebase

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
};

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);

// Exporta conexão com o Firestore
const db = firebase.firestore();
