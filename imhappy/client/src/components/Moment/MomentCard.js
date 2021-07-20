import React from 'react';
import classes from './MomentCard.module.css';

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

  return (
    <tr
      className={`${classes[month]} ${
        props.moment.isSignificant && classes.significant
      }`}
    >
      <td className={classes.emoji}>{props.moment.category.emoji}</td>
      <td className={classes.date}>{dateString}</td>
      <td className={classes.entry}>{props.moment.entry}</td>
      <td className={classes.actions}>
        <i className={'material-icons ' + classes['actions-button']}>delete</i>
        <i className={'material-icons ' + classes['actions-button']}>edit</i>
      </td>
    </tr>
  );
};

export default MomentCard;
