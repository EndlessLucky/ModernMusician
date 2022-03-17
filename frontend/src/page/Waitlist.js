import { useNavigate } from "react-router-dom";

export default function Waitlist() {
  const navigate = useNavigate();

  const registerClick = () => {
    navigate('/preorder');
  }

  const bronzeClick = () => {
    navigate('/bronze');
  }

  return(
    <div className='content-container m-auto'>
      <h1 className='text-white font-face-om text-center font-60 mt-5'>
        Own Music NFTs
      </h1>
      <h3 className='text-white font-face-om font-40 text-center'>
        From Cue No Ego
      </h3>
      <div className='text-center mt-5'>
        <video width="100%" height="auto" controls autoPlay>
          <source src="" type="video/mp4"/>
        </video>
      </div>      
      <button className='main-button font-face-om font-26 border-none mt-4' onClick={registerClick}>
        Get a FREE NFT - Register Now
      </button>
      <div className='row mt-5'>
        <div className='col-md-6'>
          <img src='Box_Bronze.jpg' alt='' width='100%' height='auto' />
          <button className='sub-button font-face-om font-22 border-none mt-3' onClick={bronzeClick}>
            FREE (100 only)
          </button>
        </div>
        <div className='col-md-6'>
          <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
          <button className='sub-button font-face-om font-22 border-none mt-3'>
            DIAMOND (1 only)
          </button>
        </div>
      </div>
    </div>    
  )
}