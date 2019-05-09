import t from 'tcomb-form-native';
import sliderTemplate from './components/slider';

export const Comment = t.struct({
    rating: t.Number,
    comentario: t.maybe(t.String)
});

export const options = {
    fields:{
        rating:{
            label:'Puntuación',
            help:'¿Qué puntuación le das del 1 al 5?',
            config:{
                step:1,
                min:1,
                max:5
            },
            template:sliderTemplate
        },
        comentario:{
            label:'Comentario',
            placeholder: 'Deja un comentario...',
            multiline:true
        }
    }
}