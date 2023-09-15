# Sujet :
**Réaliser une plateforme sécurisée pour acheter et revendre des billets d'occasion de concerts, festivals, événements**

# Équipe :
* Sylvia Bankowska
* Nicolas Bourassin
* Steeve Lowenski


## Le projet sera découpé en 2 parties :

### Front office ( Spring Boot + React)               => Dédié aux utilisateurs
* s'inscrire
* se connecter
* se déconnecter
* accéder au détail de son profil et à l'historique de ses ventes et achats
* éditer son profil (photo, infos perso, etc)
* vérifier son profil
* voir les billets en vente
* recherche un billet spécifique (via date, via nom de l'evenement)
* acheter un billet
* mettre en vente un billet
* noter une transaction (vente ou un achat)

### Back office (JakartaEE + JSTL + JSP)                     => Dédié aux administrateurs (Initialement, Il existera un super administrateur)
* se connecter
* se déconnecter
* gérer les utilisateurs du Front office (CRUD) :
* pouvoir activer ou désactiver leurs accès
* vérifier le profil
* créer un autre administrateur (si l'administrateur connecté est le super administrateur)

## Exemples de concurrents :
* https://www.ticketswap.fr/
* https://www.zepass.com/
* https://reelax-tickets.com/
* https://passetonbillet.fr/