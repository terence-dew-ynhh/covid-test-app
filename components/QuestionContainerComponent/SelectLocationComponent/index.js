import styles from './SelectLocationComponent.module.css';
import { useEffect } from 'react';

const SelectLocation = ({ isPrevEnabled, isDoneEnabled, setSchedulerURL }) => {
const locations = [    
'Advanced Nursing and Rehab Mass Testing',
'Apple Rehab Guilford Mass Testing',
'Avalon Health Center Testing',
'Bayview Mass Testing',
'Branford Hills Mass Testing',
'Bride Brook Mass Testing',
'Carolton Chronic and Convalescent Testing',
'Edgehill Mass Testing',
'Fairview Groton Mass Testing',
'Greentree Manor Testing',
'Greenwich Woods Mass Testing',
'Guilford Mass Testing',
'Hamden Health Mass Testing',
'Jewish Services Mass Testing',
'Lord Chamberlain Mass Testing',
'Ludlowe Center for Health and Rehab Testing',
'Milford Health and Rehab Testing',
'Montowese Mass Testing',
'Mystic Health Mass Testing',
'Nathaniel Witherell Mass Testing',
'Northbridge Health Care Center Testing',
'Pendleton Mass Testing',
'Spring at Watermark Testing',
'Waveny Mass Testing',
'West River Mass Testing',
'Westfield Care and Rehab Testing',
'Whitney Rehab Mass Testing'
];

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(true);
  }, []);

  const locationOptions = locations.map((option, idx) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>What is your preferred collection location?</legend>

            <div className="select-wrapper">
              <select
                onChange={(e) => setSchedulerURL(e.target.value)}
                className="select"
              >
                {locationOptions}
              </select>
            </div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SelectLocation;
