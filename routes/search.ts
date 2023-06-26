export default defineEventHandler((event) => {
  const { q } = getQuery(event)

  return `Search: ${q}!`
})
