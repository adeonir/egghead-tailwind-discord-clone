import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { DiscordIcon } from 'components/DiscordIcon'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const router = useRouter()

  return (
    <div className="flex h-screen text-gray-100">
      <div className="p-r-6 space-y-3 overflow-y-auto bg-gray-900 p-3 scrollbar scrollbar-none">
        <Link href="/">
          <a
            className={`${
              router.pathname === '/'
                ? 'cursor-default rounded-2xl bg-brand text-white'
                : 'rounded-3xl bg-gray-700 font-medium text-gray-100 hover:rounded-2xl hover:bg-brand hover:text-white '
            } flex h-12 w-12 items-center justify-center transition-all duration-300`}
          >
            <DiscordIcon className="h-5 w-7" />
          </a>
        </Link>
        <Link href="/servers/1">
          <a
            className={`flex h-12 w-12 items-center justify-center rounded-3xl bg-gray-700 font-medium text-gray-100 transition-all duration-300 hover:rounded-2xl hover:bg-brand hover:text-white`}
          >
            S1
          </a>
        </Link>
      </div>
      {children}
    </div>
  )
}
