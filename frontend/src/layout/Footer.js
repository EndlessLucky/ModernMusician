export default function Footer(){
  return(
    <div className='d-flex mt-3'>
      <div className='footer d-flex'>
        <img src='Silver_Fan_Tier.png' alt='' width='61px' height='64px' />
        <div className='col' style={{'marginLeft': '20px'}}>
          <p className='text-white font-18 m-0'>Michael Walker</p>
          <p className='text-white font-13 m-0'>
            You’re only 75 points away from unlocking Gold!
          </p>
          <a className='text-white m-0' href='/'>
            Click here to earn more StreetTeam Points
          </a>        
        </div>      
      </div>
      <div className='point-block text-center'>
        <p className='text-white font-face-om font-30 m-0'>120</p>
        <p className='text-white'>POINTS</p>
      </div>
    </div>    
  )
}