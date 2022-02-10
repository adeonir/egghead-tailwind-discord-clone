import { useRouter } from 'next/router'

import {
  AddPersonIcon,
  BookIcon,
  CheckIcon,
  ChevronIcon,
  SpeakerphoneIcon,
  VerifiedIcon,
} from 'components/Icons'

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
        <div className="mt-[17px] flex-1 overflow-y-auto font-medium text-gray-300 scrollbar scrollbar-thin scrollbar-thumb-gray-900">
          <div className="space-y-0.5">
            <a
              href="#"
              className="group mx-2 flex items-center rounded px-2 py-1 text-gray-300 transition hover:bg-gray-550/[.16] hover:text-gray-100"
            >
              <BookIcon className="mr-1.5 h-5 w-5 pt-px text-gray-400" />
              welcome
              <AddPersonIcon className="ml-auto h-4 w-4 text-gray-200 opacity-0 transition group-hover:opacity-100 hover:text-gray-100" />
            </a>
            <a
              href="#"
              className="group mx-2 flex items-center rounded px-2 py-1 text-gray-300 transition hover:bg-gray-550/[.16] hover:text-gray-100"
            >
              <SpeakerphoneIcon className="mr-1.5 h-5 w-5 pt-px text-gray-400" />
              anouncements
              <AddPersonIcon className="ml-auto h-4 w-4 text-gray-200 opacity-0 transition group-hover:opacity-100 hover:text-gray-100" />
            </a>
          </div>
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
