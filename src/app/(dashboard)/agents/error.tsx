"use client";

import { ErrorState } from "@/components/error-state";

const ErrorPage = () => {
    return ( 
        <ErrorState
            title="Something went wrong"
            description="There was an error loading this page, please try again."
        />
    );
};
 
export default ErrorPage;

