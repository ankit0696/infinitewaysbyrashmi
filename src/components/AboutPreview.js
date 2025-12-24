import Link from 'next/link'

export default function AboutPreview() {
  const highlights = [
    "7+ years of intensive spiritual and energy healing practice",
    "A decade of spiritual exploration and clairvoyant development",
    "Corporate experience and deep professional background"
  ];

  const cards = [
    {
      title: "Corporate",
      subtitle: "Professional & Analytical",
      bgColor: "bg-primary-500",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Spiritual",
      subtitle: "Healing & Intuition",
      bgColor: "bg-secondary-500",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.104 2 14 2.896 14 4V10H20C21.104 10 22 10.896 22 12C22 13.104 21.104 14 20 14H14V20C14 21.104 13.104 22 12 22C10.896 22 10 21.104 10 20V14H4C2.896 14 2 13.104 2 12C2 10.896 2.896 10 4 10H10V4C10 2.896 10.896 2 12 2Z"/>
        </svg>
      )
    },
    {
      title: "Healing",
      subtitle: "Energy & DNA",
      bgColor: "bg-secondary-500",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S15.33 8 14.5 8 13 8.67 13 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S8.33 8 7.5 8 6 8.67 6 9.5 6.67 11 7.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
        </svg>
      )
    },
    {
      title: "Guidance",
      subtitle: "Tarot & Manifestation",
      bgColor: "bg-accent-500",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      )
    },
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="lg:flex lg:items-center lg:gap-16">
          
          {/* Content */}
          <div className="lg:w-1/2 space-y-6">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
                My Journey
              </span>
              <h2 className="heading-2 mb-6">
                <span className="text-brand">From Corporate Cubicle to </span>
                <span className="text-primary-500">Energy Healer</span>
              </h2>
            </div>
            <p className="body-text mb-6">
              I&apos;ve traveled through two journeys: corporate life that sharpened my skills and a spiritual path that awakened my healing abilities. This unique combination bridges practical wisdom with intuitive healing.
            </p>
            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-brand-light">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn btn-primary mt-4 inline-block">
              Learn More About My Journey
            </Link>
          </div>

          {/* Cards */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 grid grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <div key={idx} className="card p-6 text-center hover:shadow-lg transition rounded-xl">
                <div className={`w-14 h-14 ${card.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  {card.icon}
                </div>
                <h3 className="font-semibold text-brand">{card.title}</h3>
                <p className="text-sm text-brand-light">{card.subtitle}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
