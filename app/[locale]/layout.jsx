import "@/styles/globals.css"


export const metadata = {
    title: 'Paliare',
    description: 'Somos estudio de arquitectura e interiorismo. Generamos experiencias únicas a través de nuestros espacios y diseños.',
    url: '',
    image: '/assets/images/paliareblanco.png',
}

const RootLayout = ({children}) => {
  return (
    <html lang="es">
        <head>
            <title>{metadata.title}</title>
            <link rel="icon" type="image/png+xml" href="/assets/images/paliarenegro.png" />
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content={metadata.image} />
            <meta property="og:url" content={metadata.url} />
            <meta name="keywords" content="estudio, propiedad interiorismo, Guatemala, "></meta>            
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