export default function Testimonials() {
  return (
    <section className="bg-white py-12 text-center">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        What Our Clients Say
      </h2>
      <div className="max-w-2xl mx-auto space-y-6">
        <blockquote className="bg-blue-50 p-4 rounded shadow">
          <p className="text-gray-800">
            "Lu Clean has changed my life. Everything is spotless!"
          </p>
          <footer className="mt-2 text-sm text-blue-600">— Maria J.</footer>
        </blockquote>
        <blockquote className="bg-blue-50 p-4 rounded shadow">
          <p className="text-gray-800">
            "Professional, reliable and friendly. Highly recommended."
          </p>
          <footer className="mt-2 text-sm text-blue-600">— Carlos D.</footer>
        </blockquote>
      </div>
    </section>
  );
}
