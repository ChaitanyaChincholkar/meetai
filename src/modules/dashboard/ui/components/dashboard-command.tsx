import { Dispatch, SetStateAction } from "react";
import { CommandResponsiveDialog, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

interface Profs {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export const DashboardCommand = ({ open, setOpen }: Profs) => {
   return (
    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
        <CommandInput
        placeholder="Find the meeting and agents"
        />
        <CommandList>
            <CommandItem>
               Test 
            </CommandItem>
            <CommandItem>
               Test2
            </CommandItem>
        </CommandList>
    </CommandResponsiveDialog>
   )
};