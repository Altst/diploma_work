import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.png" alt="logo" height={60} width={60}></Image>
        <p className="text-lg pb-1">Студентська рада ДТУ ШАГ</p>
      </div>
    </Link>
  );
};
