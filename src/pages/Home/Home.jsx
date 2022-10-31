import React, { useState } from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { ROUTES } from '../../routes/RouterConfig'
import kleLogo from './../../assets/images/kle.png'
import { districtData } from '../../data/data'
import kannadabalaga from './../../assets/images/balaga.jpg'
import ssc from './../../assets/images/ssc.jpg'

const Home = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  const infoArray = [
    'Karnataka the “City of Garden”',
    'Formed on 1st Nov 1956',
    '31 States',
    'Kannada',
    '6th Largest State in India ',
    '25 Wildlife & 7 bird Sanctuaries ',
    'Bangalore hub of IT companies'
  ]

  const [showInfo, setShowInfo] = useState(0)

  useEffect(()=>{
      const interval = setInterval(async() => {
        console.log('k');
        if(showInfo==5){
          setShowInfo(0)
        }
        else{
          for (const key in infoArray) {
            if(key==showInfo){
              await setShowInfo(parseInt(showInfo)+parseInt(1))
              console.log(key);
              console.log(parseInt(key)+parseInt(1));
              break;
            }
          }
        }
      }, 1000);
      return () => clearInterval(interval);
  },[])

  useEffect(() => {
    const wrapper = document.querySelectorAll(".cardWrap");

    wrapper.forEach(element => {
      let state = {
        mouseX: 0,
        mouseY: 0,
        height: element.clientHeight,
        width: element.clientWidth
      };

      element.addEventListener("mousemove", ele => {
        const card = element.querySelector(".card");
        const cardBg = card.querySelector(".cardBg");
        state.mouseX = ele.pageX - element.offsetLeft - state.width / 2;
        state.mouseY = ele.pageY - element.offsetTop - state.height / 2;

        // parallax angle in card
        const angleX = (state.mouseX / state.width) * 30;
        const angleY = (state.mouseY / state.height) * -30;
        card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

        // parallax position of background in card
        const posX = (state.mouseX / state.width) * -40;
        const posY = (state.mouseY / state.height) * -40;
        cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
      });

      element.addEventListener("mouseout", () => {
        const card = element.querySelector(".card");
        const cardBg = card.querySelector(".cardBg");
        card.style.transform = `rotateY(0deg) rotateX(0deg) `;
        cardBg.style.transform = `translateX(0px) translateY(0px)`;
      });
    });

  }, [])
  return (
    <div className='Home overflow-hidden'>
      <div className="text-xl text-[red] min-h-screen  custom-bg">
        <div className='p-10 w-screen top-0 left-0 h-[10vh] bg-transparent flex items-center justify-between'>
          <img src={ssc} alt="" className='w-[45px] sm:w-[55px] rounded' />
          <img src={kleLogo} alt="" className='w-[180px]' />
          <img src={kannadabalaga} alt="" className='w-[45px] sm:w-[55px]' />
        </div>
        <div className='font-extrabold text-[white] sm:text-7xl text-xl min-h-[90vh] flex items-center justify-center flex-col gap-[15px]'>
          <div className='bg-clip-text bg-gradient-to-r from-[red] to-[yellow] text-transparent p-5'>
            ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ - ೨೦೨೨
          </div>
          {/* <div className="text-lg font-bold">
            {infoArray[showInfo]}
          </div> */}
          <a href='#content' className='bg-[red] text-xl mt-[15px] px-[24px] py-[8px] rounded-[16px] font-normal '>
            Explore
          </a>
        </div>
      </div>
      {/* <div className="custom-bg-2 h-screen">
        Content
      </div> */}
      <div className="container py-[120px] m-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5" id='content'>
        {
          districtData.map((i,key)=>(
            <div className="col-span-1 my-[30px] flex items-center justify-center">
              <Card data={i}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home