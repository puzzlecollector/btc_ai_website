import Link from 'next/link';

export default function Header() {
  return (
    <header className='header-safe-area flex justify-between items-center p-4'>
      <Link href='/'>
        <h1 className='text-xl font-bold'>{"Dean's Blog"}</h1>
      </Link>
      <nav className='flex gap-3'>
        <Link href='/'>home</Link>
        <Link href='/about'>about</Link>
        <Link href='/posts'>posts</Link>
      </nav>
    </header>
  );
}
