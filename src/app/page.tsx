import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 h-4/5">
        <div className="md:w-2/5 flex items-center justify-center 2xl:h-full">
          <div className="profile-avatar">
            <Image src="/images/profile.jpg" width={300} height={300} alt="Profile" priority={true} />
          </div>
        </div>
        <div className="md:w-3/5 md:mt-3">
          <div className="flex flex-col justify-center pl-20 gap-4 2xl:h-full">
            <span className="text-4xl text-[#D95C48] font-semibold">HI I'M BUĞRA MERT AYAR</span>
            <span className="text-2xl font-medium">I am Senior Frontend Developer</span>

            <div className="flex flex-col gap-3">
              <span className="text-base">Hey there! I'm Buğra Mert Ayar, a Senior Frontend Developer, passionately crafting in the digital realm.</span>
              <span className="text-base">🎨 Creative coding and the art of web development.</span>
              <span className="text-base">🚀 Exploring new tech frontiers for the thrill.</span>
              <span className="text-base">💡 Always on the lookout for fresh ideas and solutions.</span>
              <span className="text-base">👾 Embracing new technologies.</span>
              <span className="text-base"> 😊 This is my personal space, designed for pure enjoyment.</span>
              <span className="text-base"> Feel free to connect, share your projects, or just drop a hello. Let's explore the boundaries of tech and fun together!</span>
            </div>
            <Link href="/contact" className="w-1/4 md:w-1/2 mt-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
