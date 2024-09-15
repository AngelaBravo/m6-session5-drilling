<template>
    <h2>API de Peliculas</h2>
    <select v-model="peliculaSeleccionada" id="pelis">
        <option disabled value="">Selecciona una pelicula</option>
        <option v-for="pelicula in peliculas" :key="pelicula" :value="pelicula">
            {{ pelicula.title }}
        </option>
    </select>
    <div v-if="peliculaSeleccionada" class="poster">
        <img class="image" :src="peliculaSeleccionada.image" alt="" height="400px">
        <p class="original"><b>Título Original:</b>: {{ peliculaSeleccionada.original_title_romanised }}</p>
        <p class="ingles"><b>Titulo en Inglés:</b>{{ peliculaSeleccionada.title }}</p>
        <p class="descripcion"><b>Descripción:</b> {{ peliculaSeleccionada.description }}</p>
        <p class="director"><b>Director:</b> {{ peliculaSeleccionada.director }}</p>
        <p class="duracion"><b>Duración:</b> {{ peliculaSeleccionada.rt_score }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ApiPeliculas',
    // props: {},
    data() {
        return {
            peliculas: [],
            peliculaSeleccionada: '',
        }
    },
    mounted() {
        axios.get('https://ghibliapi.vercel.app/films')
            .then(nombreamipinta => {
                // console.log(nombreamipinta);
                // console.table(nombreamipinta.data); // Muestra la data en formato de tabla
                this.peliculas.push(...nombreamipinta.data)
            })
            // .catch(error => {
            //     console.error('Error al obtener los datos:', error);
            // });
    }
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.poster {
    box-sizing: border-box;
    padding: 2rem;
    /* height: 800px; */
    width: 500px;
    margin: 30px auto;
    box-shadow: 1px 5px 5px 2px rgb(236, 130, 213), -15px -15px 15px 20px white;
    text-align: center;

    .director {
        border: 1px solid rgb(253, 223, 223);
        padding: 5px;
        width: 80%;
        margin: 10px auto;
    }

    .duracion {
        border: 1px, solid rgb(253, 223, 223);
        border-top: none;
        padding: 5px;
        width: 80%;
        text-align: center;
        margin: 10px auto;
    }
    .image{
        margin-top: 20px;
    }
    .descripcion{
        text-wrap: pretty;
    }
}
</style>