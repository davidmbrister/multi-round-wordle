export function* createUniqueRandomGenerator(array) {
  const available = array

  while (available.length !== 0) {
    const index = Math.floor(Math.random() * available.length)
    const word = available[index]
    // Remove the used word from the list of available values
    available.splice(index, 1)

    yield { word, index }
  }
}

export function getRandomItem(itemBag) {
  let { word, index } = itemBag.next().value
  console.log(`random item: ${word}`)
  return { word, index }
}
