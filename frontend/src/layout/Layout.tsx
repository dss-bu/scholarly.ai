import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#0B0F19] min-h-screen text-white flex flex-col">
            <Navbar />
            <main className="flex-1 px-4 py-6">{children}</main>
            <Footer />
        </div>
    );
}
