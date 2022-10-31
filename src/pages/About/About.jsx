import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import { AiOutlineLeft } from 'react-icons/ai'
import { districtData } from '../../data/data'

const About = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  const location = useLocation()
  const data = location.state;

  console.log(data);

  return (
    <div className='About px-4'>
      <div className="min-h-screen">
        {/* header */}
        <div className='h-[50px] flex items-center px-3'>
          <div className='p-2 bg-gradient-to-r from-[red] to-[yellow] rounded-full text-[white] cursor-pointer' onClick={()=>{changeDir("/")}}>
            <AiOutlineLeft />
          </div>
        </div>


        <h2 className='text-4xl text-center mb-[60px] bg-clip-text bg-gradient-to-r from-[red] to-[yellow] text-transparent p-4 font-bold'>{data?.name}</h2>
        {/* content */}
        {
          data.data.map((i, key) => (
            <div className='grid grid-cols-5  gap-[30px] my-[30px] '>
              <div className="col-span-2 flex  items-center">
                <img src={i.img} alt="" className='mb-auto w-full  rounded-[8px] shadow' />
              </div>
              <div className='col-span-3'>
              <div className="col-span-5  text-3xl font-bold">
                {
                  i.title
                }
              </div>
                <div className='mt-[15px] text-sm'>
                  {i.k}
                </div>
                <div className='mt-[15px] text-sm'>
                  {i.e}
                </div>
              </div>
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default About