import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body> 
        <nav className=" bg-black-800 px-4 flex justify-between items-center border-b-2 border-b-gray-100">
          <div className=" flex gap-8 items-center font-Russo text-slate-700  text-xl font-extrabold">
            <Image src="/images/logo.png" width={150} height={150} alt="logo" />
            <div className="flex gap-12">
            <div className="cursor-pointer hover:text-black">
              Home
            </div>
            <div className="cursor-pointer hover:text-black">
              About us
            </div>
            </div>
          </div>
          <div className=' flex gap-8 items-center'>
            <div className='flex gap-2 items-center'>
              <Image
                src='/assets/icons/mail.svg'
                width={20}
                height={20}
                alt='call'
              />
              <div className='font-bold'>Queries</div>
            </div>
            <div className='flex gap-2 items-center'>
              <Image
                src='/assets/icons/call.svg'
                width={20}
                height={20}
                alt='call'
              />
              <div className='font-bold'>662464803 </div>
            </div>
          </div>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
