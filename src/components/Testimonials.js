function Testimonials({ reviews }) {
    return (
      <section className="bg-blue-50 p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow">
              <p className="mb-4">"{review.text}"</p>
              <div className="text-sm text-gray-600">- {review.name}, {review.role} at {review.company}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Testimonials;