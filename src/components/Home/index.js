/* eslint-disable react/no-unescaped-entities */
import './index.css'

const Home = () => (
  <div className="main">
    <img
      className="logo"
      src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/lgawchgfvcmasjqc3t0v"
      alt="logo"
    />
    <h1>
      Let's <span className="sub-head">Innovate!</span>
    </h1>
    <hr className="underline" />
    <h2>
      How can you help Sunita Sharma (65+ years old) to live a healthier and
      better life?
    </h2>
    <div className="container1">
      <img
        className="woman"
        src="https://us.123rf.com/450wm/rh2010/rh20101910/rh2010191000158/132049604-portrait-of-a-happy-senior-woman-wearing-eyeglasses-in-front-of-eye-chart-in-ophthalmology-office.jpg?ver=6"
        alt="woman"
      />
      <div>
        <p>
          Identify one use case for elderly care (for the age group 65+) and
          create a <span>working prototype</span> to demonstrate your idea using
          technology known to you.
        </p>
        <h3 className="other-heads">Expected Efforts: 2-3 days</h3>
      </div>
    </div>
    <div className="last">
      <h2 className="other-heads">
        What we are looking for this in this activity?
      </h2>
      <hr />
    </div>
    <div className="activity">
      <div className="sub">
        <h3 className="other-heads show">Innovation & Ideation</h3>
        <ul>
          <li>Originality in idea</li>
          <li>Research skill</li>
          <li>Value outcome</li>
        </ul>
      </div>
      <div className="sub">
        <h3 className="other-heads show">Coding Skills</h3>
        <ul>
          <li>Logic</li>
          <li>Rapid Prototyping</li>
          <li> Coding practice</li>
        </ul>
      </div>
      <div className="sub">
        <h3 className="other-heads show">Your magic touch</h3>
        <ul>
          <li>Secret ingredient for going towards expertise</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Home
