import Link from 'next/link'
import { useRouter } from 'next/router'

import type { Channel } from 'layouts/Channels'

import * as Icons from 'components/Icons'

type Props = {
  channel: Channel
}

export const ChannelLink = ({ channel }: Props) => {
  const router = useRouter()
  const { sid, cid } = router.query

  const active = Number(channel.id) === Number(cid)

  const state = active
    ? 'active'
    : channel.unread
    ? 'inactiveUnread'
    : 'inactiveRead'
  const classes = {
    active: 'text-white bg-gray-550/[0.32]',
    inactiveUnread:
      'text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]',
    inactiveRead:
      'text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]',
  }

  const Icon = channel.icon
    ? Icons[channel.icon as keyof typeof Icons]
    : Icons.Hashtag

  return (
    <Link href={`/servers/${sid}/channels/${channel.id}`}>
      <a
        className={`${classes[state]} group relative mx-2 flex items-center rounded px-2 py-1`}
      >
        {state === 'inactiveUnread' && (
          <div className="absolute left-0 -ml-2 h-2 w-1 rounded-r-full bg-white" />
        )}
        <Icon className="mr-1.5 h-5 w-5 pt-px text-gray-400" />
        {channel.label}
        <Icons.AddPerson className="ml-auto h-4 w-4 text-gray-200 opacity-0 transition group-hover:opacity-100 hover:text-gray-100" />
      </a>
    </Link>
  )
}
