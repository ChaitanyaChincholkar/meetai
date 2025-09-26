import { ResponsiveDialog } from "@/components/responsive-dialog";

import { MeetingForm } from "./meeting-form";

import { MeetingGetOne } from "../../types";

interface NewMeetingDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    inititalValues: MeetingGetOne
};

export const UpdateMeetingDialog = ({ open, onOpenChange, inititalValues }: NewMeetingDialogProps) => {
  
    return (
        <ResponsiveDialog 
            title="Edit Meeting"
            description="Edit the meeting details"
            Open={open} 
            onOpenChange={onOpenChange}
        >
            <MeetingForm 
                onSuccess={() => onOpenChange(false)}
                onCancel={() => onOpenChange(false)}
                initialValues={inititalValues}
            />
        </ResponsiveDialog>
    );
};
