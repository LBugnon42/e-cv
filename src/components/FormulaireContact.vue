<template>
    <form @submit.prevent="submitForm">
      <label for="name">Nom:</label>
      <input type="text" id="name" v-model="name" required>
  
      <label for="email">E-mail:</label>
      <input type="email" id="email" v-model="email" required>
  
      <label for="message">Message:</label>
      <textarea id="message" v-model="message" required></textarea>
  
      <button type="submit">Envoyer</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      submitForm() {
        // Envoyer les données du formulaire au serveur Node.js
        fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message
          }),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Réponse du serveur:', data);
          // Vous pouvez ajouter ici des traitements supplémentaires si nécessaire
        })
        .catch(error => {
          console.error('Erreur lors de l\'envoi du formulaire:', error);
        });
  
        // Réinitialiser le formulaire après l'envoi
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  };
  </script>