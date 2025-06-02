

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Featured Fish */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-sky-950">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          We’d love to hear from you! Please fill out the form below and we’ll
          get in touch soon.
        </p>

        <form className="space-y-6 ">
          <div>
            <label
              htmlFor="name"
              className="block  font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 p-2 block w-full rounded-md border-sky-950 shadow-sm focus:ring-deepsky focus:border-deepsky"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block  font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 p-2 block w-full rounded-md border-sky-950 shadow-sm focus:ring-deepsky focus:border-deepsky"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 p-2 block w-full rounded-mdborder-sky-950 shadow-sm focus:ring-deepsky focus:border-deepsky"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-sky-950 text-white py-2 w-full rounded-md hover:bg-deepsky transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Our Location</h2>
          <div className="w-full h-64">
            <iframe
              title="SeaLife Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9088499129344!2d-122.08424948469222!3d37.42199977982578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c5df0a92d%3A0xc0e1b79882c50eb9!2sGoogleplex!5e0!3m2!1sen!2sus!4v1615408383405!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
