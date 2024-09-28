import Image from "next/image";
import dashboard from "@/public/dashboard.png";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="bg-blue-500 min-w-[100vw] p-4 sm:flex sm:justify-end sm:flex-col h-[80px] md:h-[150px] text-white font-medium sm:text-3xl text-xl">
        Public Dashboard
      </div>
      <div className="flex  flex-col sm:flex-row justify-center items-center mt-10 md:gap-[13rem] gap-4 p-4 ">
        <div>
          <p className="font-medium sm:text-xl text-lg">
            Welcome To Public Dashboard
          </p>
          Start by Signup{" "}
          <Link href="/signup">
            <button className="p-4 bg-blue-500 transition-all text-white font-medium m-2 px-8 rounded-lg hover:shadow-[-7px_7px_0px_#ADD8E6]">
              Signup
            </button>
          </Link>{" "}
        </div>
        <Image src={dashboard} alt="" className="w-auto" />
      </div>
    </>
  );
}
