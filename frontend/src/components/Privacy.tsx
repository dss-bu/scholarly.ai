export default function PrivacySection() {
    return (
        <section className="mt-28 px-8 max-w-6xl mx-auto">
            <div className="rounded-3xl p-10 bg-gradient-to-br from-[#0b1024] to-[#070b1a] border border-[#1a2345]">
                <p className="text-green-400 mb-3">Privacy First Design</p>

                <h2 className="text-4xl font-bold">
                    Your learning.{' '}
                    <span className="text-blue-400">Your privacy.</span>
                </h2>

                <p className="text-gray-400 mt-3 max-w-3xl">
                    Everything is processed locally on your device. No data
                    leaves your machine. No tracking. No cloud dependency.
                </p>

                <div className="grid md:grid-cols-2 gap-5 mt-10">
                    <div className="p-5 bg-[#0b1024] border border-[#1a2345] rounded-xl">
                        <h4 className="font-semibold">Local Processing</h4>
                        <p className="text-gray-400 text-sm">
                            Video analysis happens entirely on your device.
                        </p>
                    </div>

                    <div className="p-5 bg-[#0b1024] border border-[#1a2345] rounded-xl">
                        <h4 className="font-semibold">No Data Mining</h4>
                        <p className="text-gray-400 text-sm">
                            Your learning data is yours only.
                        </p>
                    </div>

                    <div className="p-5 bg-[#0b1024] border border-[#1a2345] rounded-xl">
                        <h4 className="font-semibold">Offline Capable</h4>
                        <p className="text-gray-400 text-sm">
                            Works even without internet connection.
                        </p>
                    </div>

                    <div className="p-5 bg-[#0b1024] border border-[#1a2345] rounded-xl">
                        <h4 className="font-semibold">Open Source</h4>
                        <p className="text-gray-400 text-sm">
                            Fully transparent & MIT licensed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
