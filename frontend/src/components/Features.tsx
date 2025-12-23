export default function FeaturesSection() {
    return (
        <section className="mt-24 px-8 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center">
                Everything you need to{' '}
                <span className="text-blue-400">learn smarter</span>
            </h2>

            <p className="text-gray-400 text-center mt-2">
                Transform any YouTube video into an AI-powered study companion
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="p-6 rounded-2xl bg-[#0b1024] border border-[#1a2345]">
                    <h3 className="text-xl font-semibold">Smart Capture</h3>
                    <p className="text-gray-400 mt-2">
                        Capture exact key timestamps instantly with context.
                    </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0b1024] border border-[#1a2345]">
                    <h3 className="text-xl font-semibold">AI-Powered Tutor</h3>
                    <p className="text-gray-400 mt-2">
                        Ask questions and get timestamped AI explanations.
                    </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0b1024] border border-[#1a2345]">
                    <h3 className="text-xl font-semibold">PDF Export</h3>
                    <p className="text-gray-400 mt-2">
                        Export all notes and timestamps into a beautiful PDF.
                    </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0b1024] border border-[#1a2345]">
                    <h3 className="text-xl font-semibold">Model Flexibility</h3>
                    <p className="text-gray-400 mt-2">
                        Supports Chrome AI, OpenAI, Gemini and Local models.
                    </p>
                </div>
            </div>
        </section>
    );
}
