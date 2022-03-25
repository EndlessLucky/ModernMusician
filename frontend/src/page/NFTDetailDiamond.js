import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Accordion, Modal, Button, Table } from 'react-bootstrap';
import { AuthState } from '@aws-amplify/ui-components';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { UserContext } from '../component/SecureViewContext';

export default function NFTDetailDiamond () {
  const [registerShow, setRegisterShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const [availableShow, setAvailableShow] = useState(false);
  const [ownedShow, setOwnedShow] = useState(false);
  const [soldShow, setSoldShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const status = location.state.status;
  const [registerId, setRegisterId] = useState(0);
  const [soldId, setSoldId] = useState(0);
  const [shareText, setShareText] = useState('Copy Share Link');
  const context = useContext(UserContext);

  const claimRegisterClick = () => setRegisterShow(true);
  const handleRegisterClose = () => {
    setRegisterShow(false);
    setRegisterId(0);
  } 
  const registerNextClick = () => {
    var temp = registerId;
    temp ++;
    setRegisterId(temp);
  }
  const soldNextClick = () => {
    var temp = soldId;
    temp ++;
    setSoldId(temp);
  }

  const claimLoginClick = (status) => {
    if(status === 'login'){
      setLoginShow(true);
    }else{
      setAvailableShow(true);
    }
  }
  const handleLoginClose = () => setLoginShow(false);

  const handleAvailableClose = () => setAvailableShow(false);

  const claimOwnedClick = () => setOwnedShow(true);
  const handleOwnedClose = () => setOwnedShow(false);
  const copyLinkClick = () => setShareText('Copied!');

  const claimSoldClick = () => setSoldShow(true);
  const handleSoldClose = () => setSoldShow(false);

  console.log(status);

  return(
    <>
      <Header/>
      <div className='container-85 m-auto'>      
        <div className='row mt-5'>
          <div className='col-md-6'>
            <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
          </div>
          <div className='col-md-6'>
            <p className='text-white font-face-om font-26 mb-0'>Cue No Ego</p>
            <p className='text-white font-face-om font-50'>Awakening</p>
            <div className='d-flex'>
              <img className='me-2' src='./Diamond_Fan_Tier.png' alt='' width='26px' height='27px' />
              <p className='text-white font-18 me-4 mb-0'>Diamond 1/1</p>
              <p className='text-white font-10 version-text mb-0'>S1</p>
            </div>
            
            {status === 'register' &&
            <>
              <div className='d-flex'>
                <p className='font-face-om text-white font-50 me-2 mb-1'>$5,000</p>
                <p className='font-face-om text-white font-22 pt-3 mb-1'>USD</p>
              </div>
              <button className='sub-button font-face-om font-29 border-none mt-2' onClick={claimRegisterClick}>
                Reserve Spot
              </button>
            </>              
            }

            {(status === 'login' || status === 'available') &&
            <>
              <div className='d-flex'>
                <p className='font-face-om text-white font-50 me-2 mb-1'>$5,000</p>
                <p className='font-face-om text-white font-22 pt-3 mb-1'>USD</p>
              </div>
              <button className='sub-button font-face-om font-29 border-none mt-2' onClick={() => claimLoginClick(status)}>
                Buy Now
              </button>
            </>
            }

            {status === 'owned' &&
            <>
              <div className='d-flex'>
                <p className='font-face-om text-white font-50 me-2 mb-1'>OWNED</p>
              </div>
              <button className='sub-button font-face-om font-29 border-none mt-2' onClick={claimOwnedClick}>
                Share Relic
              </button>
            </>              
            }
            
            {status === 'soldout' &&
            <>
              <div className='d-flex'>
                <p className='font-face-om text-white font-50 me-2 mb-1'>SOLD OUT</p>
              </div>
              <button className='sub-button font-face-om font-29 border-none mt-2' onClick={claimSoldClick}>
                Get Notified
              </button>
            </>              
            }
          </div>
        </div>

        <Card className='dark-pad mt-5 mb-3'>
          <Card.Header as="h2" className='font-face-om text-white'>Description</Card.Header>
          <Card.Body className='card-pad'>
            <Card.Text className='text-white'>
              “Cue No Ego” – The awakening of unity consciousness. The symbiosis of organic and digital intelligence as life becomes aware of itself.
            </Card.Text>
          </Card.Body>
        </Card>

        <Accordion defaultActiveKey="1" className='mb-3'>
          <Accordion.Item eventKey="0" className='card-pad'>
            <Accordion.Header className='font-face-om text-white'>NFT Details</Accordion.Header>
            <Accordion.Body className='text-white'>
              <div className='d-flex justify-content-between'>
                <p className='mb-1'>Artist</p>
                <p className='mb-1'>Cue No Ego</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p className='mb-1'>Title</p>
                <p className='mb-1'>Awaening</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p className='mb-1'>Rarity</p>
                <p className='mb-1'>Hall of Fame</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p className='mb-1'>Rank</p>
                <p className='mb-1'>Diamond</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p className='mb-1'>Series</p>
                <p className='mb-1'>Series 1</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p className='mb-1'>Release Date</p>
                <p className='mb-1'>March 31, 2022</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className='row'>
          <div className='col-md-4'>
            <div className='dark-pad text-center pt-2 pb-2'>
              <h3 className='font-20 text-white font-face-om'>1</h3>
              <p className='font-10 text-lightgray small-text-color mb-0'>RELICS AVAILABLE</p>
            </div>          
          </div>  
          <div className='col-md-4'>
            <div className='dark-pad text-center pt-2 pb-2'>
              <h3 className='font-20 text-white font-face-om'>$5,000</h3>
              <p className='font-10 text-lightgray small-text-color mb-0'>ASKING PRICE</p>
            </div>          
          </div>
          <div className='col-md-4'>
            <div className='dark-pad text-center pt-2 pb-2'>
              <h3 className='font-20 text-white font-face-om'>3x</h3>
              <p className='font-10 text-lightgray small-text-color mb-0'>POINT MULTIPLIER</p>
            </div>          
          </div>
        </div>

        <Accordion defaultActiveKey="1" className='mb-3 mt-3'>
          <Accordion.Item eventKey="0" className='card-pad'>
            <Accordion.Header className='font-face-om text-white'>Ownership Perks</Accordion.Header>
            <Accordion.Body className='text-white'>
              <div className='d-flex justify-content-between'>
                <p className='mb-1'>Artist</p>
                <p className='mb-1'>Cue No Ego</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p className='mb-1'>Title</p>
                <p className='mb-1'>Awaening</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p className='mb-1'>Rarity</p>
                <p className='mb-1'>Hall of Fame</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p className='mb-1'>Rank</p>
                <p className='mb-1'>Diamond</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p className='mb-1'>Series</p>
                <p className='mb-1'>Series 1</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p className='mb-1'>Release Date</p>
                <p className='mb-1'>March 31, 2022</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <img className='mt-3 mb-3' src='./Banner.png' alt='' width='100%' height='52px' />

        <Modal show={registerShow} onHide={handleRegisterClose} centered>
          <Modal.Body className='m-auto' style={{'width':'70%'}}>
            <img src='./Diamond_Cube_Only.png' alt='' width='302px' height='259px' />
            
            {registerId === 0 && 
            <>
              <p className='font-face-om font-26 mb-2'>Cue No Ego</p>
              <h1 className='font-face-om mb-3'>Awakening</h1>

              <div className='d-flex'>
                <img className='me-2' src='./Diamond_Fan_Tier.png' alt='' width='26px' height='27px' />
                <p className='text-white font-18 me-4'>Diamond 1/1</p>
                <p className='text-white font-10 version-text'>S1</p>
              </div>

              <Accordion defaultActiveKey="1" className='mb-3'>
                <Accordion.Item eventKey="0" className='card-pad'>
                  <Accordion.Header className='font-face-om text-white font-18'>
                    Details
                  </Accordion.Header>
                  <Accordion.Body className='text-white'>
                    <div className='d-flex justify-content-between'>
                      <p className='mb-1'>Artist</p>
                      <p className='mb-1'>Cue No Ego</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <p className='mb-1'>Title</p>
                      <p className='mb-1'>Awaening</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <p className='mb-1'>Rarity</p>
                      <p className='mb-1'>Hall of Fame</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <p className='mb-1'>Rank</p>
                      <p className='mb-1'>Diamond</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <p className='mb-1'>Series</p>
                      <p className='mb-1'>Series 1</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <p className='mb-1'>Release Date</p>
                      <p className='mb-1'>March 31, 2022</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="1" className='mb-3'>
                <Accordion.Item eventKey="0" className='card-pad'>
                  <Accordion.Header className='font-face-om text-white font-18'>
                    History
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table responsive className='text-white'>
                      <thead>
                        <tr>
                          <th>BUYER</th>
                          <th>PRICE</th>
                          <th>SERIES</th>
                          <th>SERIAL</th>
                          <th>DATE/TIME</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Michael Walker</td>
                          <td>$0.05 USD</td>
                          <td>1</td>
                          <td>1</td>
                          <td>Mar 31, 2022 6:12 PM</td>
                        </tr>
                        <tr>
                          <td>Paul McCartney</td>
                          <td>$1,508,358.10 USD</td>
                          <td>1</td>
                          <td>1</td>
                          <td>Mar 21, 2022 2:53 AM</td>
                        </tr>
                        <tr>
                          <td>George Harrison</td>
                          <td>$126,203.83 USD</td>
                          <td>1</td>
                          <td>1</td>
                          <td>May 08, 1970 11:57 AM</td>
                        </tr>
                        <tr>
                          <td>Ringo Starr</td>
                          <td>$15,308.41 USD</td>
                          <td>1</td>
                          <td>1</td>         
                          <td>Oct 09, 1967 10:29 PM</td>
                        </tr>
                        <tr>
                          <td>John Lennon</td>
                          <td>$5,000 USD</td>
                          <td>1</td>
                          <td>1</td>
                          <td>Jul 06, 1957 5:10 PM</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Button className="buy-modal" onClick={registerNextClick}>
                Reserve Your Spot
              </Button>
            </>
            }

            {registerId === 1 &&
            <>
              <p className='text-white font-face-om font-32 text-center'>
                Submit a Refundable Deposit to Reserve Your Spot in Line
              </p>
              <div className="powr-stripe-button mb-3" id="e505fe2a_1647790339">
              </div>
            </>
            }
            
          </Modal.Body>
        </Modal>

        <Modal show={loginShow} onHide={handleLoginClose} centered>
          <Modal.Body className='m-auto' style={{'width':'70%'}}>
            <img src='./Diamond_Cube_Only.png' alt='' width='302px' height='259px' />
            
            <p className='font-face-om font-26 mb-2'>Cue No Ego</p>
            <h1 className='font-face-om mb-3'>Awakening</h1>

            <div className='d-flex'>
              <img className='me-2' src='./Diamond_Fan_Tier.png' alt='' width='26px' height='27px' />
              <p className='text-white font-18 me-4'>Diamond 1/1</p>
              <p className='text-white font-10 version-text'>S1</p>
            </div>

            <Accordion defaultActiveKey="1" className='mb-3'>
              <Accordion.Item eventKey="0" className='card-pad'>
                <Accordion.Header className='font-face-om text-white font-18'>
                  Details
                </Accordion.Header>
                <Accordion.Body className='text-white'>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Artist</p>
                    <p className='mb-1'>Cue No Ego</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Title</p>
                    <p className='mb-1'>Awaening</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Rarity</p>
                    <p className='mb-1'>Hall of Fame</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Rank</p>
                    <p className='mb-1'>Diamond</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Series</p>
                    <p className='mb-1'>Series 1</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Release Date</p>
                    <p className='mb-1'>March 31, 2022</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1" className='mb-3'>
              <Accordion.Item eventKey="0" className='card-pad'>
                <Accordion.Header className='font-face-om text-white font-18'>
                  History
                </Accordion.Header>
                <Accordion.Body>
                  <Table responsive className='text-white'>
                    <thead>
                      <tr>
                        <th>BUYER</th>
                        <th>PRICE</th>
                        <th>SERIES</th>
                        <th>SERIAL</th>
                        <th>DATE/TIME</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Michael Walker</td>
                        <td>$0.05 USD</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Mar 31, 2022 6:12 PM</td>
                      </tr>
                      <tr>
                        <td>Paul McCartney</td>
                        <td>$1,508,358.10 USD</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Mar 21, 2022 2:53 AM</td>
                      </tr>
                      <tr>
                        <td>George Harrison</td>
                        <td>$126,203.83 USD</td>
                        <td>1</td>
                        <td>1</td>
                        <td>May 08, 1970 11:57 AM</td>
                      </tr>
                      <tr>
                        <td>Ringo Starr</td>
                        <td>$15,308.41 USD</td>
                        <td>1</td>
                        <td>1</td>         
                        <td>Oct 09, 1967 10:29 PM</td>
                      </tr>
                      <tr>
                        <td>John Lennon</td>
                        <td>$5,000 USD</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Jul 06, 1957 5:10 PM</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Button className="deposit-modal">
              Enter the Waiting Room
            </Button>
            
          </Modal.Body>
        </Modal>

        <Modal show={availableShow} onHide={handleAvailableClose} centered>
          <Modal.Body className='m-auto' style={{'width':'70%'}}>
            <img src='./Diamond_Cube_Only.png' alt='' width='302px' height='259px' />
            
            <p className='font-face-om font-26 mb-2'>Cue No Ego</p>
            <h1 className='font-face-om mb-3'>Awakening</h1>

            <div className='d-flex'>
              <img className='me-2' src='./Diamond_Fan_Tier.png' alt='' width='26px' height='27px' />
              <p className='text-white font-18 me-4'>Diamond 1/1</p>
              <p className='text-white font-10 version-text'>S1</p>
            </div>

            <Accordion defaultActiveKey="1" className='mb-3'>
              <Accordion.Item eventKey="0" className='card-pad'>
                <Accordion.Header className='font-face-om text-white font-18'>
                  Details
                </Accordion.Header>
                <Accordion.Body className='text-white'>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Artist</p>
                    <p className='mb-1'>Cue No Ego</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Title</p>
                    <p className='mb-1'>Awaening</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Rarity</p>
                    <p className='mb-1'>Hall of Fame</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Rank</p>
                    <p className='mb-1'>Diamond</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Series</p>
                    <p className='mb-1'>Series 1</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Release Date</p>
                    <p className='mb-1'>March 31, 2022</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1" className='mb-3'>
              <Accordion.Item eventKey="0" className='card-pad'>
                <Accordion.Header className='font-face-om text-white font-18'>
                  History
                </Accordion.Header>
                <Accordion.Body>
                  <Table responsive className='text-white'>
                    <thead>
                      <tr>
                        <th>BUYER</th>
                        <th>PRICE</th>
                        <th>SERIES</th>
                        <th>SERIAL</th>
                        <th>DATE/TIME</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Michael Walker</td>
                        <td>$0.05 USD</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Mar 31, 2022 6:12 PM</td>
                      </tr>
                      <tr>
                        <td>Paul McCartney</td>
                        <td>$1,508,358.10 USD</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Mar 21, 2022 2:53 AM</td>
                      </tr>
                      <tr>
                        <td>George Harrison</td>
                        <td>$126,203.83 USD</td>
                        <td>1</td>
                        <td>1</td>
                        <td>May 08, 1970 11:57 AM</td>
                      </tr>
                      <tr>
                        <td>Ringo Starr</td>
                        <td>$15,308.41 USD</td>
                        <td>1</td>
                        <td>1</td>         
                        <td>Oct 09, 1967 10:29 PM</td>
                      </tr>
                      <tr>
                        <td>John Lennon</td>
                        <td>$5,000 USD</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Jul 06, 1957 5:10 PM</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Button className="deposit-modal">
              Buy For $5,000 USD
            </Button>
            
          </Modal.Body>
        </Modal>

        <Modal show={ownedShow} onHide={handleOwnedClose} centered>
          <Modal.Body className='m-auto' style={{'width':'70%'}}>
            <img src='./Diamond_Cube_Only.png' alt='' width='302px' height='259px' />
            
            <p className='font-face-om font-26 mb-2'>Cue No Ego</p>
            <h1 className='font-face-om mb-3'>Awakening</h1>

            <div className='d-flex'>
              <img className='me-2' src='./Diamond_Fan_Tier.png' alt='' width='26px' height='27px' />
              <p className='text-white font-18 me-4'>Diamond 1/1</p>
              <p className='text-white font-10 version-text'>S1</p>
            </div>

            <Accordion defaultActiveKey="1" className='mb-3'>
              <Accordion.Item eventKey="0" className='card-pad'>
                <Accordion.Header className='font-face-om text-white font-18'>
                  Details
                </Accordion.Header>
                <Accordion.Body className='text-white'>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Artist</p>
                    <p className='mb-1'>Cue No Ego</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Title</p>
                    <p className='mb-1'>Awaening</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Rarity</p>
                    <p className='mb-1'>Hall of Fame</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Rank</p>
                    <p className='mb-1'>Diamond</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Series</p>
                    <p className='mb-1'>Series 1</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-1'>Release Date</p>
                    <p className='mb-1'>March 31, 2022</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1" className='mb-3'>
              <Accordion.Item eventKey="0" className='card-pad'>
                <Accordion.Header className='font-face-om text-white font-18'>
                  History
                </Accordion.Header>
                <Accordion.Body>
                  <Table responsive className='text-white'>
                    <thead>
                      <tr>
                        <th>BUYER</th>
                        <th>PRICE</th>
                        <th>SERIES</th>
                        <th>SERIAL</th>
                        <th>DATE/TIME</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Michael Walker</td>
                        <td>$0.05 USD</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Mar 31, 2022 6:12 PM</td>
                      </tr>
                      <tr>
                        <td>Paul McCartney</td>
                        <td>$1,508,358.10 USD</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Mar 21, 2022 2:53 AM</td>
                      </tr>
                      <tr>
                        <td>George Harrison</td>
                        <td>$126,203.83 USD</td>
                        <td>1</td>
                        <td>1</td>
                        <td>May 08, 1970 11:57 AM</td>
                      </tr>
                      <tr>
                        <td>Ringo Starr</td>
                        <td>$15,308.41 USD</td>
                        <td>1</td>
                        <td>1</td>         
                        <td>Oct 09, 1967 10:29 PM</td>
                      </tr>
                      <tr>
                        <td>John Lennon</td>
                        <td>$5,000 USD</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Jul 06, 1957 5:10 PM</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Button className="buy-modal" onClick={copyLinkClick}>
              {shareText}
            </Button>
            
          </Modal.Body>
        </Modal>

        <Modal show={soldShow} onHide={handleSoldClose} centered>
          <Modal.Body className='m-auto' style={{'width':'70%'}}>
            <img src='./Diamond_Cube_Only.png' alt='' width='302px' height='259px' />
            
            {soldId === 0 &&
            <>
              <p className='text-white font-face-om font-32 text-center'>
                <b>Sold Out!</b> Want to make sure you don't miss out on Cue No Ego relic drops?
              </p>
              <input className='form-control phone-input' type='number' placeholder='Enter Your Phone Number...'/>
              <Button className="buy-modal mb-3" onClick={soldNextClick}>
                YES! Notify me
              </Button>
              <div className='d-flex justify-content-center'>
                <a className='small-text-color' href='/'>Your personal info is private & safe</a>
              </div>
            </>
            }

            {soldId === 1 &&
            <>
              <p className='text-white font-face-om font-32 text-center'>
                Thanks! We will let you know when the next drop is happening 🤘
              </p>
              <Button className="buy-modal mb-3">
                Keep Browsing
              </Button>
            </>
            }
                         
          </Modal.Body>
        </Modal>

      </div>
      {context.authState === AuthState.SignedIn &&
        <AmplifySignOut />
      }
      <Footer/>
    </>
    
  )
}