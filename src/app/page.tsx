"use client"
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function Home() {
  const navigate = useRouter()
  return (
    <div>
      <h1>Hello World</h1>
      <Button onClick={() => navigate.push("/authentication")}>Click me</Button>
    </div>
  );
}
