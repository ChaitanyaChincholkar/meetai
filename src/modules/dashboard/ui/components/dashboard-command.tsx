import { Dispatch, SetStateAction } from "react";
import { CommandDialog, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

interface Profs {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export const DashboardCommand = ({ open, setOpen }: Profs) => {
   return (
    <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
        placeholder="Find the meeting and agents"
        />
        <CommandList>
            <CommandItem>
               Test 
            </CommandItem>
        </CommandList>
    </CommandDialog>
   )
};