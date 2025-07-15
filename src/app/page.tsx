"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {

   const {data: session} = authClient.useSession() 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const onSubmit = () => {
    authClient.signUp.email({
      name,
      email,
      password,
    },{
      onError: () => {
        window.alert("Somthing went wrong, please try again.");
      },
      onSuccess: () => {
        window.alert("User created successfully!");
      }
    });
  }

   const onLogin = () => {
    authClient.signIn.email({
      email,
      password,
    },{
      onError: () => {
        window.alert("Somthing went wrong, please try again.");
      },
      onSuccess: () => {
        window.alert("User created successfully!");
      }
    });
  }

  if(session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
        <p className="mt-2">You are logged in as {session.user.email}.</p>
        <Button onClick={() => authClient.signOut()}>
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-10">
    <div className="p-4 flex flex-col gap-y-4">
      <Input placeholder="Name" 
      value={name}
      onChange={(e) => setName(e.target.value)} 
      />
      <Input placeholder="Email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
      />
      <Input placeholder="Password" 
      type="password" 
      value={password} 
      onChange={(e) => setPassword(e.target.value)} 
      />
      <Button onClick={onSubmit}>
        Create User
      </Button>
    </div>

     <div className="p-4 flex flex-col gap-y-4">

      <Input placeholder="Email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
      />
      <Input placeholder="Password" 
      type="password" 
      value={password} 
      onChange={(e) => setPassword(e.target.value)} 
      />
      <Button onClick={onLogin}>
        Login User
      </Button>
    </div>
   </div>
  );
};
