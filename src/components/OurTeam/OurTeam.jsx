import React from 'react'
import imgTeam from '../../assets/team.png'
import ziad from '../../assets/ziad.jpg'
import sharaky from '../../assets/sharaky.jpg'
import youssef from '../../assets/youssef.jpg'
import nour from '../../assets/nour.jpg'
import hadeer from '../../assets/hadeer.jpg'
import sayed from '../../assets/sayed.jpg'
import nada from '../../assets/nada.jpg'
import Animation from '../Animation/Animation'


const team = [
  { name: 'ندى', field: 'UI & UX', img: nada },
  { name: 'زياد', field: 'Backend Developer', img: ziad },
  { name: 'نور', field: 'Backend Developer', img: nour },
  { name: 'سيد', field: 'Mobile Developer', img: sayed },
  { name: 'يوسف', field: 'Mobile Developer', img: youssef },
  { name: 'هدير', field: 'Frontend Developer', img: hadeer },
  { name: 'شراقي', field: 'Frontend Developer', img: sharaky },
]

function OurTeam({ className, ...rest }) {
  return (
    <>
    <Animation>
        <div className={`100vh bg-[#F8F9FA] p-7  ${className}`} dir="ltr"  {...rest}>
        <div className='text-center'>
          <div className="inline-block relative">
            <h1 className='font-bold text-4xl py-4'>فريق العمل</h1>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 rounded-2xl bg-[#0D6EFD] w-1/2"></span>
          </div>
        </div>

        <div className='p-7 flex justify-center'>
          <div className="overflow-hidden rounded-xl w-fit">
            <img
              src={imgTeam}
              alt="imgTeam"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Team Members Cards */}
        <div className="team-members flex flex-col items-center gap-5 mt-10">
          {/* Top Row: 4 cards */}
          <div className="flex flex-wrap justify-center gap-5 w-full">
            {team.slice(0, 4).map((member, i) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 w-80 group transition-transform duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1 + 0.1}s` }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-30 h-30 rounded-full border-4 border-[#0D6EFD] mb-4 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="font-bold text-xl text-[#214D97] mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.field}</p>
              </div>
            ))}
          </div>
          {/* Bottom Row: 3 cards */}
          <div className="flex flex-wrap justify-center gap-5 w-full mt-2">
            {team.slice(4).map((member, i) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 w-80 group transition-transform duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
                style={{ animationDelay: `${(i + 4) * 0.1 + 0.1}s` }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-30 h-30 rounded-full border-4 border-[#0D6EFD] mb-4 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="font-bold text-xl text-[#214D97] mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.field}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Animation>
      
    </>
  )
}

export default OurTeam
