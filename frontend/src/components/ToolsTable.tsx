export default function ToolsTable() {
    return (
        <section className="mt-28 px-6 md:px-10 max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
                Built with <span className="text-purple-400">modern tools</span>
            </h2>

            <p className="text-gray-400 mt-3">
                A robust, maintainable architecture designed for performance and
                developer experience
            </p>

            {/* Main Card */}
            <div className="mt-12 rounded-3xl bg-[#0b1024] border border-[#1a2345] p-6 md:p-10">
                <table className="w-full text-gray-300">
                    <thead>
                        <tr className="text-gray-400 border-b border-[#1a2345]">
                            <th className="p-4 text-left">Layer</th>
                            <th className="p-4 text-left">Technology</th>
                            <th className="p-4 text-left">Role</th>
                        </tr>
                    </thead>

                    <tbody className="text-sm md:text-base">
                        <tr className="border-b border-[#1a2345]">
                            <td className="p-4">Core</td>
                            <td className="p-4 text-blue-400">
                                React 18 + TypeScript
                            </td>
                            <td className="p-4">View Layer</td>
                        </tr>

                        <tr className="border-b border-[#1a2345]">
                            <td className="p-4">Build</td>
                            <td className="p-4 text-blue-400">Vite</td>
                            <td className="p-4">Bundling</td>
                        </tr>

                        <tr>
                            <td className="p-4">AI</td>
                            <td className="p-4 text-blue-400">LangChain.js</td>
                            <td className="p-4">Unified AI</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}
