
## Iniciar


instalar un server (http-server) para servir los ficheros js que se encuentran en lib


###Publicar los ficheros

cd lib

http-server ./ --cors

Los ficheros que se encuentran en lib, se actualizan cada vez que se ejecuta npm run build
en los mfe-timer-webcomponent y mfe-timer-webcomponent-styled

  

El resultado es un esm, que exporta un HTMLElement, creado utilizando

  
```javascript

import createHTMLElement from "react-create-custom-element";

createHTMLElement(
	SomeReactComponent, // component
	{
		tagName: "timer-ce", // tag name for custom element, optional¡
		properties: ["timerName"], // properties
		customEvents: ["onUpdate"], // events
		shadowDOM: true,
		mode: "open", // 'open' || 'close'
	}
);

  

/* Esta función retorna un HTMLElement por lo que podemos recibir el HTMLElement y luego crear el custon element timer-ce, en este caso no es necesario pasar la prop tagName */

const htmlElement = createHTMLElement(
	SomeReactComponent, // component
	{
		properties: ["timerName"], // properties
		customEvents: ["onUpdate"], // events
		shadowDOM: true,
		mode: "open", // 'open' || 'close'
	}
);

// aquí creamos el custom element
window.customElements.define("timer-ce", htmlElement);
```
###Nota
En mfe-container importamos de forma dinámica el contenido de los js.