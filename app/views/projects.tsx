import ProjectInfo from "@/app/components/projectinfo";

import ll_thumb from '@/public/images/thumbnails/licenselibrary.png';
import backcountry_thumb from '@/public/images/thumbnails/backcountry.png';
import nertz_thumb from '@/public/images/thumbnails/nertz.png';
import browser_thumb from '@/public/images/thumbnails/browser.png';
import listener_thumb from '@/public/images/thumbnails/listener.png';

export default function Projects() {
  return (
    <div id="projects">
      <div className="flex flex-col min-h-screen items-center pt-12 md:pt-24">
        
        <h1 className="hidden md:block text-center text-4xl mb-14 font-bold">Projects</h1>
        
        <hr className="block md:hidden w-[40%] border-[#36454F]" />
        <h1 className="block md:hidden text-center text-3xl mt-12 font-bold">Projects</h1>
        
        <ProjectInfo
          img={ll_thumb}
          alt="Screenshot of the License Library app on an iOS device"
          title="License Library"
          badges={["React Native", "Expo", "SQLite"]}
        >
          <p className="text-center md:text-left">
            An iOS app for managing medical licenses details, such as license number, 
            issuing state, and expiration date.
          </p>
          <br />
          <a className="" href="https://www.licenselibrary.app" target="blank">Product website</a>
        </ProjectInfo>

        <ProjectInfo
          img={backcountry_thumb}
          alt="A section of Google Maps showing part of Lake Tahoe and land east of it. A
            blue line highlights the Tahoe Rim Trail, with several red GPS pins along it."
          title="Backcountry follow-along"
          badges={["React", "Python", "Lambda", "API Gateway", "DynamoDB", "S3", "Twilio",
            "Google Maps Platform"
          ]} 
        >
          <p className="text-center md:text-left">
            A website for friends & family to receive updates during backcountry hiking trips. 
            Updates are triggered by SMS/MMS messages to a Twilio number, which can be sent 
            from a satphone in areas without cell service. The embedded map highlights the 
            hike route and displays GPS coordinates dropped as pins along the way.
          </p>
          <br />
          <a href="/projects/backcountry">Project details</a>
        </ProjectInfo>

        <ProjectInfo
          img={browser_thumb}
          alt="Vector art showing a generic bar chart, line chart, and pie chart."
          title="Spotify Browser"
          imgtitle="Charts lovingly made by myself using Figma"
          darkmask
          badges={["React", "Chart.js", "MySQL"]}
        >
          <p className="text-center md:text-left">
            A tool for exploring and visualizing Spotify listening data, either captured 
            through a Spotify Listener (below) or by uploading exported Spotify history data.
            The earliest version used a Python/Flask backend (& had no upload support),
            learning Next.js inspired a later rewrite.
            <br />
            // todo - finish rewrite 🙃
          </p>
          <br />
          <a href="https://github.com/gmoyerbrailean/spotify_browser_flask">Github (flask version)</a>
        </ProjectInfo>

        <ProjectInfo
          img={listener_thumb}
          alt="A graphic of musical notes falling into a funnel with a database below it"
          imgtitle="This graphic also made possible by my humble skills"
          title="Spotify Listener"
          darkmask
          badges={["Python", "MySql"]}
        >
          <p className="text-center md:text-left">
            A Python script that uses the Spotify APIs to poll for currently 
            playing tracks and store them in a database, creating a historical 
            reference of listening data.
          </p>
          <br />
          <a href="https://github.com/gmoyerbrailean/spotify_listener">Github</a>
        </ProjectInfo>

        <ProjectInfo
          img={nertz_thumb}
          alt="Graphic of a stack of four cards fanned out, three showing a blue
            background and the top card flipped over to reveal the ace of hearts."
          imgtitle="Yet another gmoyerbrailean original"
          title="Nertz"
          badges={["React", "Express"]}
        >
          <p className="text-center md:text-left">
            A simple drag-and-drop interface to 
            play <a href="https://bicyclecards.com/how-to-play/nerts">Nerts</a> (aka 
            Nertz, Peanuts, Pounce) with up to four people.
          </p>
          <br />
          <a href="https://github.com/gmoyerbrailean/nertz">Github</a>
        </ProjectInfo>

      </div>
    </div>
  );
}
