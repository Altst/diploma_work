import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const MarketingPage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover blur-sm brightness-50"
          src="/background-image.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-35"></div>
      </div>

      <main className="absolute inset-0 flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-6xl font-bold mb-5">
            Дніпровський технологічний університет ШАГ
          </h1>
          <div className="flex justify-center mb-5">
            <Image
              src="/logo.png"
              alt="logo"
              className="text-center"
              height={350}
              width={350}
            ></Image>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold mb-5">
            Студентська рада
          </h1>
          {/* <p className="text-lg md:text-3xl mb-5 text-[#22324C] bg-white rounded-md px-2 py-1 mx-5">
            Додаток для організування студентської ради ДТУ ШАГ StudTask
          </p> */}
          <Button
            className="bg-[#1BD2C7] text-lg md:text-3xl uppercase hover:bg-[#22324C] mt-5"
            size="lg"
            asChild
          >
            <Link href="/sign-in">увійти</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default MarketingPage;
