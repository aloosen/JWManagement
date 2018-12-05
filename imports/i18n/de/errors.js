const error = {
  '403': 'Es existiert bereits ein Account mit diesem Benutzernamen',
  nameRequired: 'Bitte gib einen Name für dieses Schiff ein',
  callsignUnique: 'Ein Schiff mit diesem Rufzeichen existiert bereits',
  eniUnique: 'Ein Schiff mit dieser ENI-Nummer existiert bereits',
  imoUnique: 'Ein Schiff mit dieser IMO-Nummer existiert bereits',
  mmsiUnique: 'Ein Schiff mit dieser MMSI-Nummer existiert bereits',
  missingField: 'Bitte fülle alle Felder aus',
  incorrectPassword: 'Dieses Passwort scheint nicht zu stimmen',
  noAccountFound: 'Es gibt keinen Benutzer mit diesem Benutzernamen bzw. dieser E-Mail Adresse',
  multipleAccountsFound: 'Es existieren mehrere Benutzer mit dieser E-Mail Adresse. Bitte verwende den Benutzernamen',
  passwordsDoNotMatch: 'Die Passwörter stimmen nicht überein',
  passwordTooShort: 'Das Passwort muss mindestens 8 Zeichen lang sein'
}

export default error
