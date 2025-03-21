import { HeartIcon } from "@heroicons/react/24/solid"

function Footer() {
  return (
    <footer className="mt-6 bg-white flex items-center justify-center space-x-1 text-xs font-medium text-gray-400">
      <p>Made with</p>
      <HeartIcon className="size-6 text-red-400" />
      <p>by <a href="https://github.com/teraprath" target="_blank" className="underline">teraprath</a></p>
    </footer>
  )
}

export default Footer
