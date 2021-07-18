import React, { useContext, useEffect } from 'react';
import MomentCard from './MomentCard';
import { MomentContext } from './MomentProvider';
import './MomentList.css';

const MomentList = () => {
  const { moments, getAllMoments } = useContext(MomentContext);

  useEffect(() => {
    getAllMoments();
    // eslint-disable-next-line
  }, []);

  if (!moments || moments.length === 0) {
    return <p>No moments found!</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Date</th>
          <th>Entry</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {moments.map((moment) => (
          <MomentCard key={moment.id} moment={moment} />
        ))}
      </tbody>
    </table>
  );
};

export default MomentList;
