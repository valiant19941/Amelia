import Image from "next/image";

export default function CardGrid() {
  return (
    <div className="min-h-screen  from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">

        {/* Card 1 */}
        <div className="bg-slate-900/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/10 hover:-translate-y-1 transition">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Fast Setup
          </h2>
          <p className="text-gray-300">
            Launch your product in minutes with modern tooling.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-2xl font-semibold mb-3">
            Scalable
          </h2>
          <p className="text-gray-600">
            Built to grow with your business effortlessly.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-800 rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Secure
          </h2>
          <p className="text-gray-300">
            Security best practices baked in by default.
          </p>
        </div>

      </div>
    </div>
  );
}
