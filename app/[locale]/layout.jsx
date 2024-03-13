import "@/styles/globals.css"
import Footer from "@/components/Footer/Footer"


export const metadata = {
    title: 'Paliare',
    description: 'Especializada en el campo del marketing digital, centrada en la estrategia de optimización de la presencia de nuestros clientes en Google Maps.',
    url: '',
    image: '/assets/images/logo.png',
}

const RootLayout = ({children}) => {
  return (
    <html lang="es">
        <head>
            <title>{metadata.title}</title>
            <link rel="icon" type="image/png+xml" href="/assets/images/favicon.png" />
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content={metadata.image} />
            <meta property="og:url" content={metadata.url} />
            <meta name="keywords" content="proyectos, propiedad inmobiliaria, Guatemala, "></meta>            
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