import { Button } from "../components/ui/button";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>hello</h1>
      <Button> helo world</Button>
      <UserButton />
    </div>
  );
}
