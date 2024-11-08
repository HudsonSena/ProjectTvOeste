import { CardEvent } from "@/app/_components/cardEvents";
import { CardNew } from "@/app/_components/cardNews";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Link from "next/link";

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
        <main className="px-5 py-10 lg:px-48">
            <section className="flex flex-col gap-2 mb-5">
                <div className="flex flex-row justify-between">
                    <h1 id="news" className="font-semibold">
                        Notícias
                    </h1>
                    <Link href={'/news'} className="text-primary">
                        Mais notícias...
                    </Link>
                </div>

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
                <div className="flex flex-row justify-between">
                    <h1 id="events" className="font-semibold">
                        Eventos
                    </h1>
                    <Link href={'/events'} className="text-primary">
                        Mais eventos...
                    </Link>
                </div>
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
    )
}