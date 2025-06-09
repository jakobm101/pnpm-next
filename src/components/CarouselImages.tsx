import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const fooArr: number[] = [1,2,3]

export default function CarouselImages() {
  return (
    <Carousel>
      <CarouselContent>
      {fooArr.map(item => <CarouselItem>{item}</CarouselItem>)}
        <CarouselItem>...
        </CarouselItem>
      </CarouselContent>
      <CarouselNext/>
      <CarouselPrevious/>
    </Carousel>
  );
}
