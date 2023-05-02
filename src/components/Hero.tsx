import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/profile.png';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto'
        src={profileImage}
        alt='Picture of the author'
        width={160}
        height={160}
        priority
      />
      <h2 className='text-3xl font-bold my-2 py-2'>{"Hi, I'm Dean"}</h2>
      <h3 className='text-xl font-semibold'>A Developer</h3>
      <Link href='/contact'>
        <button className='bg-blue-500 text-white font-semibold rounded-xl py-1 px-4 mt-2'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
