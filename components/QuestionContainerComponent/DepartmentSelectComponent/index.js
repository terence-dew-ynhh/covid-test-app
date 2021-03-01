import { useState, useEffect } from 'react';
import styles from './DepartmentSelectComponent.module.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import departmentsObj from '../../../data/departments.json';

const DepartmentSelectComponent = ({
  nextPage,
  isPrevEnabled,
  isNextEnabled,
  isDoneEnabled,
  updateAge,
  setIsFairHaven,
  updateAnswerData
}) => {
  const [ageCount, setAgeCount] = useState(18);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
    isNextEnabled(false);
    // updateAge(18);
  }, []);

  // const ageChanged = (e) => {
  //   if (e.target.value >= 0 && e.target.value <= 120)
  //     setAgeCount(parseInt(e.target.value));
  //   isNextEnabled(true);
  //   updateAge(e.target.value);
  // };

  return (
    <>
      <div className={styles.question_row_item}>

        <label>Please Select Your School District:</label>
        <br></br>
        <br></br>
        <Autocomplete
          id="combo-box-demo"
          options={departmentsObj.departments}
          getOptionLabel={(dept) => dept}
          onChange={(e, selDept) => {
            if(selDept == "Fair Haven School District")
            setIsFairHaven(true);
            else{
              setIsFairHaven(false);
            }
            // updateAnswerData({employer: selDept});
            isNextEnabled(true);
          }}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select School District"
              variant="outlined"
              autoFocus
            />
          )}
        />
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default DepartmentSelectComponent;
