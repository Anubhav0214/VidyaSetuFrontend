import React from 'react'
import './paymentsuccess.css'
import { Link, useParams } from 'react-router-dom'
import videoBg from '../../assets/images/new1.mp4';
const PaymentSuccess = ({user}) => {
    const params = useParams()
    return  <div className='payment-success-page'>
        <video className="background-video" autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
      {user && <div className="success-message">
        <h2>Payment successful</h2>
        <p>Your course subscription has been activated </p>
        <p>Reference no - {params.id}</p>
        <Link to={`/${user._id}/dashboard`} className='common-btn'>Go to Dashboard</Link>
      </div> }  
    </div>
  
}

export default PaymentSuccess