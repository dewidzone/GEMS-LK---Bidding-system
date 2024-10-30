import React, { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { AddAuction } from './AddAuction';
import { AuctionCard } from './AuctionCard';
import { ProgressBar } from './ProgressBar';

// GEMS LK Introduction Component
const Introduction = () => (
  <div className="introduction text-center my-4">
    <h2>Welcome to GEMS LK</h2>
    <p>Explore our exquisite collection of gemstones and engage in exciting bidding auctions for a chance to own a rare gem!</p>
  </div>
);

export const AuctionBody = () => {
  const [auction, setAuction] = useState(null);
  const { currentUser, globalMsg } = useContext(AuthContext);
  const { docs } = useFirestore('auctions');

  return (
    <div className="py-5">
      <div className="container">
        <Introduction />

        {auction && <ProgressBar auction={auction} setAuction={setAuction} />}

        {globalMsg && <Alert variant="info">{globalMsg}</Alert>}

        {currentUser && <AddAuction setAuction={setAuction} />}

        {docs && (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {docs.map((doc) => {
              return <AuctionCard item={doc} key={doc.id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
