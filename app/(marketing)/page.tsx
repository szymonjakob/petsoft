import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="bg-[#5DC9A8] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        alt="Picture of the athor"
        width={519}
        height={472}
        priority
      />
      <div>
        <Logo />
        <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
          Manage your <span className="font-extrabold">pet daycare</span> with
          ease
        </h1>
        <p className="text-2xl max-w-[560px]">
          Use PetSoft to easly track of pets under your care. Get lifetime
          access for $299.
        </p>
        <div className="mt-10 space-x-3">
          <Button asChild>
            <Link href="/signup">Get started</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/login">Log in</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
