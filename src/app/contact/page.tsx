import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-start mt-20 gap-4 w-1/2 mx-auto text-center shadow-2xl p-20 bg-[#232b2b] rounded">
      <div className="text-3xl font-semibold text-[#D95C48]">Contact Me</div>
      <div className="text-lg">Feel free to reach out and connect! You can find me on various social media platforms and explore my projects on GitHub. I'm always open to interesting conversations and collaborations. Feel free to drop me a message through any of the following links</div>
      <div className="flex gap-4">
        <Link className="p-3 bg-white rounded-full cursor-pointer hover:bg-[#cd8b62]" href="https://www.linkedin.com/in/bugra-mert-ayar/" target="_blank">
          <Image src="/icons/linkedin.png" width={20} height={20} alt="Linkedin" priority={false} />
        </Link>

        <Link className="p-3 bg-white rounded-full cursor-pointer hover:bg-[#cd8b62]" href="https://medium.com/@bugramertayar" target="_blank">
          <Image src="/icons/medium.png" width={20} height={20} alt="Medium" priority={false} />
        </Link>

        <Link className="p-3 bg-white rounded-full cursor-pointer hover:bg-[#cd8b62]" href="https://www.instagram.com/bugramertayar/" target="_blank">
          <Image src="/icons/instagram.png" width={20} height={20} alt="Instagram" priority={false} />
        </Link>

        <Link className="p-3 bg-white rounded-full cursor-pointer hover:bg-[#cd8b62]" href="https://github.com/bugramertayar" target="_blank">
          <Image src="/icons/github.png" width={20} height={20} alt="Github" priority={false} />
        </Link>
      </div>
      <div className="text-lg">Looking forward to hearing from you and exploring the endless possibilities!</div>
    </div>
  );
}
