export default defineEventHandler((event) => {
  const cookie = getCookie(event, 'hello')

  setCookie(event, 'from', 'nitro', {
    secure: true,
  })

  return cookie
})
