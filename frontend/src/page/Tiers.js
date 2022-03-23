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
  const authStatus = location.state.authStatus;
  const [nfts, setNfts] = useState([]);
  const [userNFTs, setUserNFTs] = useState([]);
  const [user, setUser] = useState({ loggedIn: null });
  const liveDate = new Date("2022-03-22T01:30:22");
  const currentTime = new Date().getTime();
  const diffInSeconds = differenceInSeconds(liveDate, currentTime);

  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
    getAccountInfoQuery();
  }, []);
  useEffect(() => {
    getNFTAccount();
  }, [user]);

  const bronzeClick = (status) => {
    navigate('/nftdetailbronze', {state: {status: status}});
  }
  const diamondClick = (status) => {
    navigate('/nftdetaildiamond', {state: {status: status}});
  }

  const getAccountInfoQuery = async () => {
    const res = await fcl.query({
      cadence: GET_ACCOUNT,
      args: (arg, t) => [arg('0x52b1f9cebc7c0947', t.Address)],
    });
    // console.log("query result : ", res);   

    setNfts(res);
  };
  const getNFTAccount = async () => {
    if (user.loggedIn === null) return;
    const res = await fcl.query({
      cadence: GET_ACCOUNT,
      args: (arg, t) => [arg(user?.addr, t.Address)],
    });
    // console.log("query result : ", res);   

    setUserNFTs(res);
  };

  return(
    <>
      <Header/>
      {/* Register status */}
      {authStatus === 'register' &&
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
                <button className='sub-button font-face-om font-28 border-none mt-3' onClick={() => bronzeClick('register')}>
                  Reserve Spot
                </button>
              </div>
              <div className='col-md-6'>
                <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
                <button className='sub-button font-face-om font-28 border-none mt-3' onClick={() => diamondClick('register')}>
                  Reserve Spot
                </button>
              </div>
            </div>
          </div>
        </>        
      }

      {/* Login status */}
      {(authStatus === 'login' && diffInSeconds > 0 && userNFTs === 0) &&
        <div className='container-85 m-auto'>
          <h1 className='text-white font-face-om text-center font-60 mt-5 mb-5'>
            Drop Goes Live in…
          </h1>
          <Timer deadline={new Date("2022-04-08T01:30:22")} />
          <div className='row mt-5 mb-5'>
            <div className='col-md-6'>
              <img src='Box_Bronze.jpg' alt='' width='100%' height='auto' />
              <button className='sub-button font-face-om font-28 border-none mt-3' onClick={() => bronzeClick('login')}>
                FREE (100 only)
              </button>
            </div>
            <div className='col-md-6'>
              <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
              <button className='sub-button font-face-om font-28 border-none mt-3' onClick={() => diamondClick('login')}>
                DIAMOND (1 only)
              </button>
            </div>
          </div>    
        </div>        
      }    

      {/* Available status */}
      {(authStatus === 'login' && diffInSeconds <= 0 && nfts.length > 0 && userNFTs <= 0) &&
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
                <button className='sub-button font-face-om font-28 border-none mt-3' onClick={() => bronzeClick('available')}>
                  Claim Free
                </button>
              </div>
              <div className='col-md-6'>
                <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
                <button className='sub-button font-face-om font-28 border-none mt-3' onClick={() => diamondClick('available')}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </>
      }

      {/* Owned status */}
      {(authStatus === 'login' && diffInSeconds <= 0 && nfts.length > 0 && userNFTs > 0) &&
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
                <button className='sub-button font-face-om font-28 border-none mt-3' onClick={() => bronzeClick('owned')}>
                  Claim Free
                </button>
              </div>
              <div className='col-md-6'>
                <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
                <button className='sub-button font-face-om font-28 border-none mt-3' onClick={() => diamondClick('owned')}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </>
      }

      {/* Soldout status */}
      {(authStatus === 'login' && nfts.length === 0) &&
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
                <button className='sub-button font-face-om font-28 border-none mt-3' onClick={() => bronzeClick('soldout')}>
                  SOLD OUT
                </button>
              </div>
              <div className='col-md-6'>
                <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
                <button className='sub-button font-face-om font-28 border-none mt-3' onClick={() => diamondClick('soldout')}>
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