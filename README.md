src/
├── assets/          # Images, fonts, styles globaux
├── components/      # Composants réutilisables (Boutons, Inputs, Navbar)
│   ├── ui/          # Composants graphiques purs
│   └── form/        # Composants liés aux formulaires
├── config/          # Configuration (Axios, constantes)
├── hooks/           # Logique réutilisable (useAuth, useFetch)
├── layouts/         # Squelettes de pages (LayoutAuthentifié, LayoutPublic)
├── pages/           # Vues principales (Login, Dashboard, Profile)
├── routes/          # Définition des routes (AppRouter) - Équivalent de src/routes
├── services/        # Appels API (user.service.js) - Équivalent direct de src/services
├── store/           # Gestion d'état global (Context API, Redux Toolkit ou Zustand)
└── utils/           # Fonctions utilitaires (validateEmail, formatDate)