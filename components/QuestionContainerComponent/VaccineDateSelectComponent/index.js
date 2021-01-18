import { useState, useEffect } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import styles from './VaccineDateSelectComponent.module.css';

const VaccineDateSelectComponent = ({
  nextPage,
  isPrevEnabled,
  isNextEnabled,
  isDoneEnabled,
  updateField,
  verifyPin,
  isPfizer,
  setReccDate,
  updateAnswerData
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    isDoneEnabled(true);
    isPrevEnabled(true);
    isNextEnabled(false);
    setReccDate(getFormattedDate( new Date()));
  }, []);

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
    setReccDate(getFormattedDate(date));
    updateAnswerData({first_dose_date: getFormattedDate(date)})
  };

  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
  }

  let suggestedText = isPfizer
    ? `${getFormattedDate(
        selectedDate.addDays(19)
      )} - ${getFormattedDate(selectedDate.addDays(24))}`
    : `${getFormattedDate(
        selectedDate.addDays(26)
      )} - ${getFormattedDate(selectedDate.addDays(31))}`;

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
          <p className="banner">
              Please don’t schedule 2nd dose appointment until you’ve received your 1st dose of vaccine 
            </p>
            <br></br><br></br>
            <label>Select Date you Received First Dose:</label>
            <br></br>
            <br></br>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </MuiPickersUtilsProvider>

            <br></br>
            <br></br>
            <h3>Suggested Dates:</h3>
            <p>{suggestedText}</p>
          </div>
        </div>
        {/* <button className="button" onClick={onSubmit}>
          {`Submit`}
        </button> */}
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default VaccineDateSelectComponent;
