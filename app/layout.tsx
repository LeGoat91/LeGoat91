// app/layout.tsx
import React from 'react';
import './globals.css'; // Assurez-vous d'importer votre CSS global si nécessaire

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Intégration du chatbot Crisp */}
        <script
          src="https://client.crisp.chat/l.js"
          async
          data-crisp-client-id="bac81511-af46-48b9-9bd5-69ad05e3a984"
        ></script>
      </body>
    </html>
);
}
