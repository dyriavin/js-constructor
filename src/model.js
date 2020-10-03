import image from './assets/image.png'

export const model = [
    {
        type: 'title', value: 'Site constructor Native-JS ', options: {
            tag: 'h2',
            style : {
                background:'linear-gradient(to right, #ff0099, #493249)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center'
            }
        }
    },
    {type: 'text', value: 'here we got text'},
    {
        type: 'columns', value: [
            '1111',
            '2222',
            '3333',
        ]
    },
    {type: 'image', value: image}
]