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
  setDepartment
}) => {
  const [ageCount, setAgeCount] = useState(18);

  useEffect(() => {
    isPrevEnabled(false);
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
        {/* <p className="error" hidden={isEmployee}>
        </p> */}
        {/* <fieldset className="radio_grp_set">
          <legend>How old are you?</legend>
          <label htmlFor="employee_staff_check_yes">Age:</label>
          <input
            id={styles.employee_staff_check_yes}
            type="number"
            min="1"
            max="120"
            value={ageCount}
            onChange={(e) => ageChanged(e)}
            name="employee_staff"
          ></input>
        </fieldset> */}
        <label>Please Select Employee:</label>
        <br></br>
        <br></br>
        <Autocomplete
          id="combo-box-demo"
          options={departmentsObj.departments}
          getOptionLabel={(dept) => dept}
          onChange={(e, selDept) => {
            setDepartment(selDept);
            isNextEnabled(true);
          }}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Department"
              variant="outlined"
            />
          )}
        />
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default DepartmentSelectComponent;
