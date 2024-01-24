var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Utilisez body-parser pour analyser les données du formulaire
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurations pour Nodemailer (remplacez avec vos informations)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votre_adresse_email@gmail.com',
    pass: 'votre_mot_de_passe_email'
  }
});

// Gestionnaire de route pour recevoir les données du formulaire et envoyer un e-mail
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configurations de l'e-mail (remplacez avec vos informations)
  const mailOptions = {
    from: 'votre_adresse_email@gmail.com',
    to: 'bugnon.lucas62@gmail.com',
    subject: 'Nouveau message du formulaire de contact',
    text: `Nom: ${name}\nE-mail: ${email}\nMessage: ${message}`
  };

  // Envoi de l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('E-mail envoyé avec succès: ' + info.response);
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});