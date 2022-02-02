import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import {
  createUniqueRandomGenerator,
  getRandomItem,
} from './createUniqueRandomGenerator'

const CUSTOMWORDS = [
  'bench',
  'curbs',
  'nacto',
  'cycle',
  'rider',
  'train',
  'nimby',
  'trees',
  'tolls',
  'buses',
  'bikes',
  'lanes',
  'roads',
  'pedal',
  'route',
]

let wordBag = createUniqueRandomGenerator(CUSTOMWORDS)

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (currentSolution: string, word: string) => {
  return currentSolution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  /*   const epochMs = 1641013200000
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
 */
  // have to get one of only 5 words (replace WORDS), use the generator trick
  //const index = Math.floor(Math.random() * WORDS.length)
  const { word, index } = getRandomItem(wordBag)

  return {
    //solution: WORDS[index].toUpperCase(),
    solution: word.toUpperCase(),
    solutionIndex: index,
  }
}

export const getNextSolution = () => {
  // January 1, 2022 Game Epoch
  /*   const epochMs = 1641013200000
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
 */
  // have to get one of only 5 words (replace WORDS), use the generator trick
  // const index = Math.floor(Math.random() * WORDS.length)
  const { word } = getRandomItem(wordBag)
  return word.toUpperCase()
}

export const { solution, solutionIndex } = getWordOfDay()
