import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Dean에게 메일 보내기',
};

const LINKS = [
  { icon: <AiFillLinkedin />, url: 'https://www.linkedin.com/in/%ED%9D%AC%EC%A4%80-%EB%B0%95-60147a170/' },
];

export default function ContactPage() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
      <p>ara34256@snu.ac.kr</p>
      <ul className='flex gap-4 my-2'>
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='text-5xl hover:text-yellow-400'
          >
            {link.icon}
          </a>
        ))}
      </ul>
    </section>
  );
}
