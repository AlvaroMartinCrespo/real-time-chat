# Aplicación de Chat en Tiempo Real con React, Tailwind y Supabase

<div align="center"> 
 <img src="./public/img/logo.svg" width="400" height="400" alt="image-logo">
</div>


Esta es una aplicación de chat en tiempo real desarrollada con React, utilizando Tailwind CSS para estilizar la interfaz y Supabase como la base de datos en tiempo real.

## Características

- Chat en tiempo real: Los mensajes se muestran y actualizan en tiempo real sin necesidad de recargar la página.
- Autenticación con correo electrónico: Los usuarios pueden registrarse y acceder a la aplicación utilizando su dirección de correo electrónico.
- Interfaz moderna y responsive: La aplicación está diseñada para funcionar sin problemas en dispositivos de diferentes tamaños y resoluciones.

## Tecnologías Utilizadas

- React
- Tailwind CSS
- Supabase

## Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalado Node.js y npm (Node Package Manager) en tu máquina.

## Instrucciones de Instalación

1. Clona este repositorio en tu máquina local:
 ```bash
  git clone https://github.com/AlvaroMartinCrespo/real-time-chat.git
  cd real-time-chat
  ```

2. Instala las dependencias del proyecto:
  ```bash
  npm install
  ```
3. Configura Supabase:
   
- Registra una cuenta gratuita en Supabase si aún no tienes una.
- Crea un nuevo proyecto en Supabase y obtén las credenciales de acceso (URL y clave del proyecto).
- Copia y renombra el archivo .env.example a .env en el directorio raíz del proyecto.
- Reemplaza SUPABASE_URL y SUPABASE_KEY en el archivo .env con las credenciales de tu proyecto de Supabase.

4. Inicia la aplicación:
     
  ```bash
  npm start
  ```

## Como usar la aplicación
- Abre tu navegador web e ingresa al localhost que he haya asignado.
- Regístrate con tu nombre.
- Una vez registrado, serás redirigido automáticamente a la página de chat.
- En la página de chat, verás la lista de mensajes existentes y podrás enviar nuevos mensajes en tiempo real.

## Contribuciones
Las contribuciones son bienvenidas y agradecidas. Si encuentras errores, problemas o deseas agregar nuevas     características, no dudes en abrir un pull request.

## Contacto
Si tienes alguna pregunta o comentario, puedes contactarme a través de mi correo electrónico: alvaro.martin.crespo.00@gmail.com
