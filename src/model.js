import image from './assets/image.png'
import {Block} from "./classes/blocks";

export const model = [
    new Block('title', 'Site constructor Native-JS', {
        tag: 'h2',
        style: {
            background: 'linear-gradient(to right, #ff0099, #493249)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new Block('image', image, {
        style: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new Block('columns', [
        'first row with text',
        'second row with text',
        'third row with text',
    ],{
        style: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new Block('text','here we got text',{
        style: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]