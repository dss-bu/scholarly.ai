export default function Navbar() {
    return (
        <div className="w-full flex justify-between items-center px-10 py-5 bg-transparent">
            <h1 className="text-xl font-bold flex items-center gap-2">
                <span className="bg-[#3b82f6] px-2 py-1 rounded">📘</span>
                Scholarly.ai
            </h1>

            <div className="flex gap-10 text-gray-300">
                <p>Features</p>
                <p>Privacy</p>
                <p>Architecture</p>
            </div>

            <button className="bg-gradient-to-r from-purple-500 to-blue-400 px-5 py-2 rounded-lg">
                Add to Chrome
            </button>
        </div>
    );
}
