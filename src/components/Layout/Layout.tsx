import Image from 'next/image'
import { ReactNode } from 'react'

import { DiscordIcon } from 'components/DiscordIcon'
import { NavLink } from 'components/NavLink'

type Props = {
  children: ReactNode
}

const servers = [
  { slug: 'tailwind', img: 'tailwind.png' },
  { slug: 'next', img: 'next.png' },
  { slug: 'mirage', img: 'mirage.png' },
]

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen text-gray-100">
      <div className="space-y-3 overflow-y-auto bg-gray-900 p-3 scrollbar scrollbar-none">
        <NavLink href="/">
          <DiscordIcon className="h-5 w-7" />
        </NavLink>

        <hr className="mx-2 rounded border-t-2 border-t-white/[.06]" />

        {servers.map((server) => (
          <NavLink href={`/servers/${server.slug}`} key={server.slug}>
            <Image
              src={`/servers/${server.slug}.png`}
              alt={`${server.img}`}
              width={48}
              height={48}
            />
          </NavLink>
        ))}
      </div>
      {children}
    </div>
  )
}
