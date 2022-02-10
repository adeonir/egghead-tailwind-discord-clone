export default function Home() {
  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <div className="flex h-12 items-center border-b border-gray-800 px-3 font-title text-white shadow-md">
          Dashboard
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-3 font-medium text-gray-300 scrollbar scrollbar-thin scrollbar-thumb-gray-900">
          <p className="text-white">Friends</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-gray-700" />
    </>
  )
}
