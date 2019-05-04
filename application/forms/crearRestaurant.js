import t from 'tcomb-form-native';
import sliderTemplate from './components/slider';

export const Restaurant = t.struct({
    nombre: t.String,
    direccion: t.String,
    capacidad: t.Number,
    descripcion: t.String,
});
export const options = {
    fields:{
        nombre:{
            label: 'Nombre (*)',
            placeholder: 'Ejm: El Cebillano'
        },
        direccion:{
            label: 'Dirección (*)',
            placeholder: 'Ejm: Av. Luna Pizarro'
        },
        capacidad:{
            label:'Capacidad',
            help:'Capacidad en Personas',
            config:{
                step:1,
                min:1,
                max:200
            },
            template: sliderTemplate
        },
        descripcion:{
            label: 'Descripción (*)',
            placeholder: 'Ejm: Pescados y Mariscos',
            multiline: true
        }
    }
}
