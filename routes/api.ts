export default defineEventHandler(async () => {
  const res = await $fetch('/storage', { method: 'GET' })

  return res
})
