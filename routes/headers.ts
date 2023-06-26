export default defineEventHandler((event) => {
  const headers = getHeaders(event)

  setResponseHeader(event, 'X-Hello', 'Nitro')

  return headers
})
