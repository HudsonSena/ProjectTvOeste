import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LucideMenu } from "lucide-react";
import { ModeToggle } from "./modeToggle";

export function Header() {
    return (
        <header id="header" className="p-5 sm:p-0 sm:w-[80%] h-28 border m-auto flex items-center justify-between relative">
            <div className="m-auto">
                <h1 className="font-bold text-xl">TV OESTE RN</h1>
                <p>Desde 2018</p>
            </div>
            <div className="absolute left-3">
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
            <div className="absolute right-3">
                <ModeToggle />
            </div>


        </header>
    )
}