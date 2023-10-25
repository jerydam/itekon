import "/styles/global.css";
export const metadata = {
  title: 'Itekton',
  description: 'Itekton...... A smart platform for enterprise fleet solution.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="images/favico.png" />
      <body>
        
        {children}
        </body>
    </html>
  )
}
