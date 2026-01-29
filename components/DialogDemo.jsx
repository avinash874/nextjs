// by using shadcn ui dialog component

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";

const DialogDemo = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-amber-700 text-black p-5" >
                    Open
                </button>
            </DialogTrigger>
            <DialogContent className="bg-amber-50 text-black p-5" >
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button className="bg-black text-amber-50">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DialogDemo;