export default defineEventHandler((event) => {
  console.log('log', event.node.req.url)
})
