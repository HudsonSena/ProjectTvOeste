import { Header } from "./_components/header";
import { CardNew } from "./_components/cardNews";
import { Footer } from "./_components/footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardEvent } from "./_components/cardEvents";

export default function Home() {
  return (
    <div className="p-5">
      <Header />
      <main className="py-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <CardNew />
              <CardEvent />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
      <Footer />
    </div>
  );
}
