import Link from 'next/link';
import { UserButton } from '@stackframe/stack';
import { Button } from '@/components/ui/button';

export default function Header() {
    return (
        <header className="bg-background shadow-xxs py-4 px-6 flex justify-between items-center border-b border-gray-700 fixed top-0 left-0 w-full z-50">
            <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>
            <nav className="space-x-10 items-center justify-center ml-20 text-lg">
                <Link href="/" className="text-blue-600 hover:text-blue-900 hover:text-bold">Home</Link>
                <Link href="/about" className="text-blue-600 hover:text-blue-900 hover:text-bold">About</Link>
                <Link href="/contact" className="text-blue-600 hover:text-blue-900 hover:text-bold">Contact</Link>
            </nav>
            <nav className='flex items-center'>
                <Link href="/create">
                    <Button size="lg" className="mr-4">
                        Create +
                    </Button>
                </Link>
                <UserButton />
            </nav>
        </header>
    );
}
