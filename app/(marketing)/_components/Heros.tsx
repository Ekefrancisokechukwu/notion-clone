import Image from "next/image";

const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" grid place-items-center">
        <div className="relative w-[300px] h-[200px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[600px]">
          <Image
            src={"/img/home-hero.webp"}
            className="object-cover h-auto w-full"
            priority
            alt="hero-img"
            width={2000}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};
export default Heros;
