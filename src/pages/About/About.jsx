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

        {/* content */}
        {
          data.data.map((i, key) => (
            <div className='grid grid-cols-5 sm:gap-5 gap-2 mb-6 mt-6'>
              <div className="col-span-5 text-center text-4xl font-bold">
                {
                  i.title
                }
              </div>
              <div className="col-span-2 flex items-center">
                <img src={i.img} alt="" className='w-full aspect-square rounded-xl' />
              </div>
              <div className='col-span-3'>
                <div className='mb-4'>
                  {i.k}
                </div>
                <div>
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