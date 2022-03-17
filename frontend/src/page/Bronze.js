export default function Bronze() {
  return(
    <div className='container-85 m-auto'>
      <div className='row mt-5'>
        <div className='col-md-6'>
          <img src='Box_Bronze.jpg' alt='' width='100%' height='auto' />
        </div>
        <div className='col-md-6'>
          <p className='text-white font-face-om font-50'>Cue No Ego</p>
          <div className='d-flex'>
            <img className='me-2' src='./Bronze_Fan_Tier.png' alt='' width='26px' height='27px' />
            <p className='text-white font-18 me-4'>Bronze 1/100</p>
            <p className='text-white font-10 version-text'>S1</p>
          </div>
          <div className='d-flex'>
            <p className='font-face-om text-white font-50 me-2'>FREE</p>
            <p className='font-face-om text-white font-22 pt-3'>LIMITED</p>
          </div>
          <button className='sub-button font-face-om font-29 border-none mt-2'>
            Reserve Spot
          </button>
        </div>
      </div>

      <p className='dark-pad text-white font-face-om font-32 mt-5' style={{'padding': '9px 0px 9px 21px'}}>
        NFT Details
      </p>
      <div className='row'>
        <div className='col-md-4'>
          <div className='dark-pad text-center pt-2 pb-2'>
            <h3 className='font-20 text-white font-face-om'>100</h3>
            <p className='font-10 text-lightgray small-text-color mb-0'>RELICS AVAILABLE</p>
          </div>          
        </div>  
        <div className='col-md-4'>
          <div className='dark-pad text-center pt-2 pb-2'>
            <h3 className='font-20 text-white font-face-om'>$5</h3>
            <p className='font-10 text-lightgray small-text-color mb-0'>ASKING PRICE</p>
          </div>          
        </div>
        <div className='col-md-4'>
          <div className='dark-pad text-center pt-2 pb-2'>
            <h3 className='font-20 text-white font-face-om'>1.1x</h3>
            <p className='font-10 text-lightgray small-text-color mb-0'>POINT MULTIPLIER</p>
          </div>          
        </div>
      </div>
      <p className='dark-pad text-white font-face-om font-32 mt-3' style={{'padding': '9px 0px 9px 21px'}}>
        Ownership Perks
      </p>
      <img className='mt-3 mb-3' src='./MM_Bright_logo.png' alt='' width='100%' height='52px' />

    </div>
  )
}