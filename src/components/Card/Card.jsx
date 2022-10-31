import React from 'react'
import './Card.scss'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'

const Card = ({data}) => {
    const navigate = useNavigate();

    const changeDir = () => {
        navigate(ROUTES.About,{state:data})
    }
    return (

        <div className="Card">
            <div className="cardWrap" onClick={changeDir}>
                <div className="card">
                    <div
                        className="cardBg"
                        style={{
                            backgroundImage:
                            `url(${data?.img})`
                        }}
                        />
                    <div className="cardInfo">
                        <h3 className="cardTitle ">{data?.name}</h3>
                        <p className=''>Rajyostava - 2022</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card