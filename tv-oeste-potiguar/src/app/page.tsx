import { Button } from "@/components/ui/button";
import { Header } from "./_components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="text-primary">Hello World</h1>
      <Button className="font-semibold">Hudson Diego</Button>
    </div>
  );
}
