import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        This is a just-for-fun hack of an open source clone of the game Wordle -{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          check out the (open-source clone) code here
        </a>{' '}
        and{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          play the original here
        </a>
      </p>
    </BaseModal>
  )
}
