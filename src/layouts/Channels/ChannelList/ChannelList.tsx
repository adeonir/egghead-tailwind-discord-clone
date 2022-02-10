import { useState } from 'react'

import { ChannelLink } from 'components/ChannelLink'
import * as Icons from 'components/Icons'

import type { Category, Channel } from 'layouts/Channels'
import type { Server } from '../'

type Props = {
  server: Server
}

export const ChannelList = ({ server }: Props) => {
  const [closedCategories, setClosedCategories] = useState<string[]>([])

  console.log(server)

  const toggleCategory = (categoryId: string) => {
    setClosedCategories((closedCategories) =>
      closedCategories.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...closedCategories, categoryId]
    )
  }

  return (
    <div className="flex-1 space-y-[21px] overflow-y-auto pt-3 font-medium text-gray-300 scrollbar scrollbar-thin scrollbar-thumb-gray-900">
      {server?.categories.map((category: Category) => (
        <div key={category.id}>
          {category.label && (
            <button
              onClick={() => toggleCategory(category.id)}
              className="flex w-full items-center px-0.5 font-title text-xs uppercase tracking-wide hover:text-gray-100"
            >
              <Icons.Arrow
                className={`${
                  closedCategories.includes(category.id) ? '-rotate-90' : ''
                } mr-0.5 h-3 w-3 transition duration-200`}
              />
              {category.label}
            </button>
          )}

          <div className="mt-[5px] space-y-0.5">
            {category.channels
              .filter(
                (channel) =>
                  !closedCategories.includes(category.id) || channel.unread
              )
              .map((channel: Channel) => (
                <ChannelLink channel={channel} key={channel.id} />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
