import React from 'react'
import Container from './Container';
import SecHead from './SecHead';
import Card from './Card';
import Coat from '../assets/coat.png';
import Bag from '../assets/bag.png';
import Cooler from '../assets/cooler.png';
import Bookself from '../assets/bookslf.png';
import Button from './Button';


const ViewAll = () => {
  return (
    <>
      <Container className='pt-20'>
        <SecHead
          title="This Month"
          heading="Best Selling Products"
        />
        <div className='relative lg:-right-108 lg:-top-15 -right-26 -top-7.5'>
          <Button className='absolute lg:px-12 lg:py-4 px-3 py-1 bg-primary hover:bg-[#db4444d2] rounded-sm'>View All</Button>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-7.5 lg:mt-15 mt-10'>
          <div>
            <Card
              img={Coat}
              heading='The north coat'
              price='$260'
              pastprice='$360'
              rating='(88)'
              discount='-40%'
            />
          </div>
          <div>
            <Card
              img={Bag}
              heading='Gucci duffle bag'
              price='$960'
              pastprice='$1160'
              rating='(88)'
              discount='-25%'
            />
          </div>
          <div>
            <Card
              img={Cooler}
              heading='RGB liquid CPU Cooler'
              price='$120'
              pastprice='$160'
              rating='(88)'
              discount='-10%'
            />
          </div>
          <div>
            <Card
              img={Bookself}
              heading='Small BookSelf'
              price='$360'
              pastprice='$460'
              rating='(88)'
              discount='-30%'
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default ViewAll;
