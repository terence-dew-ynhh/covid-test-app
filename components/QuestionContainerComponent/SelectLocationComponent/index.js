import styles from './SelectLocationComponent.module.css'


 const SelectLocation  = ({ setSchedulerURL }) => {

  const locations = ['Bridgeport Hospital', 'Greenwich Hospital'] 

  const locationOptions = locations.map((option, idx) => (
    <option key={idx} value={option}>
      {option}
    </option>
  ));
  
  return (
    <>
      <div
        className={styles.question_row_item}
      >
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
}

export default SelectLocation;
