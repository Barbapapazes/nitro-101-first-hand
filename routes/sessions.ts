export default defineEventHandler((event) => {
  const sessions = useSession(event, {
    name: 'nitro-101',
    password: '4554c7e0-0b1a-4b0a-9c0a-8b0b0b0b0b0b',
  })

  return sessions
})
