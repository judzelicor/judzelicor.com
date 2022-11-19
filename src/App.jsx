import Marquee from "react-fast-marquee";
import {
  Button
} from "./components";

function App() {
  return (
    <>
      <header className={"headerType__aB"}>
        <div className={"flexWrapperType__H3r0"}>
          <div style={{ width: "150px" }}>
            <a href={"/"}>
              <img style={{ width: "100%" }} src={"/images/brand-logo.svg"} />
            </a>
          </div>
          <ul className={"menuType__H3r0"}>
            <li>
              <a href={"#about"}>&lt;About /&gt;</a>
            </li>
            <li>
              <a href={"#experience"}>&lt;Experience /&gt;</a>
            </li>
            <li>
              <a href={"#skills"}>&lt;Skills /&gt;</a>
            </li>
            <li>
              <a href={"#projects"}>&lt;Projects /&gt;</a>
            </li>
            <li>
              <a href={"#contact"}>&lt;Contact /&gt;</a>
            </li>
            <li>
              <a href={"https://blog.judzelicor.com"} target={"_blank"}>&lt;Blog /&gt;</a>
            </li>
          </ul>
        </div>
      </header>
      <section id={"hero"} className={"heroSectionType__01"}>
        <div className={"flexContainerType__01"}>
          <div className={"heroHeaderType__01"}>
            <div className={"heroHeaderTag__01"}>&lt;h1&gt;</div>
            <h1 className={"heroHeaderTypeText__01"}>Programming <br /> Hashira</h1>
            <div className={"heroHeaderTag__02"}>&lt;/h1&gt;</div>
          </div>
          <p className={"heroDescriptionType__01"}>A homo sapien that mutated and acquired the ability to converse with computers and became a full-stack web developer. He has a passion for problem solving and creating solutions to technological problems that live and breathe on the internet.</p>
          <button className={"heroButtonType__01"} onClick={() => window.location.href = "mailto:judzphilipelicor@outlook.com"}>Say Hi <span style={{ display: "inline-block" }} data-animation={"waving-animation"}>👋</span></button>
        </div>
      </section>
      <section id={"about"}>
        <div className={"flexContainerType__5b0T"}>
          <div className={"sectionHeaderType__a0"}>
            <div className={"sectionHeaderTag__ac"}>&lt;h2&gt;</div>
            <h2 className={"sectionHeaderTextType__ad"}>About Me</h2>
            <div className={"sectionHeaderTag__ae"}>&lt;/h2&gt;</div>
          </div>
          <div className={"sectionDescription__af"}>
            <p className={"sectionDescriptionValue_af"}>
              Hello! My name is Judz Philip Elicor. My fellow bipedal mammals call me Judz.
              I’m a student at the University of Alberta currently taking a degree in Biochemistry.
              I have taught myself programming in the last year and have made it a dream for myself
              to work a career that is a marriage of two fields that I love, science 🧬 and computer science 💻.
              When I'm not in front of my computer, there is a probability of 50% that I am at the library, a probability of 25% that I'm at
              a nearby Inidigo Store, 20% that I'm at the cafeteria, and 5% chance that I'm at a gym.
            </p>
          </div>
        </div>
      </section>
      <section id={"skills"}>
        <div className={"skillsWrapper__sK1l"}>
          <div className={"flexContainerType__sK1l"}>
            <div className={"sectionHeaderType__a0"}>
              <div className={"sectionHeaderTag__ac"}>&lt;h2&gt;</div>
              <h2 className={"sectionHeaderTextType__ad"}>Skills</h2>
              <div className={"sectionHeaderTag__ae"}>&lt;/h2&gt;</div>
            </div>
          </div>
          <div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
            <Marquee style={{ maxWidth: "1480px", margin: "0 auto" }} gradientWidth={"100px"} gradientColor={[2, 5, 9]} pauseOnHover={true}>
              <ul style={{ display: "flex", alignItems: "center", gap: "100px", marginRight: "100px", overflow: "visible", padding: "25px 0" }}>
                <li className={"techLogo"}>
                  <img width={50} src={"/images/js-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"javascript"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={50} src={"/images/css-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"css"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={50} src={"/images/html-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"html"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={60} src={"/images/react-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"react"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={60} src={"/images/docker-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"docker"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={60} src={"/images/python-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"python"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={60} src={"/images/d3-logo.svg"} />
                </li>
                <li className={"techLogo"}>
                  <img width={140} src={"/images/webpack-logo.svg"} />
                </li>
                <li className={"techLogo"}>
                  <img width={50} src={"/images/typescript-logo.svg"} />
                </li>
              </ul>
              <ul style={{ display: "flex", alignItems: "center", gap: "100px", marginRight: "100px" }}>
                <li className={"techLogo"}>
                  <img width={50} src={"/images/js-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"javascript"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={50} src={"/images/css-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"css"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={50} src={"/images/html-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"html"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={60} src={"/images/react-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"react"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={60} src={"/images/docker-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"docker"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={60} src={"/images/python-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"python"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={60} src={"/images/d3-logo.svg"} />
                </li>
                <li className={"techLogo"}>
                  <img width={140} src={"/images/webpack-logo.svg"} />
                </li>
                <li className={"techLogo"}>
                  <img width={50} src={"/images/typescript-logo.svg"} />
                </li>
              </ul>
            </Marquee>
            <Marquee style={{ maxWidth: "1480px", margin: "0 auto" }} direction={"right"} gradientWidth={"100px"} gradientColor={[2, 5, 9]} pauseOnHover={true}>
              <ul style={{ display: "flex", alignItems: "center", gap: "100px", marginRight: "100px" }}>
                <li className={"techLogo"}>
                  <img width={100} src={"/images/git-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"git"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={150} src={"/images/mongodb-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"mongodb"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={150} src={"/images/node-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"node"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={120} src={"/images/django-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"django"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={150} src={"/images/nginx-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"nginx"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={80} src={"/images/mysql-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"mysql"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={60} src={"/images/postgresql-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"postgresql"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={80} src={"/images/php-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"php"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={100} src={"/images/golang-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"golang"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={60} src={"/images/java-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"java"}></div>
                </li>
              </ul>
              <ul style={{ display: "flex", alignItems: "center", gap: "100px", marginRight: "100px" }}>
                <li className={"techLogo"}>
                  <img width={100} src={"/images/git-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"git"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={150} src={"/images/mongodb-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"mongodb"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={150} src={"/images/node-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"node"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={120} src={"/images/django-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"django"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={150} src={"/images/nginx-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"nginx"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={80} src={"/images/mysql-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"mysql"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={60} src={"/images/postgresql-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"postgresql"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={80} src={"/images/php-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"php"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={100} src={"/images/golang-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"golang"}></div>
                </li>
                <li className={"techLogo"}>
                  <img width={60} src={"/images/java-logo.svg"} />
                  <div className={"techLogoGlow"} data-glow={"java"}></div>
                </li>
              </ul>
            </Marquee>
          </div>
        </div>
      </section>
      <section id={"projects"}>
        <div className={"flexContainerType__Pr0J"}>
          <div className={"sectionHeaderType__a0"}>
            <div className={"sectionHeaderTag__ac"}>&lt;h2&gt;</div>
            <h2 className={"sectionHeaderTextType__ad"}>Projects</h2>
            <div className={"sectionHeaderTag__ae"}>&lt;/h2&gt;</div>
          </div>
          <div style={{ position: "relative" }}>
            <div className={"verticalLine__Pr0J"}></div>
            <ul className={"projectCards__Pr0J"}>
              <li>
                <img className={"dot__Pr0J"} src={"/images/dot.svg"} />
                <div>
                  <div style={{ alignItems: "center", display: "flex", marginBottom: "1rem" }}>
                    <h3 className={"projectCardHeaderType__Pr0J"}>
                      <a href={"https://github.com/judzelicor/discovery-covid"} target={"_blank"}>Discovery Covid</a>
                    </h3>
                    <a href={ "https://github.com/judzelicor/discovery-covid" } target={ "_blank" }>
                      <div style={{ width: "14px", marginLeft: "14px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <g fill="#54626f">
                            <path d="M307.148 35.148 203.081 139.214c-.201.2-.326.443-.526.645 25.637-3.734 51.974-1.174 76.388 8.346l70.63-70.63c23.399-23.399 61.454-23.399 84.853 0 23.399 23.397 23.399 61.454 0 84.851-3.99 3.992-110.083 110.085-104.066 104.066-23.584 23.586-62.276 22.577-84.853 0-11.693-11.693-30.731-11.693-42.426 0l-18.214 18.214c5.052 8.584 10.844 16.844 18.214 24.214 44.44 44.44 120.934 47.99 169.061.526.201-.2.443-.326.645-.526l104.066-104.066c46.862-46.864 46.862-122.842 0-169.706-46.864-46.864-122.841-46.864-169.705 0z" data-original="#000000" />
                            <path d="m233.285 363.568-70.858 70.858c-23.397 23.399-61.454 23.399-84.851 0-23.399-23.399-23.399-61.454 0-84.853L181.869 245.28c23.584-23.584 62.276-22.577 84.853 0 11.693 11.695 30.732 11.695 42.426 0l18.214-18.214c-5.052-8.584-10.844-16.844-18.214-24.212-44.355-44.357-120.793-48.131-169.061-.527-.201.2-.443.326-.645.527L35.148 307.148c-46.862 46.862-46.864 122.842 0 169.706 46.864 46.862 122.844 46.862 169.706 0l104.293-104.295c.201-.2.326-.441.526-.645-25.637 3.734-51.973 1.174-76.388-8.346z" data-original="#000000" />
                          </g>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <p className={"projectCardParagraph__Pr0J"}>A web application where visitors are able to obtain updated information surrounding COVID-19 and visualize it in an interavtivce map.</p>
                </div>
              </li>
              <li>
                <img className={"dot__Pr0J"} src={"/images/dot.svg"} />
                <div>
                  <div style={{ alignItems: "center", display: "flex", marginBottom: "1rem" }}>
                    <h3 className={"projectCardHeaderType__Pr0J"}>
                      <a href={"https://github.com/judzelicor/clothing-ecommerce"} target={"_blank"}>Oubjects Ecommerce</a>
                    </h3>
                    <a href={ "https://github.com/judzelicor/clothing-ecommerce" } target={ "_blank" }>
                      <div style={{ width: "14px", marginLeft: "14px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <g fill="#54626f">
                            <path d="M307.148 35.148 203.081 139.214c-.201.2-.326.443-.526.645 25.637-3.734 51.974-1.174 76.388 8.346l70.63-70.63c23.399-23.399 61.454-23.399 84.853 0 23.399 23.397 23.399 61.454 0 84.851-3.99 3.992-110.083 110.085-104.066 104.066-23.584 23.586-62.276 22.577-84.853 0-11.693-11.693-30.731-11.693-42.426 0l-18.214 18.214c5.052 8.584 10.844 16.844 18.214 24.214 44.44 44.44 120.934 47.99 169.061.526.201-.2.443-.326.645-.526l104.066-104.066c46.862-46.864 46.862-122.842 0-169.706-46.864-46.864-122.841-46.864-169.705 0z" data-original="#000000" />
                            <path d="m233.285 363.568-70.858 70.858c-23.397 23.399-61.454 23.399-84.851 0-23.399-23.399-23.399-61.454 0-84.853L181.869 245.28c23.584-23.584 62.276-22.577 84.853 0 11.693 11.695 30.732 11.695 42.426 0l18.214-18.214c-5.052-8.584-10.844-16.844-18.214-24.212-44.355-44.357-120.793-48.131-169.061-.527-.201.2-.443.326-.645.527L35.148 307.148c-46.862 46.862-46.864 122.842 0 169.706 46.864 46.862 122.844 46.862 169.706 0l104.293-104.295c.201-.2.326-.441.526-.645-25.637 3.734-51.973 1.174-76.388-8.346z" data-original="#000000" />
                          </g>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <p className={"projectCardParagraph__Pr0J"}>An ecommerce website for a fictional clothing brand.</p>
                </div>
              </li>
              <li>
                <img className={"dot__Pr0J"} src={"/images/dot.svg"} />
                <div>
                  <div style={{ alignItems: "center", display: "flex", marginBottom: "1rem" }}>
                    <h3 className={"projectCardHeaderType__Pr0J"}>
                      <a href={"https://github.com/judzelicor/postduck"} target={"_blank"}>Postduck</a>
                    </h3>
                    <a href={ "https://github.com/judzelicor/postduck" } target={ "_blank" }>
                      <div style={{ width: "14px", marginLeft: "14px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <g fill="#54626f">
                            <path d="M307.148 35.148 203.081 139.214c-.201.2-.326.443-.526.645 25.637-3.734 51.974-1.174 76.388 8.346l70.63-70.63c23.399-23.399 61.454-23.399 84.853 0 23.399 23.397 23.399 61.454 0 84.851-3.99 3.992-110.083 110.085-104.066 104.066-23.584 23.586-62.276 22.577-84.853 0-11.693-11.693-30.731-11.693-42.426 0l-18.214 18.214c5.052 8.584 10.844 16.844 18.214 24.214 44.44 44.44 120.934 47.99 169.061.526.201-.2.443-.326.645-.526l104.066-104.066c46.862-46.864 46.862-122.842 0-169.706-46.864-46.864-122.841-46.864-169.705 0z" data-original="#000000" />
                            <path d="m233.285 363.568-70.858 70.858c-23.397 23.399-61.454 23.399-84.851 0-23.399-23.399-23.399-61.454 0-84.853L181.869 245.28c23.584-23.584 62.276-22.577 84.853 0 11.693 11.695 30.732 11.695 42.426 0l18.214-18.214c-5.052-8.584-10.844-16.844-18.214-24.212-44.355-44.357-120.793-48.131-169.061-.527-.201.2-.443.326-.645.527L35.148 307.148c-46.862 46.862-46.864 122.842 0 169.706 46.864 46.862 122.844 46.862 169.706 0l104.293-104.295c.201-.2.326-.441.526-.645-25.637 3.734-51.973 1.174-76.388-8.346z" data-original="#000000" />
                          </g>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <p className={"projectCardParagraph__Pr0J"}>An online social platform for posting bursts of short, 150 character limited paragraphs. In other words, a twitter clone.</p>
                </div>
              </li>
              <li>
                <img className={"dot__Pr0J"} src={"/images/dot.svg"} />
                <div>
                  <div style={{ alignItems: "center", display: "flex", marginBottom: "1rem" }}>
                    <h3 className={"projectCardHeaderType__Pr0J"}>
                      <a href={"https://github.com/judzelicor/otenki-app"} target={"_blank"}>Otenki App</a>
                    </h3>
                    <a href={ "https://github.com/judzelicor/otenki-app" } target={ "_blank" }>
                      <div style={{ width: "14px", marginLeft: "14px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <g fill="#54626f">
                            <path d="M307.148 35.148 203.081 139.214c-.201.2-.326.443-.526.645 25.637-3.734 51.974-1.174 76.388 8.346l70.63-70.63c23.399-23.399 61.454-23.399 84.853 0 23.399 23.397 23.399 61.454 0 84.851-3.99 3.992-110.083 110.085-104.066 104.066-23.584 23.586-62.276 22.577-84.853 0-11.693-11.693-30.731-11.693-42.426 0l-18.214 18.214c5.052 8.584 10.844 16.844 18.214 24.214 44.44 44.44 120.934 47.99 169.061.526.201-.2.443-.326.645-.526l104.066-104.066c46.862-46.864 46.862-122.842 0-169.706-46.864-46.864-122.841-46.864-169.705 0z" data-original="#000000" />
                            <path d="m233.285 363.568-70.858 70.858c-23.397 23.399-61.454 23.399-84.851 0-23.399-23.399-23.399-61.454 0-84.853L181.869 245.28c23.584-23.584 62.276-22.577 84.853 0 11.693 11.695 30.732 11.695 42.426 0l18.214-18.214c-5.052-8.584-10.844-16.844-18.214-24.212-44.355-44.357-120.793-48.131-169.061-.527-.201.2-.443.326-.645.527L35.148 307.148c-46.862 46.862-46.864 122.842 0 169.706 46.864 46.862 122.844 46.862 169.706 0l104.293-104.295c.201-.2.326-.441.526-.645-25.637 3.734-51.973 1.174-76.388-8.346z" data-original="#000000" />
                          </g>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <p className={"projectCardParagraph__Pr0J"}>A web application for obtaining insight about the weather of any city. Visualize daily weather on a graph and other statistics.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id={"experience"}>
        <div className={"flexContainerType__3xPs"}>
          <div className={"sectionHeaderType__a0"}>
            <div className={"sectionHeaderTag__ac"}>&lt;h2&gt;</div>
            <h2 className={"sectionHeaderTextType__ad"}>Experience</h2>
            <div className={"sectionHeaderTag__ae"}>&lt;/h2&gt;</div>
          </div>
          <p className={"heroDescriptionType__3xPs"}>
            I’m currently looking 👀 for opportunities to work as an intern or a front-end developer and contribute to a
            team using my curent skillset and grow in the process. I am also the founder of Aldlogia Solutions, a web development and
            design agency and have been a freelancer in the past couple of months. ✨
          </p>
        </div>
      </section>
      <section id={"contact"}>
        <div className={"flexContainerType__f0s3"}>
          <div className={"sectionHeaderType__a0"}>
            <div className={"sectionHeaderTag__ac"}>&lt;h2&gt;</div>
            <h2 className={"sectionHeaderTextType__ad"}>Contact Me</h2>
            <div className={"sectionHeaderTag__ae"}>&lt;/h2&gt;</div>
          </div>
          <p className={"descriptionType__f0s3"}>My inbox is always open for any and new ooprtunities. Whether you have a question, an opportunity, or simply wanted to engage in a friendly chatter, I'll do my best to get back to you! </p>
          <button className={"buttonType__f0s3"} onClick={() => window.location.href = "mailto:judzphilipelicor@outlook.com"}>Let's Get In Touch 📩</button>
        </div>
      </section>
    </>
  )
}

export default App;