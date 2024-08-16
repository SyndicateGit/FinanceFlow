import React from 'react'

interface HeaderBoxProps {
  type?: "title" | "greeting",
  title: string,
  subtext: string,
  user?: string,
}

const HeaderBox = ({type = "title", title, subtext, user} : HeaderBoxProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <h1 className='font-semibold text-gray-900'>
        {title}
        {type === "greeting" && (
          <span className='text-blue-600'>, 
            &nbsp;{user}
          </span>
        )}
      </h1>
      <p>{subtext}</p>
    </div>
  )
}

export default HeaderBox
