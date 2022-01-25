export const getList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const list = ['hello vue3', 'hello typescript']
      resolve(list)
    }, 2000);
  })
}