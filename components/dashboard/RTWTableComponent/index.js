import React, { useEffect, useState } from 'react';
import ContactTableItem from '../ContactTableItem'
import styles from './RTWTableComponent.module.css'
const axios = require('axios');


function RTWTableComponent(props) {
    const [facilityItems, setFacilityItems] = useState([]);
    //   const [orderBy, setOrderBy] = useState("name");
    // const [dataReady, setDataReady] = useState(false);




    useEffect(() => {
        axios
            .get('/api/rtwinfo')
            .then((rtwcontacts) => {
                console.log(rtwcontacts);
                return rtwcontacts.data;
            })
            .catch(function (error) {
                console.log(error);
            }).then((rtwcontacts) => {

                let rtwContactArr = rtwcontacts.map((rtwcontact, index) => {
                    return (<ContactTableItem key={index}
                        contactInfo={rtwcontact}
                    />)
                });
                setFacilityItems(rtwContactArr);
            })


    // fetch('/api/facilities?delivery_net=' + props.deliveryNetwork)
    //   .then(data => data.json())
    //   .then(function (facilities) {
    //     let facilityItems = facilities
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
    //     setFacilityItems(facilityItems);
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
                </div>
                {/* {!dataReady ? <img src={process.env.PUBLIC_URL + 'logoynhhospital2x.png'} alt="Logo" /> : null} */}
                {facilityItems}
            </div>
        </>)
}
export default RTWTableComponent;
