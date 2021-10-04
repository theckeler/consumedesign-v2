import { knowledge } from "../data/knowlege.json";
import { experienced } from "../data/experienced.json";
import { proficient } from "../data/proficient.json";
import { expertise } from "../data/expertise.json";
import { clients } from "../data/clients.json";
import "../css/home.min.css";

import bgImg from "../images/20190518_081913.jpg";
import { ReactComponent as Logo } from "../images/logo.svg";

var returnSorted = (sortMe) => {
  sortMe.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  return sortMe;
};

const knowledgeSorted = returnSorted(knowledge);
const experiencedSorted = returnSorted(experienced);
const proficientSorted = returnSorted(proficient);
const expertiseSorted = returnSorted(expertise);
const clientsSorted = returnSorted(clients);

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="overlay">
          <Logo />
        </div>
        <img src={bgImg} alt="" />
        <h1 className="visually-hidden">consume:design Home</h1>
      </section>

      <section>
        <div className="skew">
          <h2>about</h2>
        </div>
        <p>
          Experienced freelance graphic designer with a demonstrated history of
          working in the interactive design industry. Skilled in jQuery,
          JavaScript, CSS, HTML, Sass, Responsive Web Design, Web Design, Page
          Layout, and Cross-browser Compatibility. Strong arts and design
          professional with a Bachelor of Arts focused in Visual Communication &
          Design from Kent State University.
        </p>

        <p>
          Provided print design, website design, website UX, website
          programming, and website UI for local and national clients.
        </p>

        <p>
          <strong>Current and past client list includes:</strong>
        </p>

        <ul>
          {clientsSorted.map((obj) => {
            return <li key={obj}>{obj}</li>;
          })}
        </ul>
      </section>

      <section>
        <div className="skew">
          <h2>skills</h2>
        </div>
        <p>Expertise in</p>
        <ul>
          {expertiseSorted.map((obj) => {
            return <li key={obj}>{obj}</li>;
          })}
        </ul>

        <p>Proficient in</p>
        <ul>
          {proficientSorted.map((obj) => {
            return <li key={obj}>{obj}</li>;
          })}
        </ul>

        <p>Experienced in</p>
        <ul>
          {experiencedSorted.map((obj) => {
            return <li key={obj}>{obj}</li>;
          })}
        </ul>

        <p>Knowlege of</p>
        <ul>
          {knowledgeSorted.map((obj) => {
            return <li key={obj}>{obj}</li>;
          })}
        </ul>
      </section>

      <section>
        <div className="skew">
          <h2>experience</h2>
        </div>
        <div className="grid">
          <ul className="no-list">
            <li className="title">
              Freelance Graphic Designer 12/1996 - Present
            </li>
            <li>
              <p>
                Provided print design, website design, website UX, website
                programming, and website UI for local and national clients.
              </p>
              <p>
                <strong>Clients include:</strong> Alliance Bicycles, Bike
                Cleveland, Cleveland Film Society, Curt Goodrich Bicycles, Don
                Walker Cycles, Dream Hammock, Endless Bikes, Ibis Cycles,
                LiteAF, Kirk Frameworks, Modern Dog Design, Montana Fine
                Furniture, Mtn Air Roasting, Naked Bicycles &amp; Design,
                Nesnadny + Schwartz, North AmericanHandmade Bicycle Show,
                Pursuit Cycles, Rockgeist, Strong Frames, UGQ Outdoor, Werner
                Paddles
              </p>
            </li>
          </ul>

          <ul className="no-list">
            <li className="title">
              UX/UI Graphic Designer, MTD Products 7/2021- Present
            </li>
            <li>
              <p>
                Working within Salesforce to design compelling creative for
                Troybilt.com, Cubcadet.com and MTD's other B2C websites that
                includes homepage, landing pages, banners, graphic-headers, and
                eSpots. Leverage consumer insight studies and findings to
                establish the best overall design elements to include in UX
                design experiences. Plan and run user tests and other design
                research to inform design decisions. Assist channel and
                eCommerce team on development. Collaborate and brainstorm with
                cross-functional teams including agencies on design execution
                for short term and long-term projects.
              </p>
              <p>
                <strong>Clients include:</strong> Cub Cadet, Troy-Bilt, Rover,
                MTD Genuine Parts, WOLF-Garten, Yard Machines
              </p>
            </li>
          </ul>

          <ul className="no-list">
            <li className="title">
              UI Developer, NAS Recruitment Innovation 8/2019 - 7/2021
            </li>
            <li>
              <p>
                Created and maintained C# HTML webpages in ASP.NET Razor using
                HTML, SASS, Javascript, and jQuery from provided comps,
                Developed a new BASE CSS for the NAS Active Platform,
                Implemented new scripting language, Created new processes for
                increased efficiency,{" "}
                <strong>Awarded Q4 2020 Employee of the Quarter.</strong>
              </p>
              <p>
                <strong>Clients include:</strong> Bahama Breeze, BigLots,
                Cinemark, Cheddar’s Scratch Kitchen, Clarivate, Darden SRG,
                DentWizard, Longhorn Steakhouse, Olive Garden, OU Medicine, Papa
                John’s, Red Lobster, ROSS, United Rentals, Value City Furniture
              </p>
            </li>
          </ul>

          <ul className="no-list">
            <li className="title">DigitalDay</li>
            <li>Interactive Designer</li>
            <li>Dates Employed: Jun 2000 – Nov 2001</li>
          </ul>

          <ul className="no-list">
            <li className="title">Digital Navigation</li>
            <li>Interactive Designer</li>
            <li>Dates Employed: Jul 1999 – Jul 2000</li>
          </ul>

          <ul className="no-list">
            <li className="title">Karen Skunta &amp; Company</li>
            <li>Interactive Designer</li>
            <li>Dates Employed: Jun 1998 – Jun 1999</li>
          </ul>

          <ul className="no-list">
            <li className="title">Cleveland Live (cleveland.com)</li>
            <li>Interactive Designer</li>
            <li>Dates Employed: Jan 1997 – Jun 1998</li>
          </ul>
        </div>
      </section>
    </>
  );
}
