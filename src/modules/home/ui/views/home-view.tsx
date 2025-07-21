"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const HomeView = () => {
  const router = useRouter();
   const {data:session} = authClient.useSession();
   if(!session) {
    return (
      <p>Loading....</p>
    )
   }
   return (
      <div className="flex flex-col p-4 gap-y-4">
        <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
        <p className="mt-2">You are logged in as {session.user.email}.</p>
        <Button onClick={() => authClient.signOut({
          fetchOptions: {onSuccess: () => router.push("/sign-in")
          }
        })
        }>
          Sign Out
        </Button>
      </div>
    )
  }