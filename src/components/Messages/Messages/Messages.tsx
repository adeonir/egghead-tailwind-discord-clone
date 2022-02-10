import { Message } from 'layouts/Channels'

type Props = {
  message: Message
}

export const Messages = ({ message }: Props) => {
  return (
    <div className="hover:bg-gray-950/[.07] py-0.5 pl-4 pr-16 leading-[22px]">
      <p className="pl-14 text-gray-100">{message.text}</p>
    </div>
  )
}
