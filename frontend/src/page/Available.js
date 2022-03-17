import { useNavigate } from "react-router-dom";

export default function Available() {
  const navigate = useNavigate();

  const bronzeClick = () => {
    navigate('/claimbronze');
  }

  const diamondClick = () => {
    navigate('/claimdiamond');
  }

  return(
    <>
      <h1 className='text-white font-face-om text-center font-60 mt-5'>
        Own Music NFTs
      </h1>
      <div className='content-container m-auto'>
        <h3 className='text-white font-face-om font-40 text-center'>
          From Cue No Ego
        </h3>
        <div className='row mt-5 mb-5'>
          <div className='col-md-6'>
            <img src='Box_Bronze.jpg' alt='' width='100%' height='auto' />
            <button className='sub-button font-face-om font-28 border-none mt-3' onClick={bronzeClick}>
              Claim Free
            </button>
          </div>
          <div className='col-md-6'>
            <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
            <button className='sub-button font-face-om font-28 border-none mt-3' onClick={diamondClick}>
              Buy Now
            </button>
          </div>
        </div>
      </div>      
    </>
  )
}