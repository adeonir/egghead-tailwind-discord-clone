export default function Home() {
  return (
    <>
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
    </>
  )
}
