export default function Stats() {
  return (
    <section className="bg-blue-100 py-10 text-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <p className="text-3xl font-bold text-blue-700">+100</p>
          <p className="text-sm text-gray-600">Happy Clients</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-700">+250</p>
          <p className="text-sm text-gray-600">Clean Homes</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-700">5★</p>
          <p className="text-sm text-gray-600">Client Rating</p>
        </div>
      </div>
    </section>
  );
}
