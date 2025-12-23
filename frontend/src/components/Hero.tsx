export default function Hero() {
    return (
        <section className="text-center mt-20">
            <p className="text-sm text-blue-400 mb-3">
                Powered by Chrome Built-in AI
            </p>

            <h1 className="text-5xl font-bold leading-snug">
                The Offline-First{' '}
                <span className="text-blue-400">AI Study</span>
                <br /> Companion for YouTube
            </h1>

            <p className="text-gray-400 mt-4">
                Transform video watching into active learning. Capture notes,
                ask questions and export PDFs.
            </p>

            <div className="flex justify-center gap-5 mt-6">
                <button className="bg-teal-500 px-6 py-3 rounded-lg">
                    Add to Chrome — Free
                </button>

                <button className="bg-transparent border px-6 py-3 rounded-lg">
                    Watch Demo
                </button>
            </div>
        </section>
    );
}
