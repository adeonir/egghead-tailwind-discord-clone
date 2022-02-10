import Link from 'next/link'
import { useRouter } from 'next/router'

import * as Icons from 'components/Icons'

type Props = {
  channel: {
    id: number
    label: string
    icon?: string
  }
}

export const ChannelLink = ({ channel }: Props) => {
  const router = useRouter()
  const { sid, cid } = router.query
  const active = Number(channel.id) === Number(cid)

  const Icon = channel.icon
    ? Icons[channel.icon as keyof typeof Icons]
    : Icons.Hashtag

  return (
    <Link href={`/servers/${sid}/channels/${channel.id}`}>
      <a
        className={`${
          active
            ? 'bg-gray-550/[0.32] text-white'
            : 'text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100'
        } group mx-2 flex items-center rounded px-2 py-1`}
      >
        <Icon className="mr-1.5 h-5 w-5 pt-px text-gray-400" />
        {channel.label}
        <Icons.AddPerson className="ml-auto h-4 w-4 text-gray-200 opacity-0 transition group-hover:opacity-100 hover:text-gray-100" />
      </a>
    </Link>
  )
}
