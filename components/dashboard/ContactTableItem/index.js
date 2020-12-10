import React from 'react';
import styles from './ContactTableItem.module.css';

function ContactTableItem({ contactInfo }) {

    const formatDate = (date) =>{

        return date;
        
    }
  return (
    <div className={styles.ContactItem}>
      <p className={styles.contact_p}>{contactInfo.firstName}</p>
      <p className={styles.contact_p}>{contactInfo.lastName}</p>
      <p className={styles.contact_p}>{contactInfo.phone}</p>
      <p className={styles.contact_p}>{formatDate(contactInfo.dob)}</p>
      <p className={styles.contact_p}>{contactInfo.pathway}</p>
      <p className={styles.contact_p}>{contactInfo.rtwstatus ? 'Yes' : 'No'}</p>
      <p className={styles.contact_p}>{contactInfo.finalrtwdate || 'None'}</p>
      <p className={styles.contact_p}>{contactInfo.outofworkdate || 'None'}</p>
      <p className={styles.contact_p}>{contactInfo.date || 'None'}</p>
    </div>
  );
}

export default ContactTableItem;
