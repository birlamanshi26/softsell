function HowItWorks({ steps }) {
    return (
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default HowItWorks;