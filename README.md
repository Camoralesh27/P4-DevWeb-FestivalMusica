# Apuntes del proyecto.

## SASS cuando tienes un position.
position: fixed
bottom: 0;
top: 0;
left: 0;
right: 0;  

Esto se sustituye por 'inset' pero tienes que quitar height y width.
Se utilizó para posicionar el overlay de video. 

inset: 0;

## para repetir cuando son pares ó impares en los hijos. 

**impares**  
li:nth-child(odd) 
 
**pares**  
li:nth-child(even)

## Gulpfile series vs parallel.

en gulpfile puedes poner:
 - series -> inicializa una tarea, la termina, luego inicializa la otra, la termina y así sucesivamente. 
 - parallel -> inicializa todas las tareas juntas  


## Modal.

 El modal *puede ó no existir*, por lo tanto antes se hacía esto para remover el modal: 

```js
if(modal) {
    modal.remove();
 }
```

 ahora se sustituye por esto:

 ```js
 modal?.remove()
 ```

Lo que quiere decir es que *si existe 'modal', remuevelo*. 

## Retrasar la ejecución de una función.
Con esta función retrasas la ejecución del código por medio segundo. 1000 es un segundo. 

```js 

setTimeout(() => { 
        modal?.remove()
    }, 500);

```

## Utilizar lazy loading.

Al utilizar lazy loading requieres colocar un width y un height sino el buscador no lo compila el **lazy** loading
**eager** es el default, lo descarga en cuanto abres el navegador. 

``` html
 <img width='300' height="200" loading="lazy" src="src/img/imagen_dj.jpg" alt="Sobre Festival">
```
El lazy loading es importante al principio (antes que 'src') porque sino descarga primero la imagen antes de darle lazy

```js
        imagen.loading = 'lazy' //primero
        imagen.width = '300'
        imagen.height = '200'
        imagen.src = `src/img/gallery/thumb/${i}.jpg` //despues
        imagen.alt = 'Imagen Galería'
```

## Para mimificar el css. 
Solo agrega al pipe de gulpfile el outputStyle: 'compressed'

```js
.pipe( sass({outputStyle: 'compressed'}).on('error', sass.logError))
```