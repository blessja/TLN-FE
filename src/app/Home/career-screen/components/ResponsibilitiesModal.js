import React from 'react';

const ResponsibilitiesModal = ({ position, onApply, onClose }) => {
  const responsibilitiesData = {
    "Business Development": {
      responsibilities: [
        "Generating leads intensely and following up with prospects",
        "Communicating and priming the leads through channels like email, WhatsApp & calls",
        "Initiating telephonic conversations with potential prospects",
        "Carrying out the sales process to attract new clients & maintain fruitful relationships with them",
        "Researching and identifying new market opportunities",
        "Assisting the organization's sales and growth efforts by contributing to new customer acquisition",
        "Achieving the weekly targets in a high-pressure performance-driven environment",
        "Handling social media, marketing, and PR as well"
      ],
      skills: [
        "Bachelor's Degree in relevant field",
        "MS Office",
        "English Proficiency",
        "Proactive and exude strong customer service and interpersonal skills",
        "Excellent selling, communication, and negotiation skills"
      ]
    },
    // Add data for other positions here
    "Operations": {
      responsibilities: [
        "Create and provide meeting links. Provide study material, forms, and links to be filled by the students and trainers before and after the batch starts and ends.", 
        "Work on collecting queries from the client and address those queries, Coordinate with the core team, follow up on the issue resolved, and function as the efficient human alarm for trainers and students of different courses at TLN.",
        "Arrange demos for new candidates aiming for the position of language trainer at the firm, namely trainers of spoken English, IELTS, Korean, Japanese, French, Spanish, Mandarin & German.",
        "Handle the creation of monthly plans and calendars, schedule, and monitor the online meetings once in a while.",
        "Set the Google Drive folders, management of documents, and hygiene of Sheets.",
        "Make sure that the client has received receipts, letters, certificates, materials, and acknowledgment of the essentials for every batch.",
        "Get in touch with the existing clients and approach them for upgrades."
    ],
      skills: [
        "MS- Office.",
        "Excellent organizational skills.",
        "Strong Analytical and Problem-solving skills.",
        "Client relationship management.",
        "English Proficiency (Spoken & Written).",
        "Ability to network."
    ]
    },
    "Graphic Designer": {
      responsibilities: [
        "Responsible for delivering real-time designs relevant to social media platforms that engage the audience (Facebook, Instagram, etc.).",
        "Understand and maintain The Language Network's brand standards when executing all creative material.",
        "Use graphic design software and work with a wide variety of media.",
        "Ability to create animated GIFs.",
        "Collaborate with the team to ensure consistency of designs across various media platforms.",
        "Understand and maintain the Language Network brand standards when executing all creative material.",
        "Ability to complete projects according to deadline.",
        "Collaborate with the Graphic Design Manager to develop design concepts based on feedback received.",
        "Assemble final presentation material for printing as needed."
    ],
      skills: [
       "Software Knowledge of Adobe Illustrator, Adobe Photoshop, Adobe InDesign, Adobe Lightroom, Adobe Premiere, and After Effects is preferable.",
       "A degree or diploma in a relevant field is preferred, but if you have relevant skills and are good at your work, nothing else matters! (Freshers can apply!)",
       "Strong creative and analytical skills.",
       "Compelling portfolio of graphic design work."
    ]
    },
    "Marketing": {
      responsibilities: [
        "Strong creative and analytical skills.",
        "Compelling portfolio of graphic design work.",
        "Create awareness and develop the brand.",
        "Communicate with our target audiences and build customer relationships.",
        "Help with marketing plans, advertising, direct marketing, and strategizing campaigns.",
        "Source advertising opportunities and push ads in press media and radio.",
        "Write and proofread marketing copy for both online and print campaigns.",
        "Produce creative content, including videos and blog posts.",
        "Organize and attend events such as conferences, seminars, receptions, and exhibitions.",
        "Source and secure sponsorship.",
        "Conduct market research, for example using customer questionnaires and focus groups.",
        "Evaluate and review marketing campaigns, advertising, and SEO to make sure the correct mediums are being used and campaigns are effective.",
        "Research current benchmark trends and audience preferences.",
        "Design and implement social media strategy to align with business goals.",
        "Set specific objectives and report on ROI.",
        "Generate, edit, publish, and share engaging content daily (e.g. original text, photos, videos, and news).",
        "Monitor SEO and web traffic metrics.",
        "Collaborate with other teams, like marketing, sales, and customer service to ensure brand consistency.",
        "Communicate with followers, respond to queries promptly, and monitor customer reviews.",
        "Oversee social media accounts’ design (e.g. Facebook timeline cover, profile pictures, and blog layout).",
        "Suggest and implement new features to develop brand awareness, like promotions and competitions.",
        "Stay up-to-date with current technologies and trends in social media, design tools, and applications."
    ],
      skills: [
        "Knowledge of marketing, advertising, and branding.",
        "Strong written and verbal communication skills.",
        "Experience with SEO, SEM, and social media.",
        "Proficiency in analytics tools.",
        "Creativity and out-of-the-box thinking.",
        "Strong project management skills.",
        "Degree in Marketing, Business, or relevant field."
    ]
    },
    "Business Analyst": {
      responsibilities: [
        "Analyze the company’s business processes and identify opportunities for improvement.",
        "Collect and interpret data to inform decision-making.",
        "Collaborate with internal teams and stakeholders to understand business needs.",
        "Develop strategies to enhance business operations and efficiency.",
        "Assist in the development of business cases for projects.",
        "Create reports and presentations to communicate findings and recommendations.",
        "Monitor industry trends and provide insights for business strategy.",
        "Conduct market research to identify opportunities and threats."
    ],
      skills: [
        "Strong analytical and problem-solving skills.",
        "Experience in business analysis or related fields.",
        "Proficiency in business analytics tools and software.",
        "Excellent communication and presentation skills.",
        "Ability to work independently and as part of a team.",
        "Bachelor’s degree in Business Administration, Economics, or related field."
    ]
    },
    "Designer": {
      responsibilities: [
        "Create wireframes, prototypes, and designs for websites, apps, and other digital products.",
        "Ensure designs align with brand identity and user experience goals.",
        "Collaborate with developers to ensure the final product aligns with design specifications.",
        "Conduct user research and testing to improve design solutions.",
        "Stay up-to-date with industry trends and design tools.",
        "Ensure designs are responsive and compatible with different devices.",
        "Provide design solutions that are both functional and aesthetically pleasing."
    ],
      skills: [
        "Proficiency in design tools like Adobe XD, Sketch, Figma, or similar.",
        "Experience with wireframing, prototyping, and user interface design.",
        "Strong knowledge of UX principles and best practices.",
        "Attention to detail and creative problem-solving skills.",
        "Ability to work collaboratively with teams.",
        "Degree in Design or related field."
    ]
    }
  };

  const { responsibilities, skills } = responsibilitiesData[position] || { responsibilities: [], skills: [] };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-auto z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto m-5 md:m-0">
        <h3 className="text-xl font-bold mb-4">{position}</h3>
        
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <h4 className="text-lg font-semibold mb-2">Responsibilities:</h4>
            <ul className="space-y-2">
              {responsibilities.map((task, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-gray-700">{task}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0">
            <h4 className="text-lg font-semibold mb-2">Skills required:</h4>
            <ul className="space-y-2">
              {skills.map((skill, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg">
            Close
          </button>
          <button onClick={onApply} className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsibilitiesModal;
