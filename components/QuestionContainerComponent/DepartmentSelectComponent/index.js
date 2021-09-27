import { useState, useEffect } from 'react';
import styles from './DepartmentSelectComponent.module.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import departmentsObj from '../../../data/departments.json';

const DepartmentSelectComponent = ({
  isPrevEnabled,
  isNextEnabled,
  isDoneEnabled,
  setDepartment,
  updateAnswerData
}) => {
  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
    isNextEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <label>Please Select Employer:</label>
        <br></br>
        <br></br>
        <Autocomplete
          id="combo-box-demo"
          options={departmentsObj.departments}
          getOptionLabel={(dept) => dept}
          onChange={(e, selDept) => {
            setDepartment(selDept);
            updateAnswerData({ employer: selDept });
            isNextEnabled(true);
          }}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Employer"
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
