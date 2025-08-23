import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { AgentsView, AgentsViewError, AgentsViewLoading } from "@/modules/agents/ui/views/agents-view";
import { ErrorBoundary } from "react-error-boundary";
import { getQueryClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
// import { LoadingState } from "@/components/loading-state";


const Page = async() => {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense 
            fallback={<AgentsViewLoading/>}>
                <ErrorBoundary fallback={<AgentsViewError />}>
                    <AgentsView />
                </ErrorBoundary>
            </Suspense>
        </HydrationBoundary>

    );
};
 
export default Page;