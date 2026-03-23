import Image from 'next/image'

import arch from '@/public/images/projects/backcountry/architecture.png';
import timeline_multiple from '@/public/images/projects/backcountry/timeline_multiple.png';
import mobile_map from '@/public/images/projects/backcountry/mobile_map.png';
import mobile_timeline from '@/public/images/projects/backcountry/moble_timeline.png';
import editmessage from '@/public/images/projects/backcountry/editmessage.png';
import login from '@/public/images/projects/backcountry/login.png';

export default function Page() {

  return (
    <>
      <h1 className="text-2xl mb-4">Backcountry follow-along</h1>
      <p className="my-4">
        I created this site after my partner and I decided to thruhike <a
          href="https://www.greenmountainclub.org/the-long-trail/"
          target="blank"
        >Vermont's Long Trail</a> in 2024,
        so we could keep our friends and family updated without having to text everyone
        individually. The idea was that we could post updates and photos from the trip, and also
        have a way to leave GPS breadcrumbs to show our progression without having to use a 
        specific service like Garmin Explore.
      </p>
      <Image
        src={timeline_multiple.src}
        width={timeline_multiple.width}
        height={timeline_multiple.height}
        alt="Screenshot from the website. The left side is a map of Lake Tahoe, with a blue line around it
          denoting the Tahoe Rim Trail. Three read dots along an eastern stretch of trail are GPS check-ins
          from the trip. The right side shows a timeline of updates, styled as text messages with timestamps,
          one of which containing a photo of Greg and Nicole with backpacks on at the beginning of the trail."
        className="my-4"
        loading="eager"
      />
      <p className="text-sm mt-[-12] mb-2">Screenshot of the site during our 2025 Tahoe Rim Trail trip</p>
      <p className="my-4">
        The premise is pretty simple: using Twilio, I set up a phone number we could text updates and photos to.
        When Twilio receives a text from one of us, it POSTs the message details to an API for processing,
        adding them to the backend (DynamoDB & S3) to be served up by the website.
      </p>
      <Image
        src={arch.src}
        width={arch.width / 2}
        height={arch.height / 2}
        alt="Box-and arrow architecture diagram showing the transfer of 
          information from phone to Twilio to the backend to the website"
        className="my-4"
      />
      <p className="text-sm mt-[-12]">Architecture diagram</p>
      <p className="my-4"> 
        When sending a message from our Garmins (or using the Garmin app), GPS coordinates are
        added to the message, which are parsed out and used to add pins (red dots) onto the
        trail route (blue line), showing our progress. The map is powered by the Google Maps
        Platform, and uses a GPX file of the hike route to create the blue line.
      </p>
      <p className="my-4">The site is mobile-friendly, with the map in a drawer and toggleable.</p>
      <div className="flex flex-col items-center md:flex-row w-full md:w-[80%] md:justify-around">
        <Image
          src={mobile_map.src}
          height={mobile_map.height / 2}
          width={mobile_map.width / 2}
          alt="A mobile screenshot of the map view, showing Lake Tahoe, with a blue line around it
            denoting the Tahoe Rim Trail. Three read dots along an eastern stretch of trail are GPS check-ins
            from the trip."
          className="my-4"
        />
        <Image
          src={mobile_timeline.src}
          height={mobile_timeline.height / 2}
          width={mobile_timeline.width / 2}
          alt="A mobile screenshot of the timeline view, styled as a text message with
            a photo of a tent in front of tall pine trees."
          className="my-4"
        />
      </div>
      <p className="my-4">Admins (us, hahaha) can edit messages.</p>
      <Image
        src={editmessage.src}
        height={editmessage.height / 2}
        width={editmessage.width / 2}
        alt="A screenshot of the edit message modal."
        className="my-4"
      />
      <p className="my-4">
        And, importantly, an auth layer to ensure that only people we give access
        to can see our updates. In addition to the site's authN/authZ, the POST endpoint
        called by Twilio is configured to only accept messages from allowlisted
        phone numbers.
      </p>
      <Image
        src={login.src}
        height={login.height / 2}
        width={login.width / 2}
        alt="A screenshot of the login form."
        className="my-4"
      />
      <p className="my-4">
        I'm currently working on a re-write of the site, moving off of AWS infrastructure and onto
        Next.js/Vercel, as well as exploring new UI libraries (and hoping to be done before our
        next trip!).
      </p>
    </>
  )
}