export default function Testimonials() {
  const testimonials = [
    {
      text: "Dr. Rashmi's sessions completely transformed my perspective on life. Her unique approach combining spirituality with her professional background creates powerful healing experiences.",
      author: "Sarah M.",
      rating: 5,
      service: "Energy Healing"
    },
    {
      text: "The DNA activation session was incredible. I felt shifts immediately and continue to experience positive changes in my energy and overall well-being.",
      author: "Michael R.",
      rating: 5,
      service: "DNA Activation"
    },
    {
      text: "Her tarot readings are remarkably accurate and insightful. Dr. Rashmi helped me gain clarity on important life decisions with compassion and wisdom.",
      author: "Priya K.",
      rating: 5,
      service: "Tarot Reading"
    }
  ]

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
            Client Stories
          </div>
          <h2 className="heading-2 mb-6">Transformations Speak for Themselves</h2>
          <p className="body-large text-brand-light">
            Discover how clients have experienced profound healing and transformation 
            through our quantum physics-based healing sessions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 text-center">
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="body-text text-brand-light mb-6 italic">
                &quot;{testimonial.text}&quot;
              </blockquote>
              
              {/* Author */}
              <div className="border-t pt-4">
                <div className="font-semibold text-brand">{testimonial.author}</div>
                <div className="text-sm text-brand-lighter">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
