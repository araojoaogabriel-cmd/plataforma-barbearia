// Configuração do Firebase (Firestore)
// Correta

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyAHbw_bgI8o9orT1wZf2UJ-8xa6F3bZdGE",
    authDomain: "plataforma-barbearia.firebaseapp.com",
    projectId: "plataforma-barbearia",
    storageBucket: "plataforma-barbearia.appspot.com",
    messagingSenderId: "847507003344",
    appId: "1:847507003344:web:cfd0f40f415c4b5dfa0bd5"
  };

  // Inicializa o Firebase
  firebase.initializeApp(firebaseConfig);

  // Conexão com o Firestore
  const db = firebase.firestore();
</script>
