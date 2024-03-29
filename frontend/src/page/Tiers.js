import { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as fcl from "@onflow/fcl";
import { differenceInSeconds } from "date-fns";
import { AuthState } from '@aws-amplify/ui-components';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Timer from '../component/Timer';
import { GET_ACCOUNT } from "../cadence/get_account";
import { UserContext } from '../component/SecureViewContext';

export default function Tiers () {
  const location = useLocation();
  const navigate = useNavigate();
  // const authStatus = location.state.authStatus;
  const authStatus = 'login';
  const [nfts, setNfts] = useState([]);
  const [userNFTs, setUserNFTs] = useState([]);
  const [user, setUser] = useState({ loggedIn: null });
  const liveDate = new Date("2022-04-28T01:30:22");
  const currentTime = new Date().getTime();
  const diffInSeconds = differenceInSeconds(liveDate, currentTime);
  const context = useContext(UserContext);

  useEffect(() => {
    if(context.authState === AuthState.SignedOut){
      navigate('/');
    }
  }, [context.authState]);

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

    // setNfts(res);
    var temp = ['1', '2']
    setNfts(temp);
  };
  const getNFTAccount = async () => {
    if (user.loggedIn === null) return;
    const res = await fcl.query({
      cadence: GET_ACCOUNT,
      args: (arg, t) => [arg(user?.addr, t.Address)],
    });
    // console.log("query result : ", res);   

    // setUserNFTs(res);
    var temp = ['1', '2']
    setUserNFTs(temp);
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
      {(authStatus === 'login' && diffInSeconds > 0) &&
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
      {(authStatus === 'login' && diffInSeconds <= 0 && nfts.length > 0 && userNFTs.length <= 0) &&
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
      {(authStatus === 'login' && diffInSeconds <= 0 && nfts.length > 0 && userNFTs.length > 0) &&
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
                <button className='dark-pad text-white font-face-om font-28 border-none mt-3' style={{'padding': '20px 25px 20px 25px'}}>
                  More Details
                </button>
                <button className='sub-button font-face-om font-28 border-none mt-3'>
                  Marketplace
                </button>
              </div>
              <div className='col-md-6'>
                <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
                <button className='dark-pad text-white font-face-om font-28 border-none mt-3' style={{'padding': '20px 25px 20px 25px'}}>
                  More Details
                </button>
                <button className='sub-button font-face-om font-28 border-none mt-3'>
                  Marketplace
                </button>
              </div>
            </div>
          </div>
        </>
      }

      {/* Soldout status */}
      {(authStatus === 'login' && diffInSeconds <= 0 && nfts.length === 0) &&
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

      {context.authState === AuthState.SignedIn &&
        <AmplifySignOut />
      }
      <Footer/>
    </>    
  )
}