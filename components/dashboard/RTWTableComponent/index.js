import React, { useEffect, useState } from 'react';
import ContactTableItem from './ContactTableItem';
import ContactTableHeader from './ContactTableHeader';
import styles from './RTWTableComponent.module.css';
const axios = require('axios');

function RTWTableComponent(props) {
  const [rtwContacts, setRtwContacts] = useState([]);

  useEffect(() => {
    axios
      .get('/api/rtwinfo')
      .then((rtwcontacts) => {
        console.log(rtwcontacts);
        return rtwcontacts.data;
      })
      .catch(function (error) {
        console.log(error);
      })
      .then((rtwcontacts) => {
        let sortedArr = rtwcontacts.sort((a, b) => {
            if (a.lastName < b.lastName) {
              return -1;
            }
            if (a.lastName > b.lastName) {
              return 1;
            }
            return 0;
          }).sort((x, y) => {
        // false values first
        return (x.occ_health_review === y.occ_health_review)? 0 : x.occ_health_review? 1 : -1;
          })

        let rtwContactArr = sortedArr.map((rtwcontact, index) => {
          return (
            <ContactTableItem
              key={index}
              checkId={index}
              contactInfo={rtwcontact}
            />
          )
        });
        setRtwContacts(rtwContactArr);
      });

    // fetch('/api/facilities?delivery_net=' + props.deliveryNetwork)
    //   .then(data => data.json())
    //   .then(function (facilities) {
    //     let rtwContacts = facilities
    //       .filter(facility => facility.name.toLowerCase().includes(props.filter))
    //       .sort((a, b) => {
    //         let searchBedType = props.covidMode ? "covid_beds" : "beds";
    //         return orderBy === "Male_Beds"
    //         ? addBeds(b[searchBedType],true) - addBeds(a[searchBedType],true): orderBy === "Female_Beds"
    //         ?  addBeds(b[searchBedType],false) - addBeds(a[searchBedType],false) : orderBy === "last_updated"
    //           ? (parseInt(b[orderBy]) || 0) - (parseInt(a[orderBy]) || 0) : a[orderBy].localeCompare(b[orderBy])
    //       })
    //       .map((facility, index) => {
    //         return (<UserTableItem key={index}
    //           covidMode={props.covidMode}
    //           facility={facility}
    //           setSNFProfile={setSNFProfile}
    //            />)
    //       });
    //     setDataReady(true);
    //     setrtwContacts(rtwContacts);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
  }, []);

  return (
    <>
      <div className={styles.FacilityDisplayTable}>
        <ContactTableHeader></ContactTableHeader>
        {rtwContacts}
      </div>
    </>
  );
}
export default RTWTableComponent;
