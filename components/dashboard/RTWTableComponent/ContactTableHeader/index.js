import React from 'react';
import styles from './ContactTableHeader.module.css';

function ContactTableHeader() {
  return (
    <div className={styles.ContactItem}>
      <button className={styles.contact_button}>First Name</button>
      <button className={styles.contact_button}>Last Name</button>
      <button className={styles.contact_button}>Phone</button>
      <button className={styles.contact_button}>Date of Birth</button>
      <button className={styles.contact_button}>Submitted Pathway #</button>
      <button className={styles.contact_button}>RTW Status</button>
      <button className={styles.contact_button}>Final RTW Date</button>
      <button className={styles.contact_button}>Out of Work Date</button>
      <button className={styles.contact_button}>Submitted Date</button>
      <button className={styles.contact_button}>OCC Reviewed?</button>
    </div>
  );
}

export default ContactTableHeader;
