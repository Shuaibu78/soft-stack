import { useForm, ValidationError } from "@formspree/react";

const App = () => {
  const [state, handleSubmit] = useForm("meoannjz");

  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Grow Your Business with a Clean Landing Page & Simple Automation
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          I help small business owners and creators build websites that convert
          and tools that save time — all in just a few days.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Book a Free Call
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder="What do you need help with?"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            onClick={() => alert("Form submitted!")}
            disabled={state.submitting}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* What I Do */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p>🛍 Help you get more customers</p>
          </div>
          <div>
            <p>⏱ Save hours every week</p>
          </div>
          <div>
            <p>💻 Look good on mobile and desktop</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Services I Offer
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-medium mb-2">Landing Pages</h3>
            <p>Sales, product, or portfolio websites built to convert.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-medium mb-2">Business Automation</h3>
            <p>
              Lead capture forms, auto-emails, task flows using Notion, Zapier,
              Airtable, etc.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-medium mb-2">Client Dashboards</h3>
            <p>
              Organized views to manage clients, orders, and deadlines with
              ease.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-medium mb-2">Website Redesigns</h3>
            <p>Modern, clean updates for your outdated website.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">What People Say</h2>
        <div className="bg-white p-6 rounded-2xl shadow mb-4">
          <p className="italic">
            “Shuaibu helped me go from a confusing page to a site that actually
            brings clients.”
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="italic">
            “He’s fast, friendly, and the dashboard he built is saving me hours
            every week.”
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-blue-50">
        <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Site?</h2>
        <p className="mb-6 text-lg">
          Let’s turn your idea into a working solution in just a few days.
        </p>
        <iframe
          src="https://calendly.com/devshuaib/brief-introduction-call"
          width="100%"
          height="630"
          className="rounded-2xl border-2 shadow-md"
        />
        Book a Free Call
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © {year} Soft Stack Studio. Built by Shuaibu.
      </footer>
    </div>
  );
};

export default App;
