import { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, BookOpen, Brain, Calculator, Check,
  ChevronDown, Code2, GraduationCap, Menu, MessageCircle, Play,
  Sparkles, X, Atom, Globe2, Mail, Clock3, Star
} from 'lucide-react'

const subjects = [
  { icon: Calculator, name: 'Mathematics', detail: 'Build confidence with numbers, logic and problem-solving.', lessons: '24 lessons', color: 'violet' },
  { icon: Atom, name: 'Science', detail: 'Explore the ideas that explain how our world works.', lessons: '18 lessons', color: 'cyan' },
  { icon: BookOpen, name: 'English', detail: 'Improve grammar, vocabulary and communication.', lessons: '16 lessons', color: 'orange' },
  { icon: Code2, name: 'Computer Science', detail: 'Learn coding concepts and think like a creator.', lessons: '20 lessons', color: 'green' },
  { icon: Globe2, name: 'Social Studies', detail: 'Understand people, places, history and society.', lessons: '14 lessons', color: 'pink' },
  { icon: Brain, name: 'Study Skills', detail: 'Develop habits that make learning more effective.', lessons: '10 lessons', color: 'blue' },
]

const faqs = [
  ['Is the learning content free?', 'Yes. This starter website is a free educational template. You can replace the sample content with your own lessons and resources.'],
  ['Can I use this website on my phone?', 'Absolutely. The layout adapts to mobile phones, tablets and desktop screens.'],
  ['How do I add my own lessons?', 'Edit the subjects and lesson information in src/App.jsx. Save the file and the website will update while running locally.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [notice, setNotice] = useState('')

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const recipient = 'hello@example.com' // Change this to your email address.
    const subject = encodeURIComponent(`Website enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
    setNotice('Your email app should open with the message ready to send. Replace hello@example.com in src/App.jsx with your email address.')
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); goTo('home') }}>
          <span className="brand-mark"><GraduationCap size={21} /></span>
          <span>my<span className="brand-accent">website</span><i>.</i></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#subjects" onClick={(e) => { e.preventDefault(); goTo('subjects') }}>Explore</a>
          <a href="#method" onClick={(e) => { e.preventDefault(); goTo('method') }}>How it works</a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); goTo('faq') }}>FAQ</a>
          <button className="nav-mobile-cta" onClick={() => goTo('contact')}>Get in touch <ArrowUpRight size={16} /></button>
        </nav>
        <button className="nav-cta" onClick={() => goTo('contact')}>Get in touch <ArrowUpRight size={16} /></button>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</div>
            <h1>Learn better.<br /><span>Go further.</span></h1>
            <p className="hero-description">Big ideas become easier when they're explained clearly. Discover learning resources designed to help you understand more and achieve your goals.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => goTo('subjects')}>Explore subjects <ArrowRight size={18} /></button>
              <button className="button button-quiet" onClick={() => goTo('method')}><span className="play-icon"><Play size={13} fill="currentColor" /></span> How it works</button>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack"><span> S </span><span> A </span><span> R </span><span> + </span></div>
              <div><strong>Curiosity starts here</strong><small>A space to keep learning</small></div>
            </div>
          </div>
          <div className="hero-art reveal delay-one">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hero-glow" />
            <div className="learning-card main-card">
              <div className="card-topline"><span className="mini-label">YOUR LEARNING SPACE</span><span className="live-dot" /></div>
              <div className="book-illustration"><div className="book book-back" /><div className="book book-front"><div className="book-sun" /><div className="book-line line-one" /><div className="book-line line-two" /><div className="book-line line-three" /></div><Sparkles className="sparkle sparkle-a" size={22} /><Sparkles className="sparkle sparkle-b" size={15} /></div>
              <div className="card-bottom"><div><strong>Make progress</strong><small>One concept at a time</small></div><span className="round-arrow"><ArrowUpRight size={19} /></span></div>
            </div>
            <div className="float-chip chip-top"><span className="chip-icon purple"><Brain size={17} /></span><span><b>Think clearly</b><small>Understand concepts</small></span></div>
            <div className="float-chip chip-bottom"><span className="chip-icon green"><Check size={17} /></span><span><b>Keep growing</b><small>Progress at your pace</small></span></div>
            <div className="tiny-star star-one">✳</div><div className="tiny-star star-two">✦</div>
          </div>
          <div className="hero-scroll"><span /> SCROLL TO EXPLORE</div>
        </section>

        <section className="trust-strip">
          <div className="section-wrap trust-inner"><span>MADE FOR CURIOUS MINDS</span><div><BookOpen size={17} /> Clear explanations</div><div><Brain size={17} /> Curious thinking</div><div><GraduationCap size={18} /> Steady progress</div></div>
        </section>

        <section className="subjects section-wrap section-space" id="subjects">
          <div className="section-heading reveal">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> FIND YOUR INTEREST</div><h2>Explore a world<br />of <span>possibilities.</span></h2></div>
            <p>Start with a subject you love, or discover something completely new. Every great journey begins with curiosity.</p>
          </div>
          <div className="subject-grid">
            {subjects.map((subject, index) => {
              const Icon = subject.icon
              return <article className={`subject-card reveal delay-${index % 3}`} key={subject.name}>
                <div className={`subject-icon ${subject.color}`}><Icon size={22} /></div>
                <div className="subject-meta">{subject.lessons}<ArrowUpRight size={15} /></div>
                <h3>{subject.name}</h3><p>{subject.detail}</p>
                <button className="text-link" onClick={() => goTo('contact')}>Explore subject <ArrowRight size={15} /></button>
              </article>
            })}
          </div>
        </section>

        <section className="method-section" id="method">
          <div className="section-wrap method-grid">
            <div className="method-visual reveal">
              <div className="method-panel">
                <div className="panel-head"><span>THE LEARNING LOOP</span><span className="panel-dots">•••</span></div>
                <div className="loop-graphic"><div className="loop-ring ring-a" /><div className="loop-ring ring-b" /><div className="loop-center"><Sparkles size={27} /><b>Learn</b><small>Every day</small></div><span className="loop-node node-a"><BookOpen size={18} /></span><span className="loop-node node-b"><Brain size={18} /></span><span className="loop-node node-c"><Check size={18} /></span></div>
                <div className="panel-footer"><span><i /> Explore</span><span><i /> Understand</span><span><i /> Practice</span></div>
              </div>
              <div className="note-card"><Star size={16} fill="currentColor" /><span>Small steps add up.</span></div>
            </div>
            <div className="method-copy reveal delay-one">
              <div className="eyebrow"><span className="eyebrow-dot" /> A SIMPLE APPROACH</div>
              <h2>Make learning<br /><span>feel natural.</span></h2>
              <p className="method-intro">You don't need to know everything today. Build understanding one useful idea at a time.</p>
              <div className="steps">
                <div className="step"><span>01</span><div><h3>Choose what interests you</h3><p>Follow your curiosity and pick a topic to explore.</p></div></div>
                <div className="step"><span>02</span><div><h3>Understand the essentials</h3><p>Focus on clear explanations and the ideas that matter.</p></div></div>
                <div className="step"><span>03</span><div><h3>Put your knowledge to use</h3><p>Review, practise and connect what you've learned.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section section-wrap">
          <div className="quote-mark">“</div><blockquote>Education is not just about finding answers. It's about learning to ask <span>better questions.</span></blockquote><div className="quote-caption"><span /> KEEP YOUR CURIOSITY ALIVE</div>
        </section>

        <section className="faq-section section-wrap section-space" id="faq">
          <div className="section-heading faq-heading reveal"><div><div className="eyebrow"><span className="eyebrow-dot" /> GOOD TO KNOW</div><h2>Questions?<br /><span>We've got you.</span></h2></div><p>A few helpful details to get you started. If you need anything else, send us a message.</p></div>
          <div className="faq-list reveal">
            {faqs.map(([question, answer], index) => <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={question}>
              <button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}><span>{question}</span><ChevronDown size={19} /></button>
              {activeFaq === index && <p>{answer}</p>}
            </div>)}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-grid">
            <div className="contact-copy reveal"><div className="eyebrow"><span className="eyebrow-dot" /> LET'S CONNECT</div><h2>Have a question?<br /><span>Say hello.</span></h2><p>Have an idea, a suggestion or just want to know more? We'd love to hear from you.</p><div className="contact-detail"><span><Mail size={18} /></span><div><small>EMAIL US</small><b>hello@example.com</b></div></div></div>
            <form className="contact-form reveal delay-one" onSubmit={handleSubmit}>
              <div className="form-title"><MessageCircle size={19} /><span>Send a message</span></div>
              <label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Alex Morgan" /></label>
              <label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
              <label>Your message<textarea required rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us what's on your mind..." /></label>
              <button className="button button-primary submit-button" type="submit">Prepare email <ArrowRight size={17} /></button>
              {notice && <p className="form-notice" role="status">{notice}</p>}
              <small className="form-footnote">This demo uses your device's email app to send the message.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark"><GraduationCap size={20} /></span><span>my<span className="brand-accent">website</span><i>.</i></span></a><p>Stay curious. Keep learning.</p><span className="copyright">© {new Date().getFullYear()} My Website</span></div></footer>
    </div>
  )
}

export default App
