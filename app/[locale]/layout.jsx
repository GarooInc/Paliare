import "@/styles/globals.css"


export const metadata = {
    title: 'Paliare',
    url: '',
    image: '/assets/images/Paliare-black.png',
}

const RootLayout = ({children}) => {
  return (
    <html lang="es">
        <head>
            <title>{metadata.title}</title>
            <link rel="icon" type="image/png+xml" href="/assets/images/Favicon-Paliare.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:image" content={metadata.image} />
            <meta property="og:url" content={metadata.url} />
        </head>
        <body>
            <main className='app'>
                  {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout