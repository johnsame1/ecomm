import React from 'react';
import Banner from '../../components/Banner/Banner';
import CollectionsCart from '../../components/CollectionsCart/CollectionsCart';
import NewCollections from '../../components/NewCollections/NewCollections';
import Offers from '../../components/Offers/Offers';
import Banner2 from '../../components/Banner2/Banner2';
import OurtClientReviews from '../../components/OurClientReviews/OurClientReviews';
function Home() {
  return (
    <>
      <Banner />
      <CollectionsCart />
      <NewCollections/>
      <Banner2 />
      <Offers />
      <OurtClientReviews />
    </>
  );
}

export default Home;
