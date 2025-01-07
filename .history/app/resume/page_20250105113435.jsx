"use client";

import { 
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaUnity,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs, SiCsharp } from 'react-icons/si';

// about data
const about = {
  title: 'About Me',
  description: 'I am a full-stack developer and designer with a passion for creating beautiful and functional user experiences. I have experience working with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, Python, and Unity. I am always looking for new challenges and opportunities to learn and grow as a developer.',
  info:[
    {
      fieldName: 'Name',
      fieldValue: 'Daniel Lazaro'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+57)'
    },
    {
      fieldName: 'Experience',
      fieldValue: '2 years'
    },
    {
      fieldName: 'Discord',
      fieldValue: 'darkos'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Colombian'
    },
    {
      fieldName: 'Email',
      fieldValue: 'daniellazaro20@gmail.com'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Spanish'
    },
  ]
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'I have experience working with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, Python, and Unity. I am always looking for new challenges and opportunities to learn and grow as a developer.',
  items: [
    {
      company: "MeritumDev",
      position: "UI/UX Designer",
      duration: "2024",
    },
    {
      company: "MeritumDev",
      position: "Front-End Developer",
      duration: "Present",
    }
  ]
}

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'I have experience working with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, Python, and Unity. I am always looking for new challenges and opportunities to learn and grow as a developer.',
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp", 
      duration: "2024",
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp", 
      duration: "2024",
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp", 
      duration: "2024",
    },
  ]
}

// skills data
const skills = {
  title: 'My Skills',
  description: 'I have experience working with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, Python, and Unity. I am always looking for new challenges and opportunities to learn and grow as a developer.',
  skillList: [
    {
      icon: <FaHtml5 />,
      title: 'HTML',
    },
    {
      icon: <FaCss3 />,
      title: 'CSS',
    },
    {
      icon: <FaJs />,
      title: 'JavaScript',
    },
    {
      icon: <FaReact />,
      title: 'React',
    },
    {
      icon: <SiTailwindcss />,
      title: 'Tailwind CSS',
    },
    {
      icon: <SiNextdotjs />,
      title: 'Next.js',
    },
    {
      icon: <FaNodeJs />,
      title: 'Node.js',
    },
    {
      icon: <FaPython />,
      title: 'Python',
    },
    {
      icon: <FaUnity />,
      title: 'Unity',
    },
    {
      icon: <FaFigma />,
      title: 'Figma',
    },
    {
      icon: <SiCsharp />,
      title: 'C#',
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
      }}
      classnames="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue='experience' 
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content*/}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p  className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {experience.items.map((item, index) => {
                    return (
                      <li 
                        key={index} 
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                      >
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                          {item.position}
                        </h3>
                        <div className='flex items-center gap-3'>
                          {/* dat */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p  className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item, index) => {
                    return (
                      <li 
                        key={index} 
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                      >
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                          {item.degree}
                        </h3>
                        <div className='flex items-center gap-3'>
                          {/* dat */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div></div>
              </div>
            </TabsContent>




            {/* about */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume