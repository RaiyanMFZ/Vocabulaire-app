import Link from 'next/link';
import { UserButton } from '@stackframe/stack';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-white shadow-xxs py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>
      <nav className="space-x-6 items-center justify-center ml-20">
        <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      </nav>
      <nav className='flex items-center'>
      <Button size="lg" className="mr-4">
        Create + 
      </Button>
      <UserButton />
      </nav>
    </header>
  );
}
