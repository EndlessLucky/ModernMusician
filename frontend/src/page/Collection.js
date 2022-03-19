import { useNavigate } from "react-router-dom";

export default function Collection() {
  const navigate = useNavigate();

  const marketplaceClick = () => {
    navigate('/marketplace');
  }

  return(
    <>
      <h1 className='text-white font-face-om text-center font-60 mt-5'>
        Your Collection
      </h1>
      <div className='content-container m-auto'>
        <h3 className='text-white font-face-om font-40 text-center'>
          From Cue No Ego
        </h3>
        <div className='row mt-5 mb-5'>
          <div className='col-md-6'>
            <img src='Box_Bronze.jpg' alt='' width='100%' height='auto' />
            <button className='dark-pad text-white font-face-om font-28 border-none mt-3' style={{'padding': '20px 25px 20px 25px'}} onClick={marketplaceClick}>
              More Details
            </button>
            <button className='sub-button font-face-om font-28 border-none mt-3' onClick={marketplaceClick}>
              Marketplace
            </button>
          </div>
          <div className='col-md-6'>
            <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
            <button className='dark-pad text-white font-face-om font-28 border-none mt-3' style={{'padding': '20px 25px 20px 25px'}} onClick={marketplaceClick}>
              More Details
            </button>
            <button className='sub-button font-face-om font-28 border-none mt-3' onClick={marketplaceClick}>
              Marketplace
            </button>
          </div>
        </div>
      </div>      
    </>    
  )
}