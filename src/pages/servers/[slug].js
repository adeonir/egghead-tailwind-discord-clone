import { useRouter } from 'next/router'

import { CheckIcon, ChevronIcon, VerifiedIcon } from 'components/Icons'

export default function Server() {
  const router = useRouter()

  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <button className="transition-200 flex h-12 items-center px-4 font-title text-[15px] text-white shadow-sm hover:bg-gray-550/[.16]">
          <div className="relative mr-1 h-4 w-4">
            <VerifiedIcon className="absolute h-4 w-4 text-gray-550" />
            <CheckIcon className="absolute h-4 w-4 text-white" />
          </div>
          {router.query.slug}
          <ChevronIcon className="ml-auto h-[18px] w-[18px] opacity-80" />
        </button>
        <div className="flex-1 space-y-3 overflow-y-auto p-3 font-medium text-gray-300 scrollbar scrollbar-thin scrollbar-thumb-gray-900">
          <p className="text-white">General</p>
          {[...Array(40)].map((_, index) => (
            <p key={index}>Channel {index + 1}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-gray-700">
        <div className="flex h-12 items-center px-3 shadow-sm">General</div>
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
