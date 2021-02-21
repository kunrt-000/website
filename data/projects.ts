const projects: Project[] = [
  {
    id: 'altus',
    title: 'Altus',
    color: '#24224E',
    link: 'https://github.com/amanharwara/altus',
    category: 'Desktop App',
    workType: 'Design / Development',
    shortDescription:
      'Altus is a free, open-source desktop client for WhatsApp with built-in themes and multiple account support, available for Windows, Mac & Linux!',
    description: `Altus is a free, open-source desktop client for WhatsApp with built-in themes and multiple account support, available for Windows, Mac & Linux!<br/><br/>
    It is made using the Electron framework with HTML, CSS and vanilla JavaScript.<br/><br/>
    I started creating it in the latter half of 2018 because no other desktop client for WhatsApp had a dark theme or an option for custom themes.<br/><br/>
    Altus is still regularly maintained, with over 39,000 downloads as of writing.`,
    screenshots: ['1.png', '2.png'],
  },
  {
    id: 'chartr',
    title: 'Chartr',
    color: '#141C25',
    link: 'https://chartr.vercel.app',
    category: 'Web App',
    workType: 'Design / Development',
    shortDescription:
      'Chartr is a web-app that allows users to create their own music charts and collages, with support for using Spotify & Last.fm statistics.',
    description:
      'Chartr is a web-app that allows users to create their own music charts and collages, with support for using Spotify & Last.fm statistics.',
    screenshots: ['1.png', '2.png'],
  },
  {
    id: 'arm64',
    title: 'Arm-64.com',
    color: '#161616',
    link: 'https://arm-64.com',
    category: 'Website / Blog',
    workType: 'Design / Development',
    shortDescription:
      'Arm-64.com is a blog run by experts at Fosshost about the challenges of planning, coordinating and managing 50u of Arm hardware in multiple, global locations.',
    description: `Arm-64.com is a blog run by experts at Fosshost about the challenges of planning, coordinating and managing 50u of Arm hardware in multiple, global locations.<br/><br/>
    It is completely built with Next.js + Typescript using a flat-file approach and being mostly self-contained without using too many other dependencies.<br/><br/>
    For the design, I went with a modern and clean look while remembering to maintain familiarity and good UX. A healthy amount of white space is used to give the design some room to breath and to keep the user's information overload to the minimal.`,
    screenshots: ['1.png', '2.png', '3.png'],
  },
]

export default projects
