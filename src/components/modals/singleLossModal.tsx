import { Dialog } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import { MiniGrid } from '../mini-grid/MiniGrid'
//import { shareStatus } from '../../lib/share'
import { BaseModal } from './BaseModal'
//import { useContext } from 'react'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  handleLoadNext: () => void
  solution: string
}

export const SingleLossModal = ({
  solution,
  isOpen,
  handleClose,
  guesses,
  handleLoadNext,
}: Props) => {
  //const { nextPuzzle } = useContext(matchContext)
  return (
    <BaseModal title="You Lost!" isOpen={isOpen} handleClose={handleClose}>
      <div>
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title
            as="h3"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            Too bad!
          </Dialog.Title>
          <div className="mt-2">
            <MiniGrid guesses={guesses} solution={solution} />
            <p className="text-sm text-gray-500">Great try.</p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2 sm:text-sm"
          onClick={() => {
            handleLoadNext()
          }}
        >
          Load Next
        </button>
        {/*         <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          onClick={() => {
            //shareStatus(guesses)
          }}
        >
          Copy To Clipboard
        </button> */}
      </div>
    </BaseModal>
  )
}
