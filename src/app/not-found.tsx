import Image from "next/image";
import NotFound from "@/assets/404-page.png";
import Link from "next/link";

const notFound = () => {
  return (
    <section className="mt-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col space-y-5 justify-center items-center min-h-screen">
        <Image src={NotFound} alt="Page not found" width={400} height={500} />

        <h1 className="text-dark font-bold text-3xl lg:text-4xl tracking-wider text-center">Opps! Page Not Found</h1>

        <Link href='/'>
          <button className="bg-green px-6 py-3 rounded-md font-bold text-[12px] text-black tracking-[0.3px] cursor-pointer">
            Back to Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default notFound;
