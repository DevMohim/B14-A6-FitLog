'use client'
import Image from "next/image";
import errorImg from "@/assets/App-Error.png";


const error = () => {
  return (
    <section className="mt-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col space-y-5 justify-center items-center min-h-screen">
        <Image src={errorImg} alt="Page not found" width={400} height={500} />

        <h1 className="text-dark font-bold text-4xl tracking-wider">
          Opps! Page Not Found
        </h1>
      </div>
    </section>
  );
};

export default error;
