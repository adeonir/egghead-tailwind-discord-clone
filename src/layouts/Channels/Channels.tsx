import { useState } from 'react'
import { useRouter } from 'next/router'

import * as Icons from 'components/Icons'
import { ChannelLink } from 'components/ChannelLink'

export type Data = {
  data: {
    [key: string]: {
      label: string
      categories: Category[]
    }
  }
}

export type Category = {
  id: string
  label: string
  channels: Channel[]
}

export type Channel = {
  id: number
  label: string
  messages: string[]
  description?: string
  icon?: string
  unread?: string
}

export const Channels = ({ data }: Data) => {
  const router = useRouter()
  const server = data[`${router.query.sid}`]
  const channel = server.categories
    .map((c) => c.channels)
    .flat()
    .find((c) => Number(c.id) === Number(router.query.cid))

  const [closedCategories, setClosedCategories] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setClosedCategories((closedCategories) =>
      closedCategories.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...closedCategories, categoryId]
    )
  }

  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <button className="transition-200 flex h-12 items-center px-4 font-title text-[15px] text-white shadow-sm hover:bg-gray-550/[.16]">
          <div className="relative mr-1 h-4 w-4">
            <Icons.Verified className="absolute h-4 w-4 text-gray-550" />
            <Icons.Check className="absolute h-4 w-4 whitespace-nowrap text-white" />
          </div>
          {server.label}
          <Icons.Chevron className="ml-auto h-[18px] w-[18px] opacity-80" />
        </button>

        <div className="flex-1 space-y-[21px] overflow-y-auto pt-3 font-medium text-gray-300 scrollbar scrollbar-thin scrollbar-thumb-gray-900">
          {server.categories.map((category: Category) => (
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
      </div>

      <div className="flex min-w-0 flex-1 flex-shrink flex-col bg-gray-700">
        <div className="flex h-12 items-center px-3 shadow-sm">
          <div className="flex items-center">
            <Icons.Hashtag className="mx-2 h-6 w-6 font-semibold text-gray-400" />
            <span className="mr-2 font-title text-white">{channel?.label}</span>
          </div>

          {channel?.description && (
            <>
              <div className="mx-2 h-6 w-px bg-white/[.06]"></div>
              <div className="mx-2 truncate text-sm font-medium text-gray-200">
                {channel?.description}
              </div>
            </>
          )}

          <div className="ml-auto flex items-center">
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.HashtagWithSpeechBubble className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Bell className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Pin className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.People className="mx-2 h-6 w-6" />
            </button>

            <div className="relative mx-2">
              <input
                type="text"
                placeholder="Search"
                className="h-6 w-36 rounded border-none bg-gray-900 px-1.5 text-sm font-medium placeholder-gray-400"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Icons.Spyglass className="mr-1.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Inbox className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.QuestionCircle className="mx-2 h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-3 scrollbar scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-800">
          {[...Array(40)].map((_, index) => (
            <div key={index}>
              Message {index + 1} Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Maxime reiciendis soluta ratione sint
              necessitatibus harum perferendis quam pariatur accusamus ab
              cumque, hic atque ullam corporis suscipit, nesciunt provident
              numquam impedit.
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
