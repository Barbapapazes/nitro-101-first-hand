export default defineEventHandler(async () => {
  const file = await useStorage().getItem('root:package.json')

  return file
})
