<template lang="pug">
  #app
    img(src='./images/imagen.jpg' class="imagen")
    br
    br
    h1 Perfil
    br
    h5 Excelentes relaciones interpersonales, habilidad para trabajar en equipo y asumir responsabilidades, honesto, comprometido con el trabajo, con gran habilidad de aprendizaje, manejo avanzado de ingles, ciudadano americano.
    br
    br
    h1 Información Personal
    br
    table(class="table table-borderless table-sm")
      tr 
          td Nombre completo: 
          td Camilo Arango Ochoa
      tr  
          td Fecha de nacimiento:
          td 14-julio-1995
      tr  
          td Celular:
          td 3057964944
      tr  
          td Correo Electronico:
          td Camilo_ar95@outlook.com      
    br
    br      
    h1 Estudios
    br
    table(class="table table-borderless table-sm")
      tr
        td Bachillerato:
        td Institución Educativa de Envigado 
        td Graduado en 2011 
      tr
        td Universidad:
        td Politecnico Jaime Isaza Cadavid
        td Octavo semestre actualmente
      tr
        td 
    br
    br      
    h1 Experiencia Profesional    
    table(class="table2 table-borderless")
      h4 Deloitte
      tr
          td Cargo:
          td Asistente
      tr
        td Sector:
        td Servicios
      tr
        td Subsector:
        td Tecnología
      tr
        td Duración:
        td Actualmente    
      tr  
        td Funciones y logros:
        td 
          article Realizar trabajos de auditoría y consultoría para los clientes de la compañía tales como: Bancolombia, Grupo Corona, Grupo Orbis, EMI, Universidad EAFIT, CIPA, entre otros.     
      br
      h4 Emtelco
      tr
          td Cargo:
          td Despachador
      tr
        td Sector:
        td Servicios
      tr
        td Subsector:
        td Tecnología
      tr
        td Duración:
        td Ocho meses    
      tr  
        td Funciones y logros:
        td 
          article Proporcionar soporte técnico y ayudar al personal técnico en el campo en instalaciones o reparaciones para los usuarios del cliente de UNE EPM TELECOMMUNICATIONS.
      br
      h4 Accion Plus
      tr
          td Cargo:
          td Asesor soporte tecnico
      tr
        td Sector:
        td Servicios
      tr
        td Subsector:
        td Tecnología
      tr
        td Duración:
        td Ocho meses    
      tr  
        td Funciones y logros:
        td 
          article Asesorar y brindar soporte técnico a los usuarios asignados por el cliente de UNE EPM TELECOMMUNICATIONS, brindando una pronta solución a los problemas ocasionados en los servicios a domicilio.
    br
    br
    h1 Conocimientos
    br
    h5 Desarrollo web con (HTML5, CSS3, Bootstrap, Saas, Stylus, Less)
    h5 Responsive Design
    h5 JavaScript Avanzado con (MaterializeCSS, Sass, Babel, Gulp, Webpack, Browserify)
    h5 Angular 4
    h5 React con redux
    h5 Git y GitHub
    h5 Manejo de APIs
    br
    br
    h1 Cursos realizados
    br
    ul 
      li(v-for="curso in cursos") {{curso.name}} 
        img(:src="curso.imagen")  
    
      
  </div>
</template>

<script>
//import Cursos from "./components/Curso.vue"
//import Spinner from './components/spinner.vue'
import getCursos from "./api"

export default {
  name: 'app',
  data () {
    return {
      cursos: [{id:"1",name:"Desarrollo Online",plataforma:"Platzi",imagen:"./dist/DesarrolloOnline.jpg"},
               {id:"2",name:"Git y GitHub",plataforma:"Platzi",imagen:"./dist/Git.jpg"},
               {id:"3",name:"Java",plataforma:"Platzi",imagen:"./dist/Java.png"},
               {id:"4",name:"JavaScript",plataforma:"Platzi",imagen:"./dist/JavaScript.jpg"},
               {id:"5",name:"Programación",plataforma:"Platzi",imagen:"./dist/programacion.jpg"},
               {id:"6",name:"Responsive Design",plataforma:"Platzi",imagen:"./dist/ResponsiveDesign.jpg"},
               {id:"7",name:"Curso basico Vue.js", plataforma:"Platzi", imagen:"./dist/Vue.jpg"}],
      loading: true
    }
  }
}
</script>

<style>
html{
  width: 800px;
    margin: auto;
    position: relative;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

ul li img{
  display: block;
  width: 230px;
  border: 1px solid black;
}

#app img{
  margin-bottom: 30px;

}

.imagen{
  border-radius: 50%;
  width: 200px;
  height: 220px;
}

table{
  width: 100%;
  text-align: left;
}

</style>
