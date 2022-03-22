import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as fcl from "@onflow/fcl";
import { differenceInSeconds } from "date-fns";
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Timer from '../component/Timer';
import { GET_ACCOUNT } from "../cadence/get_account";

export default function Tiers() {
  const navigate = useNavigate();
  const location = useLocation();
  const status = location.state.status;
  const [nfts, setNfts] = useState([]);
  const liveDate = new Date("2022-03-22T01:30:22");
  const currentTime = new Date().getTime();
  const diffInSeconds = differenceInSeconds(liveDate, currentTime);

  useEffect(() => {
    getAccountInfoQuery();
  }, []);

  const bronzeClick = () => {
    navigate('/bronze');
  }

  const diamondClick = () => {
    navigate('/diamond');
  }

  const getAccountInfoQuery = async () => {
    const res = await fcl.query({
      cadence: GET_ACCOUNT,
      args: (arg, t) => [arg('0x52b1f9cebc7c0947', t.Address)],
    });
    // console.log("query result : ", res);   

    setNfts(res);
  };

  return(
    <>
      <Header/>
      {status === 'register' &&
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
                <button className='sub-button font-face-om font-28 border-none mt-3' onClick={bronzeClick}>
                  Reserve Spot
                </button>
              </div>
              <div className='col-md-6'>
                <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
                <button className='sub-button font-face-om font-28 border-none mt-3' onClick={diamondClick}>
                  Reserve Spot
                </button>
              </div>
            </div>
          </div>
        </>        
      }
      {(status === 'login' && diffInSeconds > 0) &&
        <div className='container-85 m-auto'>
          <h1 className='text-white font-face-om text-center font-60 mt-5 mb-5'>
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
      }    
      {(status === 'login' && diffInSeconds <= 0 && nfts.length > 0) &&
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
      }
      {(status === 'login' && nfts.length === 0) &&
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
                  SOLD OUT
                </button>
              </div>
              <div className='col-md-6'>
                <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
                <button className='sub-button font-face-om font-28 border-none mt-3' onClick={diamondClick}>
                  SOLD OUT
                </button>
              </div>
            </div>
          </div>
        </>
      }
      <Footer/>
    </>    
  )
}