import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideMenu } from "lucide-react";
import { ModeToggle } from "./modeToggle";

export function Header() {
  return (
    <header
      id="header"
      className="sm:p-0 lg:px-80 mx-auto flex flex-col items-center gap-2 justify-between shadow-sm border-b-2"
    >
      <div className="w-full hidden pt-5 lg:flex">
        <nav className="w-full flex flex-row justify-around text-primary">
          <a href="#news" className="hover:underline">
            Notíciais
          </a>
          <a href="#events" className="hover:underline">
            Eventos
          </a>
          <a href="#" className="hover:underline">
            Serviços
          </a>
          <a href="#" className="hover:underline">
            Contatos
          </a>
        </nav>
        <ModeToggle />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-between lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <LucideMenu className="h-[1.2rem] w-[1.2rem] transition-all text-primary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Notícias</DropdownMenuItem>
              <DropdownMenuItem>Eventos</DropdownMenuItem>
              <DropdownMenuItem>Serviços</DropdownMenuItem>
              <DropdownMenuItem>Contatos</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
        <div>
          <h1 className="font-extrabold text-8xl">
            TV <span className="text-primary">O</span>ESTE RN
          </h1>
          <div className="flex justify-end items-center gap-3">
            <p className="font-semibold text-primary ">Desde 2018</p>
          </div>
        </div>
      </div>
    </header>
  );
}
