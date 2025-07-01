import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Asegúrate que es https
        hostname: 'readdy.ai',
        port: '', // Déjalo vacío si no hay un puerto específico
        pathname: '/api/search-image/**', // Si quieres ser más específico sobre las rutas
      },
      {
        protocol: 'https', // Asegúrate que es https
        hostname: 'randomuser.me',
        port: '', // Déjalo vacío si no hay un puerto específico
        pathname: '/api/portraits/**', // Si quieres ser más específico sobre las rutas
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
