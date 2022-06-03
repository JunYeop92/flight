const getRandomColorName = () => {
  const colorScale = ['green', 'orange', 'yellow', 'teal', 'indigo', 'purple']
  const randomKey = Math.floor(Math.random() * colorScale.length)
  return colorScale[randomKey]
}

export default getRandomColorName
