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
      <div className="space-y-3 overflow-y-auto bg-gray-900 p-3 scrollbar scrollbar-none">
        <Link href="/">
          <a className="group relative block">
            <div className="absolute -left-3 flex h-full items-center">
              <div
                className={`${
                  router.pathname === '/'
                    ? 'h-10'
                    : 'h-5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                } w-1 origin-left rounded-r bg-white transition-all duration-300`}
              />
            </div>

            <div
              className={`${
                router.pathname !== '/' && 'group-active:translate-y-px'
              }`}
            >
              <div
                className={`${
                  router.pathname === '/'
                    ? 'cursor-default rounded-2xl bg-brand text-white'
                    : 'rounded-3xl bg-gray-700 font-medium text-gray-100 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white '
                } flex h-12 w-12 items-center justify-center transition-all duration-300`}
              >
                <DiscordIcon className="h-5 w-7" />
              </div>
            </div>
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
