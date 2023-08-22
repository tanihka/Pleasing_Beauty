import React from 'react'
import './parlourcard.css'
import { Link } from 'react-router-dom'

const ParlourCard = ({ data }) => {
    return (
        <Link to={`/search-parlour/${data._id}`}>
            <div className='card-container'>
                <div className="card-container-image">
                    <img src='https://img.freepik.com/free-photo/woman-washing-head-hairsalon_1157-27179.jpg' />
                </div>
                <div className="card-container-content">
                    <h1>{data.name}</h1>
                    <p>{data.landmark}</p>
                </div>
            </div>
        </Link>

    )
}

export default ParlourCard