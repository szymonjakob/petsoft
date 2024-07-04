import Logo from "@/components/logo";
import Image from "next/image";

const Home = () => {
  return (
    <main className="bg-[#5DC9A8] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        alt="Picture of the athor"
        width={519}
        height={472}
      />
      <div>
        <Logo />
        <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
          Manage your <span className="font-extrabold">pet daycare</span> with
          ease
        </h1>
        <p className="text-2xl max-w-[560px]">
          Use PetSoft to easly track of pets under your car. Get lifetime access
          for $299.
        </p>
        <div className="mt-10"></div>
      </div>
    </main>
  );
};

export default Home;
