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
          <div className="flex justify-center mb-5">
            <Image
              src="/logo.svg"
              alt="logo"
              className="text-center"
              height={150}
              width={150}
            ></Image>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold mb-5">StudTask</h1>
          <p className="text-lg md:text-3xl mb-5 text-[#22324C] bg-white rounded-md px-2 py-1 mx-5">
            Application for organizing a student council
          </p>
          <Button
            className="bg-[#1BD2C7] text-lg md:text-3xl uppercase hover:bg-[#22324C] mt-5"
            size="lg"
            asChild
          >
            <Link href="/sign-in">try it</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default MarketingPage;
