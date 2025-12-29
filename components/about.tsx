export default function AboutPage() {
    return (
       <section id="about" className="relative py-20 bg-black overflow-hidden ">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                <div className="flex flex-col gap-8">
                    <div className="inline-flex items-center gap-2.5 px-5 border border-primary/30 bg-primary/10 rounded-full">
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-900/40 px-4 py-2 text-sm text-green-400"> Full-Stack Developer</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-normal leading-tight  text-white">Crafting Digital Experiences That Matter</h2>
                    <div className="flex flex-col gap-4 text-white">
                        <p className="text-base text-white/70 leading-relaxed">I am a passionate Full-Stack Developer with a strong focus on building scalable, user-friendly, and high-performance web applications. I enjoy working across the entire development stack—from crafting intuitive front-end interfaces to designing robust back-end systems and APIs. On the front end, I specialize in creating responsive and accessible user experiences using modern technologies such as HTML, CSS, JavaScript, and frameworks like React or Angular. On the back end, I work with Node.js, Express, Python, or Java, along with databases like MongoDB, PostgreSQL, or MySQL, to deliver secure and efficient solutions. I value clean code, best practices, and continuous learning. I enjoy collaborating with teams, solving complex problems, and turning ideas into real-world products. Whether it’s developing a new feature, optimizing performance, or deploying applications to the cloud, I strive to deliver solutions that create meaningful impact. When I’m not coding, I enjoy learning new technologies, exploring open-source projects, and improving my problem-solving skills.</p>
                </div>

                </div>
                

            </div>

        </div>
       </section>
    )
}