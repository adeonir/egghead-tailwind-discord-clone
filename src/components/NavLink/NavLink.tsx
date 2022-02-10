import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  children: ReactNode
  href: string
  active?: boolean
}

export const NavLink = ({ children, href, active }: Props) => {
  const router = useRouter()

  active ||= router.asPath === href

  return (
    <Link href={href}>
      <a className="group relative block">
        <div className="absolute -left-3 flex h-full items-center">
          <div
            className={`${
              active
                ? 'h-10'
                : 'h-5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
            } w-1 origin-left rounded-r bg-white transition-all duration-300`}
          />
        </div>

        <div className="group-active:translate-y-px">
          <div
            className={`${
              active
                ? 'cursor-default rounded-2xl bg-brand text-white'
                : 'rounded-3xl bg-gray-700 font-medium text-gray-100 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white '
            } flex h-12 w-12 items-center justify-center overflow-hidden transition-all duration-300`}
          >
            {children}
          </div>
        </div>
      </a>
    </Link>
  )
}
