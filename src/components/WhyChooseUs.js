function WhyChooseUs({ reasons }) {
    return (
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default WhyChooseUs;