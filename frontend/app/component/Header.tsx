import Link from "next/link";

export default function Home() {

    return (
        <div className=" flex flex-col py-10 px-40 bg-inherit">
          <div className="flex flex-row h-fit py-4 px-40 items-center rounded-full justify-between bg-[#a89984]">
            <Link href="/">Home</Link>
            <Link href="/cv">CV</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contacts</Link>
          </div>
        </div>
    );
  }
