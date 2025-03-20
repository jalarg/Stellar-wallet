# Billetera Stellar

Esta es una aplicación de billetera Stellar construida con [Next.js](https://nextjs.org/). Permite a los usuarios crear una billetera y probar el proceso de intercambio de dinero utilizando la criptomoneda de la testnet de Stellar.

## Características

- **Creación de Billetera**: Crea fácilmente una nueva billetera para comenzar a usar la testnet de Stellar.
- **Intercambio de Criptomonedas**: Prueba el proceso de intercambio de criptomonedas de la testnet de Stellar.
- **Autenticación Segura**: Incluye componentes de autenticación para asegurar el acceso.
- **Diseño Responsivo**: Construido con un diseño responsivo para asegurar la usabilidad en diferentes dispositivos.

## Comenzando

Primero, se instalan dependencias y se ejecuta el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del Proyecto

- **Componentes**: Componentes reutilizables como Navbar, Footer y Payments se encuentran en el directorio `src/components`.
- **Páginas**: Las páginas principales de la aplicación están en el directorio `src/pages`, con páginas específicas de la billetera en `src/pages/wallet`.
- **Gestión de Estado Global**: Gestionado usando Redux, ubicado en el directorio `src/GlobalRedux`.
- **Estilos**: Todos los archivos de estilo se encuentran en el directorio `src/styles`.

## Despliegue

La aplicación está desplegada en Vercel y se puede acceder a través de [este enlace](https://rocket-stellar-wallet.vercel.app/wallet).

## Aprende Más

Para aprender más sobre Next.js, consulta los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

## Despliegue en Vercel

La forma más fácil de desplegar tu aplicación Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment) para más detalles.
