import Fastify from 'fastify';

const app = Fastify()

app.get('/', () => {
    return 'Hello World'
})

app.listen({
    port: 3000,
}).then(() => {
    console.log('HTTP Server running!')
})