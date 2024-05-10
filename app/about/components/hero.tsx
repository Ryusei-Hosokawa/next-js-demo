import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="h-dvh flex font-bold items-center">
      <div className="container">
        <h1 className="font-bold text-4xl mb-5 lg:text-6xl">Hero</h1>
        <p className="text-muted-foreground mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ullam
          quidem odit repellendus ratione, nam quasi quo non aperiam tenetur. A
          ut corrupti eum voluptatibus cupiditate quas totam atque asperiores.
        </p>
        <Button className="p-10 pt-7 pb-7">
          お問い合わせ
        </Button>
      </div>
    </div>
  );
}
