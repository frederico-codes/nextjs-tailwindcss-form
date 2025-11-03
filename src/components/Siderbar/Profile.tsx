import { LogOut } from "lucide-react";


export function Profile(){
  return(
    <div className="flex place-items-center gap-3 grid-cols-profile">
      <img className="h-10 w-10 rounded-full" src="https://github.com/diego3g.png" alt=""/>
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Frederico Nakajima
        </span>
        <span className="truncate text-sm text-zinc-500">fredericonakajimanakajima@gmail.com          
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-100">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}