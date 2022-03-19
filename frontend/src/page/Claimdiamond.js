import { useNavigate } from "react-router-dom";
import { Card, Accordion } from 'react-bootstrap';

export default function Claimdiamond() {
  const navigate = useNavigate();

  const claimClick = () => {
    navigate('/collection');
  }

  return(
    <div className='container-85 m-auto'>
      
      <div className='row mt-5'>
        <div className='col-md-6'>
          <img src='Box_Diamond.jpg' alt='' width='100%' height='auto' />
        </div>
        <div className='col-md-6'>
          <p className='text-white font-face-om font-50'>Cue No Ego</p>
          <div className='d-flex'>
            <img className='me-2' src='./Diamond_Fan_Tier.png' alt='' width='26px' height='27px' />
            <p className='text-white font-18 me-4'>Diamond 1/1</p>
            <p className='text-white font-10 version-text'>S1</p>
          </div>
          <div className='d-flex'>
            <p className='font-face-om text-white font-50 me-2'>$5,000</p>
            <p className='font-face-om text-white font-22 pt-3'>USD</p>
          </div>
          <button className='sub-button font-face-om font-29 border-none mt-2' onClick={claimClick}>
            Buy Now
          </button>
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

    </div>
  )
}