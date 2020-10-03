import image from './assets/image.png'

export const model = [
    {
        type: 'title', value: 'Site constructor Native-JS ', options: {
            tag: 'h2',
            style: {
                background: 'linear-gradient(to right, #ff0099, #493249)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center'
            }
        }
    },
    {
        type: 'image', value: image, options: {
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
        }
    },

    {
        type: 'columns', value: [
            'first row with text',
            'second row with text',
            'third row with text',
        ], options: {
            style: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    },
    {
        type: 'text', value: 'here we got text', options: {
            style: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }
    },
]