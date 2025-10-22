# Configuration EmailJS

## Configuration actuelle

- **Service ID**: `service_oh6356l`
- **Template ID**: `template_a1x9l9l`
- **Public Key**: `ET57aXc8wbm_RJ9Bg`

## Variables du template

Le template EmailJS doit contenir les variables suivantes :

- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur
- `{{subject}}` - Sujet du message
- `{{message}}` - Contenu du message

## Structure du template recommandé

```
Sujet: {{subject}}

De: {{from_name}} ({{from_email}})

Message:
{{message}}
```

## Test du formulaire

1. Remplissez le formulaire de contact
2. Cliquez sur "Envoyer le message"
3. Vérifiez que l'email arrive dans votre boîte de réception
4. Vérifiez la console pour les logs de succès/erreur

## Dépannage

- Vérifiez que les IDs sont corrects dans `src/config/emailjs.js`
- Vérifiez que le template contient les bonnes variables
- Vérifiez la console pour les erreurs JavaScript
- Testez avec un email valide
