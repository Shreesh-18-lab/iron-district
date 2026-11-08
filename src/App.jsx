
import './App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        IRON DISTRICT<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">HOME</a>
        <a href="#philosophy">PHILOSOPHY</a>
        <a href="#facilities">FACILITIES</a>
        <a href="#membership">MEMBERSHIP</a>
      </div>

      <a href="#membership" className="nav-cta">
        MEMBERSHIP ENQUIRY
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">
          ELEVATE YOUR PERFORMANCE
        </p>

        <h1>
          BEYOND THE
          <br />
          <span>ORDINARY.</span>
        </h1>

        <p className="hero-description">
          An elevated approach to strength, performance
          and personal excellence.
        </p>

        <a href="#membership" className="hero-button">
          DISCOVER THE EXPERIENCE
        </a>
      </div>

      <div className="hero-bottom">
        <span>STRENGTH. DISCIPLINE. EXCELLENCE.</span>
        <span>01 / 05</span>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="website">
      <Navbar />
      <Hero />
      <Philosophy />
      <Facilities />
      <Membership />
    </div>
  )
}

export default App

function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">

      <div className="philosophy-overlay">
        <p className="philosophy-eyebrow">
          THE IRON DISTRICT PHILOSOPHY
        </p>

        <h2>
          HARD WORK IS A LIFESTYLE.
          <br />
          <span>GREATNESS IS EARNED.</span>
        </h2>

        <p className="philosophy-description">
          Every rep. Every sacrifice. Every early morning.
          Excellence is never accidental. It is built
          through discipline, commitment and consistency.
        </p>
      </div>

    </section>
  )
}

function Facilities() {
  return (
    <section className="facilities" id="facilities">
      <div className="facilities-content">

        <p className="facilities-eyebrow">
          THE ART OF PERFORMANCE
        </p>

        <h2>
          ENGINEERED FOR
          <br />
          <span>PERFORMANCE.</span>
        </h2>

        <p className="facilities-description">
          Discover a training environment built around
          precision, strength and uncompromising quality.
          Every detail is designed to elevate your performance.
        </p>

      </div>
    </section>
  )
}
function Membership() {
  const plans = [
    {
      name: 'MONTHLY',
      duration: '01 MONTH',
      description: 'The flexibility to train on your terms.',
    },
    {
      name: '6 MONTHS',
      duration: '06 MONTHS',
      description: 'Consistency creates extraordinary results.',
    },
    {
      name: 'ANNUAL',
      duration: '12 MONTHS',
      description: 'A long-term commitment to excellence.',
      featured: true,
    },
  ]

  return (
    <section className="membership" id="membership">
      <div className="membership-heading">
        <p>YOUR NEXT CHAPTER STARTS HERE</p>
        <h2>CHOOSE YOUR <span>COMMITMENT.</span></h2>
        <p>Exceptional training. A commitment to becoming better.</p>
      </div>

      <div className="membership-cards">
        {plans.map((plan) => (
          <div
            className={`membership-card ${plan.featured ? 'featured' : ''}`}
            key={plan.name}
          >
            {plan.featured && <span className="featured-label">BEST VALUE</span>}

            <p className="plan-duration">{plan.duration}</p>
            <h3>{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>

            <div className="plan-divider"></div>

            <a href="mailto:info@irondistrict.example">
              ENQUIRE FOR PRICING <span>↗</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}