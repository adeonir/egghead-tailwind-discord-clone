import { DiscordIcon } from 'components/DiscordIcon'

export default function Home() {
  return (
    <div className="flex h-screen text-gray-100">
      <div className="p-r-6 space-y-3 overflow-y-auto bg-gray-900 p-3 scrollbar scrollbar-none">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 font-medium text-gray-100 transition duration-300 hover:bg-brand hover:text-white">
          <DiscordIcon className="h-5 w-7" />
        </div>
        {/* {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-medium text-gray-800"
          >
            {index + 1}
          </div>
        ))} */}
      </div>
      <div className="flex w-60 flex-col bg-gray-800">
        <div className="flex h-12 items-center border-b border-gray-800 px-3 font-title text-white shadow-md">
          Tailwind CSS
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-3 font-medium text-gray-300 scrollbar scrollbar-thin scrollbar-thumb-gray-900">
          <p className="text-white">Channel (unread)</p>
          {[...Array(40)].map((_, index) => (
            <p key={index}>Channel {index + 1}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-gray-700">
        <div className="flex h-12 items-center border-b border-gray-800 px-3 shadow-md">
          General
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto p-3 scrollbar scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-900">
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
    </div>
  )
}
