import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export function DialogLogin() {
    return (
        <Dialog>
            <DialogTrigger>Login</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Acesso admin</DialogTitle>
                    <DialogDescription>
                        Puclicar e editar
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}