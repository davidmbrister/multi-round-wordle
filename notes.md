## Make the app display a next modal instead of win until 5 wins are gotten

[x] game roughly plays 5 rounds, but the keyboard has to be in sync with the currentSolution

- copy/share function is of course broken

# make the app only provide 5 words at random, but never the same one in a row (almost there)

- because the browser just gets the words of the day by subtracting the time of January 1 from now to get an index that WILL NOT change until the next day, I have to completely replace that way of choosing a word.

  ### NEXT STEP:

  - pass the 5-word list into my old createUniqueRandomGenerator function to get a generator that I can call with getNextRandomWord(getRandomPiece)
