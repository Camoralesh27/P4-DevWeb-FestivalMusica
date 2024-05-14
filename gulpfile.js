import {src, dest, watch} from 'gulp'
import * as dartSass from 'sass' /* el * significa todo de sass */
import gulpSass from 'gulp-sass'    /* extrae las dependencias de gulp-sass en este archivo */

const sass = gulpSass(dartSass) /* enves de encontrar sass en nodemodules la encuentra aquí */

export function css( done ){
    src('src/scss/app.scss') /* esta tomando el src del import de gulp */
        .pipe( sass().on('error', sass.logError) ) /* ubica src, luego ejecuta sass */
        /* on esta verificando si hay errore, en tal caso los manda a consola el error*/
        .pipe( dest('build/css')) /* luego lo compilado lo almacena en build css */

    done();
}

export function dev() {
    watch('src/scss/**/*.scss', css) /* observa lo que sucede en el primer parametro, y lo actualiza ejecutando function css */
    /*  ** todos los archivos */



}
