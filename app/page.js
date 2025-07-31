export default function Home() {
 return (
  <main className="bg-white px-4 sm:px-8 md:px-12 lg:px-24 py-10 text-gray-800">
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Intro Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Hi, I'm Marwa Hassan 👋</h1>
        <p className="mt-4 text-xl">Business Analyst & Process Engineer</p>
        <p className="mt-2 text-md text-gray-600">Translating business needs into smart, scalable tech solutions.</p>
      </section>

      {/* About Me Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="leading-relaxed">
          I’m a Business Analyst & Process Engineer with 8+ years of experience helping teams streamline operations, implement digital solutions, and deliver user-friendly systems. 
        </p>
        <p className="mt-4 leading-relaxed">
          Currently at Plan International Canada, I lead projects that blend tech and process — from procurement automation to website UX improvements. I recently completed an AI Product Management program, where I explored innovation in assistive technology.
        </p>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">ERP System Pilot</h3>
            <p>Led process reengineering and implemented a finance pilot to win executive buy-in at a resistant client site.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">AI Wearable for Autism</h3>
            <p>Co-led development of an AI product concept to support non-verbal individuals with autism through emotion recognition.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Feel free to reach out via email or connect with me on LinkedIn.</p>
        <div className="mt-4 space-y-2">
          <p>
            📧 <a href="mailto:marwa279268@gmail.com" className="text-blue-600 hover:underline">marwa279268@gmail.com</a>
          </p>
          <p>
            🔗 <a href="https://www.linkedin.com/in/marwa-musa-01524769/" target="_blank" className="text-blue-600 hover:underline">
              LinkedIn Profile
            </a>
          </p>
        </div>
      </section>
    </div>
  </main>
);
}
