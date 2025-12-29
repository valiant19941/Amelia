import {SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss} from 'react-icons/si';
export default function TestPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-32">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-green-900/40 px-4 py-2 text-sm text-green-400">
            ⭐ React Developer & UI/UX  | Based in Kastoria GR
          </div>

          {/* Heading */}
          <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
            React.js Developer  Portfolio
          </h1>

          {/* Description */}
          <p className="text-gray-400 max-w-xl">
            Building modern, scalable web applications with React, JavaScript,
            and cutting-edge technologies. Transforming ideas into exceptional
            digital experiences.
          </p>

          {/* CTA */}
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Get in Touch
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
            <Stat number="3+" label="Years Experience" />
            <Stat number="50+" label="Projects Completed" />
            <Stat number="15+" label="Technologies" />
            <Stat number="98%" label="Client Satisfaction" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-green-500/20">
            <img
              src="/1.jpg"
              alt="Developer"
              width={400}
              height={400}
              className="rounded-2xl w-full h-full object-cover shadow-2xl" 
            />
          </div>

          {/* Tech Icons */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur px-6 py-3 rounded-full flex gap-4 text-green-400">
            <span> <SiReact /> </span>
            <span><SiNextdotjs /></span>
            <span><SiNodedotjs /></span>
            <span><SiTailwindcss/></span>
          </div>
        </div>

      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-green-400 text-2xl font-bold">{number}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}
