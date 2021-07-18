import React from 'react';

const MomentCard = (props) => {
  let d = new Date(props.moment.date);
  const m = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = m[d.getUTCMonth()];
  const day = d.getUTCDate();
  const year = d.getUTCFullYear();
  const dateString = `${month} ${day}, ${year}`;

  let classString = `card ${month}`;
  if (props.moment.isSignificant) {
    classString += ' significant';
  }

  return (
    <tr className={classString}>
      <td>{props.moment.category.emoji}</td>
      <td>{dateString}</td>
      <td style={{ width: '100%' }}>{props.moment.entry}</td>
      <td className='actions'>
        <button>Edit</button> <button>Delete</button>
      </td>
    </tr>
  );
};

export default MomentCard;
