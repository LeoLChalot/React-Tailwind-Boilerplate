import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, Link } from 'react-router';

import apiClient from '@Config/axios'; // Votre instance Axios
import Input from '@Forms/Input'; // Votre composant Input créé juste avant

// 1. Définition du Schéma de validation avec Zod
const signInSchema = z.object({
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Format d'email invalide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit faire au moins 6 caractères"), // Règle arbitraire pour l'exemple frontend
});

const SignInPage = () => {
  const navigate = useNavigate();


  // 2. Initialisation du hook
  const {
    register,
    handleSubmit,
    setError, // Pour définir manuellement une erreur (ex: backend)
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signInSchema), // Liaison avec Zod
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 3. Gestion de la soumission
  const onSubmit = async (data) => {
    try {
      // Appel API vers votre backend Node.js
      const response = await apiClient.post('/users/sign-in', data);

      // Si succès (supposons que l'API renvoie { token, user })
      const { token, user } = response.data;

      // Mise à jour du store global
      console.table(user, token);

      // Redirection
      navigate('/');

    } catch (error) {
      console.error("Erreur de connexion", error);

      // Si le backend renvoie une erreur spécifique (ex: 401)
      if (error.response && error.response.data) {
        // On affiche une erreur générale sur le champ 'root' ou un champ spécifique
        setError('root', {
          type: 'server',
          message: error.response.data.message || "Email ou mot de passe incorrect"
        });
      } else {
        setError('root', {
          type: 'server',
          message: "Une erreur serveur est survenue."
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Connexion
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ou <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">créer un compte</Link>
          </p>
        </div>

        {/* Le formulaire */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>

          {/* Affichage des erreurs globales (API) */}
          {errors.root && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-sm text-red-700">{errors.root.message}</p>
            </div>
          )}

          <Input
            label="Adresse Email"
            type="email"
            placeholder="vous@exemple.com"
            error={errors.email} // On passe l'objet erreur s'il existe
            {...register('email')} // On enregistre le champ
          />

          <Input
            label="Mot de passe"
            type="password"
            placeholder="••••••••"
            error={errors.password}
            {...register('password')}
          />

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 
                ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}
              `}
            >
              {isSubmitting ? 'Connexion en cours...' : 'Se connecter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;