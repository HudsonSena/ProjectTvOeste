import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogLogin() {
    return (
        <Dialog>
            <DialogTrigger>Login</DialogTrigger>
            <DialogContent className="w-80">
                <DialogHeader>
                    <DialogTitle>Login Administrativo</DialogTitle>
                    <DialogDescription>
                        Puclicações e edições
                    </DialogDescription>
                </DialogHeader>
                <form className="flex flex-col gap-2">
                    <Label htmlFor="inputUser">Usuário</Label>
                    <Input id="inputUser" type="text" />
                    <Label htmlFor="inputPassword">Senha</Label>
                    <Input id="inputPassword" type="password" />
                    <Button type="submit">Entrar</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}