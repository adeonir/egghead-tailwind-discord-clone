import { ReactNode } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Discord } from 'components/Icons'
import { NavLink } from 'components/NavLink'

import { data } from 'data/data'

type Props = {
  children: ReactNode
}

export const Base = ({ children }: Props) => {
  const router = useRouter()
  const { sid } = router.query

  return (
    <div className="flex h-screen text-gray-100">
      <div className="hidden space-y-3 overflow-y-auto bg-gray-900 p-3 scrollbar scrollbar-none md:block">
        <NavLink href="/">
          <Discord className="h-5 w-7" />
        </NavLink>

        <hr className="mx-2 rounded border-t-2 border-t-white/[.06]" />

        {data.map((server) => (
          <NavLink
            key={server.id}
            href={`/servers/${server.id}/channels/${server.categories[0].channels[0].id}`}
            active={Number(sid) === Number(server.id)}
          >
            <Image
              src={`/servers/${server.img}`}
              alt={`${server.label}`}
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
