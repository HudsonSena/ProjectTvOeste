import { Header } from "./_components/header";
import { CardNew } from "./_components/cardNews";
import { Footer } from "./_components/footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CardEvent } from "./_components/cardEvents";

export default function Home() {
  const news = [
    "Noticia 1",
    "Noticia 2",
    "Noticia 3",
    "Noticia 4",
    "Noticia 5",
  ];
  const events = ["Evento 1", "Evento 2", "Evento 3", "Evento 4", "Evento 5"];

  return (
    <div className="p-5">
      <Header />
      <main className="py-10">
        <section className="flex flex-col gap-2 mb-5">
          <h2 id="news" className="font-semibold">
            Notícias
          </h2>
          <Carousel>
            <CarouselContent className="-ml-1 flex gap-3 p-3">
              {news.map((item) => (
                <CarouselItem
                  key={item}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <CardNew name={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
        <section className="flex flex-col gap-2 mb-5">
          <h2 id="events" className="font-semibold">
            Eventos
          </h2>
          <Carousel>
            <CarouselContent className="-ml-1 flex gap-3 p-3">
              {events.map((item) => (
                <CarouselItem
                  key={item}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <CardEvent name={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </main>
      <Footer />
    </div>
  );
}
