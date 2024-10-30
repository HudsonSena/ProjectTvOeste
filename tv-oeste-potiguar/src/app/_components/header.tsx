import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LucideMenu } from "lucide-react";
import { ModeToggle } from "./modeToggle";

export function Header() {
    return (
        <header id="header" className="py-5 sm:p-0 lg:px-80 mx-auto flex flex-col items-center gap-2 justify-between shadow-sm">
            <div className="w-full hidden pt-5 lg:flex">
                <nav className="w-full flex flex-row justify-around text-primary">
                    <a href="#" className="hover:underline" >Notíciais</a>
                    <a href="#" className="hover:underline" >Eventos</a>
                    <a href="#" className="hover:underline" >Serviços</a>
                    <a href="#" className="hover:underline" >Contatos</a>
                </nav>
            </div>
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="font-bold text-2xl lg:text-8xl">TV OESTE RN</h1>
                    <div className="flex justify-end items-center gap-3">
                        <p className="font-semibold text-primary ">Desde 2018</p>
                        <ModeToggle />
                    </div>
                </div>
                <div className="absolute left-3 lg:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <LucideMenu className="h-[1.2rem] w-[1.2rem] transition-all text-primary" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                Notícias
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Eventos
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Serviços
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Contatos
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}