import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <nav className='border-2 border-gray-200 p-2 flex justify-between items-center'>
          <div className=' flex gap-4 items-center font-Russo text-yellow-500 text-xl font-bold'>
            <Image src='/images/logo.png' width={150} height={150} alt='logo' />
            <div className='flex gap-36'>
              <div>Home</div>
              <div>About us</div>
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
