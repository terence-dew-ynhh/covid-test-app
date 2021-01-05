import styles from './SelectSymptomsComponent.module.css';
import { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const SelectSymptoms = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
  const [hasSymptoms, setHasSymptoms] = useState('');
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

   const handleChecked = (e) => {
    setReasons(e.target.value)
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
      maxWidth: 400,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 500,
    },
  },
};
  let checkboxesArray = [
    'Concern about vaccine side effects',
    'Wish to wait until more data is available',
    'Concern about safety in pregnancy',
    'Concern about safety wishing to become pregnant',
    'Concern about safety during lactation',
    'Currently symptomatic with confirmed/suspected COVID-19 infection',
    'Previous SARS-CoV-2 infection',
    'Anaphylactic allergy to a prior vaccine',
    'History of severe allergy and need to carry an Epi-Pen',
    'Other',
  ];



  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={!(hasSymptoms === 'Yes')}>
          If you are at work, notify your manager and leave work. If you are
          home, stay home. Please call Occupational Health to be screened and
          tested today at the COVID-19 Call Center at 203-688-1700. Please
          select a language then option 2 to speak with occupational health.
        </p>
        <div className={styles.question_row_item_sub}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Reason</InputLabel>
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              multiple
              value={reasons}
              onChange={(e) => handleChecked(e)}
              input={<Input />}
              MenuProps={MenuProps}
            >
              {checkboxesArray.map((reason) => (
                <MenuItem
                  key={reason}
                  value={reason}
                  // style={getStyles(name, personName, theme)}
                >
                  {reason}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SelectSymptoms;
