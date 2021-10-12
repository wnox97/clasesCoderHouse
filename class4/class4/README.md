
# Curso de ReactJS - Clase 4

## Componentes I

En esta clase vamos a estudiar los tipos de componentes que existen, como usarlos y como implementarlos en nuestro proyecto de React.



## Tecnologias usadas en el proyecto

**Client:** React, TailwindCSS, Postcss, Eslint, Craco.

Si necesitan algún soporte para la instalación de estas tecnologías al final se adjuntara la documentación de cada una de ellas y cualquier duda pueden preguntar al docente sobre la configuración del proyecto para agilizar la instalación del mismo.
###

# Teoria de la clase

## Class Components

### Que son ?
React te permite definir componentes como clases o funciones. Los componentes definidos como clases actualmente proporcionan una serie de características extra que explicamos en esta página. Para definir una clase de componente React, necesitas extender

** React.Component: **


## Ejemplo

```javascript
import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```



## Functional Components

### Que son ?
Un componente funcional es una función que recibe el objeto Props y retorna un ReactNode (un ReactNode puede ser un elemento html, un string, un booleano, entre otros tipos de datos.).

Estas funciones solo reciben y retornan, por eso tienen que utilizar React Hooks (useState para el estado, useEffect para los ciclos de vida) para imitar las cualidades de un componente de clase.

## Ejemplo

```javascript
import React from 'react';

const Welcome = (props) => {
    return(
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    )
}

export default Welcome;
```

### Tambien se pueden declarar de la siguiente forma


```javascript
import React from 'react';

export default function Welcome (props) {
    return(
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    )
}
```


```javascript
import React from 'react';

export default function Welcome ({name}) {
    return(
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}
```

### Componentes de presentacion 

Son aquellos que simplemente se limitan a mostrar datos y tienen poca o nula lógica asociada a manipulación del estado (por eso son también llamados stateless components). Como por ejemplo un componente que muestre una carta de un producto con toda su información.

### Componentes Contenedores

Tienen como propósito encapsular a otros componentes y proporcionarles las propiedades que necesitan. Además se encargan de modificar el estado de la aplicación para que el usuario vea el cambio en los datos (por eso son también llamados state components). Esto quiere decir que son los que se encargaran de llamar los datos en nuestra Base de Datos en firebase de tal forma de renderizar todos los productos con el componente del ejemplo pasado



```javascript
import React from 'react';
import CardProduct from '../components/CardProduct' // Ejemplo, este archivo no esta dentro del proyecto

export default function ListProducts() {
  
  // esto serian los productos en nuestra base de datos
  
  const products = [
  {
    title: "nombre del producto"
  }, 
  {
    title: "nombre del producto 2"
  }
  ]
  
    return(
        <div>
            {/* La forma en la que se recorre el array y hacer el render del componente CardProduct */}
            {products?.map((product) => (
             <CardProducto title={product?.title} />
            ))}
        </div>
    )
}
```

## Documentacion de las tecnologias usadas

 - [ReactJS](https://es.reactjs.org/)
 - [TailwindCSS](https://tailwindcss.com/)
 - [ESlint](https://eslint.org/)
 - [Prettier](https://prettier.io/)


## Autores

- [Wilmer Montilla](https://github.com/wnox97)



## Informacion sobre create-react-app
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
