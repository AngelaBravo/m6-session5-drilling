<template>
    <button class="iDatos" @click="saludarNombreCompleto">Ingresar Datos</button>
    <div v-if="mostrarCuadrados">
        <div class="cuadrado">
            <h4> {{ mensajeSaludo }} </h4>
            <p>{{ parrafo }}</p>
            <button class="limpiar" @click="limpiarInfo">Limpiar Información</button>
        </div>
        <div class="cuadroAzul">
            <p>A continuación hay un listado con los nombres de las peliculas</p>
        </div>
        <ApiPeliculas/>
    </div>
</template>

<script>
import ApiPeliculas from './ApiPeliculas.vue';


export default {
    name: 'LosPrompt',
    components: {
        ApiPeliculas,
    },
    // props: {},
    data: function () {
        return {
            nombre: " ",
            apellido: " ",
            mensajeSaludo: " ",
            parrafo:" ",
            mostrarCuadrados:false,
        }
    },
    methods: {
        saludarNombreCompleto() {
            let flag = true;
            do {
                const nombreTmp = (prompt('Ingresa tu nombre...'));
                const apellidoTmp = (prompt('Ingresa tu apellido...'));
                    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
                    if ((regex.test(nombreTmp)) && (regex.test(apellidoTmp))) {
                        flag = false;
                        this.nombre = nombreTmp;
                        this.apellido = apellidoTmp;
                    } else {
                        alert('Solo letras...');
                    }
            } while (flag)
            this.mensajeSaludo = `Bienvenid@ ${this.nombre} ${this.apellido}.`;
            this.parrafo= `Aquí podrás encontrar información de peliculas de anime de Studio Ghibli`
            this.mostrarCuadrados=true;
        },
        limpiarInfo(){
            this.mensajeSaludo=" ";
            this.parrafo= " ";
            this.mostrarCuadrados=false;
        }
    }
    // watch: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>

.iDatos{
    background-color: rgb(98, 206, 98);
    color: white;
    border: none;
    margin: 15px;
    padding: 5px;
}

.cuadrado{
   height: 150px;
   width: 400px;
   box-shadow:1px 5px 5px 2px rgb(236, 130, 213);
   margin: 0 auto;
   margin-bottom: 3dvi;
}
    .cuadroAzul{
       height: 50px;
       width: 80%;
       margin: 0 auto;
       align-content: center;
       background-color: rgb(190, 243, 243);
       border-left: 4px solid rgb(5, 72, 134);
    }

</style>
