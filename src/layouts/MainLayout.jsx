import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "@Components/ui/Navbar";
import apiClient from '@Config/axios';

const MainLayout = () => {

  // Optionnel : état pour désactiver le bouton pendant la requête
  const [checking, setChecking] = useState(false);

  const APIHealthCheck = async () => {
    setChecking(true);
    try {
      // Si vous avez modifié le backend en '/api/status', apiClient fonctionne directement
      // apiClient ajoute déjà '/api' -> appel vers http://localhost:3000/api/status
      const response = await apiClient.get('/status');

      if (response.status === 200) {
        alert(`✅ API En ligne ! \nMessage: ${response.data.message}\nTimestamp: ${response.data.timestamp}`);
      }
    } catch (error) {
      console.error(error);
      // C'est ici qu'on attrape le fait que l'API soit "down"
      alert('L\'API est hors ligne ou inaccessible.');
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 My Application</p>
        <button onClick={APIHealthCheck}>API Health Check</button>
      </footer>
    </div>
  );
};

export default MainLayout;
