import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import apiClient from '@Config/axios';
import Input from '@Forms/Input';

// 1. Schéma de validation étendu
const signUpSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Format d'email invalide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit faire au moins 6 caractères"),
  confirmPassword: z
    .string()
    .min(1, "La confirmation est requise"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
  });

  const onSubmit = async (data) => {
    try {
      // L'API attend : { email, password, name }
      const { confirmPassword, ...apiPayload } = data;

      console.log(confirmPassword.slice(-4)); // Juste pour montrer qu'on a accès à la valeur

      // Appel API

      await apiClient.post('/users/sign-up', apiPayload);

      // Succès : Redirection vers le login
      navigate('/signin');

    } catch (error) {
      console.error("Erreur d'inscription", error);

      // Gestion des erreurs API (ex: Email déjà utilisé)
      if (error.response && error.response.data) {
        setError('root', {
          type: 'server',
          message: error.response.data.message || "Impossible de créer le compte."
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
            Créer un compte
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Déjà inscrit ? <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-500">Se connecter</Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>

          {/* Erreur globale (ex: email déjà pris) */}
          {errors.root && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-sm text-red-700">{errors.root.message}</p>
            </div>
          )}

          <Input
            label="Nom complet"
            type="text"
            placeholder="Jean Dupont"
            error={errors.name}
            {...register('name')}
          />

          <Input
            label="Adresse Email"
            type="email"
            placeholder="vous@exemple.com"
            error={errors.email}
            {...register('email')}
          />

          <Input
            label="Mot de passe"
            type="password"
            placeholder="••••••••"
            error={errors.password}
            {...register('password')}
          />

          <Input
            label="Confirmer le mot de passe"
            type="password"
            placeholder="••••••••"
            error={errors.confirmPassword}
            {...register('confirmPassword')}
          />

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 
                ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}
              `}
            >
              {isSubmitting ? 'Inscription...' : "S'inscrire"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;