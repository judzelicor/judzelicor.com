import Marquee from "react-fast-marquee";

function App() {
  return (
    <>
      <header className={ "headerType__aB" }>
        <ul className={ "menuType__aB" }>
          <li>
            <a href={ "#about" }>&lt;About /&gt;</a>
          </li>
          <li>
            <a href={ "#experience" }>&lt;Experience /&gt;</a>
          </li>
          <li>
            <a href={ "#skills" }>&lt;Skills /&gt;</a>
          </li>
          <li>
            <a href={ "#projects" }>&lt;Projects /&gt;</a>
          </li>
          <li>
            <a href={ "#contact" }>&lt;Contact /&gt;</a>
          </li>
        </ul>
      </header>
      <section id={ "hero" } className={ "heroSectionType__01" }>
        <div className={ "flexContainerType__01" }>
          <div className={ "heroHeaderType__01" }>
            <div className={ "heroHeaderTag__01" }>&lt;h1&gt;</div>
            <h1 className={ "heroHeaderTypeText__01" }>Programming <br /> Hashira</h1>
            <div className={ "heroHeaderTag__02" }>&lt;/h1&gt;</div>
          </div>
          <p className={ "heroDescriptionType__01" }>A homo sapien that mutated and acquired the ability to converse with computers and became a full-stack web developer. He has a passion for problem solving and creating solutions to technological problems that live and breathe on the internet.</p>
          <button className={ "heroButtonType__01" }>Say Hi 👋</button>
        </div>
      </section>
      <section id={ "about" }>
        <div className={ "flexContainerType__02" }>
          <div className={ "sectionHeaderType__a0" }>
            <div className={ "sectionHeaderTag__ac" }>&lt;h2&gt;</div>
            <h2 className={ "sectionHeaderTextType__ad" }>About Me</h2>
            <div className={ "sectionHeaderTag__ae" }>&lt;/h2&gt;</div>
          </div>
          <div className={ "sectionDescription__af" }>
            <p className={ "sectionDescriptionValue_af" }>
              Hello! My name is Judz Philip Elicor. My fellow bipedal mammals call me Judz.
              I’m a student at the University of Alberta currently taking a degree in Biochemistry. 
              I have taught myself programming in the last year and have made it a dream for myself 
              to work a career that is a marriage of two fields that I love, science 🧬 and computer science 💻.
              When I'm not in front of my computer, there is a probability of 50% that I am at the library, a probability of 30% that I'm at
              a nearby Inidigo Store, 20% that I'm at the cafeteria, and 10% chance that I'm a the gym.
            </p>
          </div>
        </div>
      </section>
      <section id={ "skills" }>
        <div style={{ height: "75vh" }}>
          <div className={ "flexContainerType__b1" }>
            <div className={ "sectionHeaderType__a0" }>
              <div className={ "sectionHeaderTag__ac" }>&lt;h2&gt;</div>
              <h2 className={ "sectionHeaderTextType__ad" }>Skills</h2>
              <div className={ "sectionHeaderTag__ae" }>&lt;/h2&gt;</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
            <Marquee style={{ maxWidth: "1480px", margin: "0 auto" }} gradientWidth={"100px"} gradientColor={[2, 5, 9]} pauseOnHover={ true }>
              <ul style={{ display: "flex", alignItems: "center", gap: "100px", marginRight: "100px" }}>
                <li className={ "techLogo" }>
                  <img width={50} src={ "/images/js-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={50} src={ "/images/css-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={50} src={ "/images/html-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={60} src={ "/images/react-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={60} src={ "/images/docker-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={60} src={ "/images/python-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={60} src={ "/images/postgresql-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={60} src={ "/images/d3-logo.svg" } />
                </li>
              </ul>
              <ul style={{ display: "flex", alignItems: "center", gap: "100px", marginRight: "100px" }}>
                <li className={ "techLogo" }>
                  <img width={50} src={ "/images/js-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={50} src={ "/images/css-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={50} src={ "/images/html-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={60} src={ "/images/react-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={60} src={ "/images/docker-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={60} src={ "/images/python-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={60} src={ "/images/postgresql-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={60} src={ "/images/d3-logo.svg" } />
                </li>
              </ul>
            </Marquee>
            <Marquee style={{ maxWidth: "1480px", margin: "0 auto" }} direction={ "right" } gradientWidth={"100px"} gradientColor={[2, 5, 9]} pauseOnHover={ true }>
              <ul style={{ display: "flex", alignItems: "center", gap: "100px", marginRight: "100px" }}>
                <li className={ "techLogo" }>
                  <img width={100} src={ "/images/git-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={150} src={ "/images/mongodb-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={150} src={ "/images/node-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={120} src={ "/images/django-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={150} src={ "/images/nginx-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={80} src={ "/images/mysql-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={60} src={ "/images/postgresql-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={60} src={ "/images/php-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={120} src={ "/images/golang-logo.svg" } />
                </li>
              </ul>
              <ul style={{ display: "flex", alignItems: "center", gap: "100px", marginRight: "100px" }}>
                <li className={ "techLogo" }>
                  <img width={100} src={ "/images/git-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={150} src={ "/images/mongodb-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={150} src={ "/images/node-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={120} src={ "/images/django-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={150} src={ "/images/nginx-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={80} src={ "/images/mysql-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={60} src={ "/images/postgresql-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={80} src={ "/images/php-logo.svg" } />
                </li>
                <li className={ "techLogo" }>
                  <img width={120} src={ "/images/golang-logo.svg" } />
                </li>
              </ul>
            </Marquee>
          </div>
        </div>
      </section>
      <section id={ "experience" }>
        <div className={ "flexContainerType__b1" }>
          <div className={ "sectionHeaderType__a0" }>
            <div className={ "sectionHeaderTag__ac" }>&lt;h2&gt;</div>
            <h2 className={ "sectionHeaderTextType__ad" }>Experience</h2>
            <div className={ "sectionHeaderTag__ae" }>&lt;/h2&gt;</div>
          </div>
          <p className={ "heroDescriptionType__01" }>
            I’m currently looking 👀 for opportunities to work as an intern or a front-end developer and contribute to a 
            team using my curent skillset and grow in the process. I am also the founder of Aldlogia Solutions, a web development and 
            design agency and have been a freelancer in the past couple of months. ✨
          </p>
        </div>
      </section>
    </>
  )
}

export default App;