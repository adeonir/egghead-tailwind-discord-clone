import type { Message } from 'layouts/Channels'

type Props = {
  message: Message
}

export const MessagesWithUser = ({ message }: Props) => {
  return (
    <div className="hover:bg-gray-950/[.07] mt-[17px] flex py-0.5 pl-4 pr-16 leading-[22px]">
      <img
        className="mr-4 mt-0.5 flex h-10 w-10 shrink-0 rounded-full"
        src={message.avatar}
        alt=""
      />
      <div>
        <p className="flex items-baseline">
          <span className="mr-2 font-medium text-green-400">
            {message.username}
          </span>
          <span className="text-xs font-medium text-gray-400">
            {message.date}
          </span>
        </p>
        <p className="text-gray-100">{message.text}</p>
      </div>
    </div>
  )
}
