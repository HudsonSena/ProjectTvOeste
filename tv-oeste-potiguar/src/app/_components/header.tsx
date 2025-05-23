import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideMenu } from "lucide-react";
import { ModeToggle } from "./modeToggle";
import Link from "next/link";
import { DialogLogin } from "./dialogLogin";

export function Header() {
  return (
    <header
      id="header"
      className="py-5 px-5 lg:px-48 mx-auto flex flex-col items-center gap-2 justify-between shadow-sm"
    >
      <div className="w-full hidden lg:flex">
        <nav className="w-full flex flex-row justify-around text-primary font-semibold">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/noticias" className="hover:underline">
            Notícias
          </Link>
          <Link href="/eventos" className="hover:underline">
            Eventos
          </Link>
          <Link href="#" className="hover:underline">
            Serviços
          </Link>
          <Link href="#" className="hover:underline">
            Contatos
          </Link>
          <DialogLogin />
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
              <DropdownMenuItem>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/noticias" className="hover:underline">
                  Notícias
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/eventos" className="hover:underline">
                  Eventos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem><Link href="/servicos" className="hover:underline">
                Serviços
              </Link></DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contatos" className="hover:underline">
                  Contatos
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogLogin />
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
