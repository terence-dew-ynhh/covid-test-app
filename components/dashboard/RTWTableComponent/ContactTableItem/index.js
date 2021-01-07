import React, { useState } from 'react';
import styles from './ContactTableItem.module.css';
const axios = require('axios');

function ContactTableItem({ contactInfo, checkId }) {
  const [isChecked, setIschecked] = useState(contactInfo.occ_health_review);
  const handleChecked = (e) => {
    setIschecked(!isChecked);
    console.log(contactInfo['_id']);
    axios
      .post('/api/rtwinfo', { id: contactInfo['_id'], occ_review: !isChecked })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const formatDate = (date) => {
    if (!date) return null;
    let year = date.slice(1, 5);
    let month = date.slice(6, 8);
    let day = date.slice(9, 11);
    console.log(date);
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec'
    ];

    return `${months[parseInt(month) - 1]}-${day}-${year}`;
  };

  const checkbox = isChecked ? (
    <>
      {' '}
      <input
        id={`checkbox_${checkId}`}
        type="checkbox"
        checked
        name="reviewed"
        onChange={(e) => {
          handleChecked(e);
        }}
      ></input>
      <label className={styles.label} htmlFor={`checkbox_${checkId}`}></label>{' '}
    </>
  ) : (
    <>
      {' '}
      <input
        id={`checkbox_${checkId}`}
        type="checkbox"
        name="reviewed"
        onChange={(e) => {
          handleChecked(e);
        }}
      ></input>
      <label className={styles.label} htmlFor={`checkbox_${checkId}`}></label>{' '}
    </>
  );

  return (
    <div className={styles.ContactItem}>
      <p className={styles.contact_p}>{contactInfo.firstName}</p>
      <p className={styles.contact_p}>{contactInfo.lastName}</p>
      <p className={styles.contact_p}>{contactInfo.phone}</p>
      <p className={styles.contact_p}>{formatDate(contactInfo.dob)}</p>
      <p className={styles.contact_p}>{contactInfo.pathway}</p>
      <p className={styles.contact_p}>{contactInfo.rtwstatus ? 'Yes' : 'No'}</p>
      <p className={styles.contact_p}>
        {formatDate(contactInfo.finalrtwdate) || 'None'}
      </p>
      <p className={styles.contact_p}>
        {formatDate(contactInfo.outofworkdate) || 'None'}
      </p>
      <p className={styles.contact_p}>
        {formatDate(contactInfo.date) || 'None'}
      </p>
      {checkbox}
    </div>
  );
}

export default ContactTableItem;
