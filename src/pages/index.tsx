export default function Home() {
  return (
    <div className="flex h-screen text-white">
      <div className="bg-gray-800 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-medium text-gray-800">
          TW
        </div>
      </div>
      <div className="flex w-60 flex-col bg-gray-700">
        <div className="p-4 shadow-md">Tailwind CSS</div>
        <div className="flex-1 p-4">Channels</div>
      </div>
      <div className="flex flex-1 flex-col bg-gray-600">
        <div className="p-4 shadow-md">General</div>
        <div className="flex-1 p-4">Messages</div>
      </div>
    </div>
  )
}
