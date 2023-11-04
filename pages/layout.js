import React from 'react';
import "/styles/global.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content='Itekton...... A smart platform for enterprise fleet solution.' />
        <title>Itekton</title>
        <link rel="icon" type="image/svg+xml" href="images/favico.png" />
      </head>
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
