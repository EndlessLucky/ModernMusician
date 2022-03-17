export default function Preorder() {
  return(
    <>
      <h1 className='text-white font-face-om text-center font-60 mt-5'>
        You Are Signed Up!
      </h1>
      <div className='content-container m-auto'>
        <h3 className='text-white font-face-om font-40 text-center'>
          Want Early Access?
        </h3>
        <div className='row mt-5 mb-5'>
          <div className='col-md-6'>
            <img src='Box_Bronze.jpg' alt='' width='100%' height='auto' />
            <button className='sub-button font-face-om font-28 border-none mt-3'>
              Pre-Order
            </button>
          </div>
          <div className='col-md-6'>
            <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
            <button className='sub-button font-face-om font-28 border-none mt-3'>
              Pre-Order
            </button>
          </div>
        </div>
      </div>      
    </>    
  )
}