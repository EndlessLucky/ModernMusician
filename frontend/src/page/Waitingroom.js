import Timer from '../component/Timer'

export default function Waitingroom() {
  return(
    <div className='container-85 m-auto'>
      <h1 className='text-white font-face-om text-center font-60 mt-5'>
        Drop Goes Live in…
      </h1>
      <Timer deadline={new Date("2022-04-08T01:30:22")} />
      <div className='row mt-5 mb-5'>
        <div className='col-md-6'>
          <img src='Box_Bronze.jpg' alt='' width='100%' height='auto' />
          <button className='sub-button font-face-om font-28 border-none mt-3'>
            FREE (100 only)
          </button>
        </div>
        <div className='col-md-6'>
          <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
          <button className='sub-button font-face-om font-28 border-none mt-3'>
            DIAMOND (1 only)
          </button>
        </div>
      </div>

    </div>
  )
}