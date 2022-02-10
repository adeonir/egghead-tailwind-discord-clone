import Image from 'next/image'
import { ReactNode } from 'react'

import { Discord } from 'components/Icons'
import { NavLink } from 'components/NavLink'
import { useRouter } from 'next/router'

type Props = {
  children: ReactNode
}

const servers = [
  { id: 1, slug: 'tailwind', img: 'tailwind.png' },
  { id: 2, slug: 'next', img: 'next.png' },
  { id: 3, slug: 'mirage', img: 'mirage.png' },
]

export const Base = ({ children }: Props) => {
  const router = useRouter()
  const { sid } = router.query

  return (
    <div className="flex h-screen text-gray-100">
      <div className="space-y-3 overflow-y-auto bg-gray-900 p-3 scrollbar scrollbar-none">
        <NavLink href="/">
          <Discord className="h-5 w-7" />
        </NavLink>

        <hr className="mx-2 rounded border-t-2 border-t-white/[.06]" />

        {servers.map((server) => (
          <NavLink
            key={server.id}
            href={`/servers/${server.id}/channels/1`}
            active={Number(sid) === Number(server.id)}
          >
            <Image
              src={`/servers/${server.img}`}
              alt={`${server.slug}`}
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
