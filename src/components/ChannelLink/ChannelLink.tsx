import * as Icons from 'components/Icons'

type Props = {
  channel: {
    id: number
    label: string
    icon?: string
  }
}

export const ChannelLink = ({ channel }: Props) => {
  const Icon = channel.icon
    ? Icons[channel.icon as keyof typeof Icons]
    : Icons.Hashtag

  return (
    <a
      href="#"
      className="group mx-2 flex items-center rounded px-2 py-1 text-gray-300 transition hover:bg-gray-550/[.16] hover:text-gray-100"
    >
      <Icon className="mr-1.5 h-5 w-5 pt-px text-gray-400" />
      {channel.label}
      <Icons.AddPerson className="ml-auto h-4 w-4 text-gray-200 opacity-0 transition group-hover:opacity-100 hover:text-gray-100" />
    </a>
  )
}
