import { useState, useEffect } from 'react';
import DepartmentSelectComponent from '../DepartmentSelectComponent';
import PinInputComponent from '../PinInputComponent';
import VaccineDateSelectComponent from '../VaccineDateSelectComponent';
import FirstDoseComponent from '../FirstDoseComponent';
import ListedConditionsConsent from '../ListedConditionsConsent';
import TestedPositiveComponent from '../TestedPositiveComponent';
import CovidSymptomsComponent from '../CovidSymptomsComponent';
import FactSheetComponent from '../FactSheetComponent';
import SelectVaccineComponent from '../SelectVaccineComponent';
import QuarantineComponent from '../QuarantineComponent';
import SelectSymptomsComponent from '../SelectSymptomsComponent'
import ReceiveVaccinationConsent from '../ReceiveVaccinationConsent'
import styles from './QuestionViewComponent.module.css';

const QuestionViewComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush,
  updateLocation,
  setDepartment,
  verifyPin,
  isPfizer,
  pfizerSelected
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);

  useEffect(() => {}, []);

  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };

  const isNextEnabled = (isEnabled) => {
    setNextEnabled(isEnabled);
  };

  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);
  };

  const setSchedulerURL = (location) => {
    updateLocation(location);
  };

  const components = {
    deptselect: DepartmentSelectComponent,
    pininput: PinInputComponent,
    firstdose: FirstDoseComponent,
    listconditions: ListedConditionsConsent,
    testedpositive: TestedPositiveComponent,
    covidsymptoms: CovidSymptomsComponent,
    factsheet: FactSheetComponent,
    selectedvaccine: SelectVaccineComponent,
    vaccinedateselect: VaccineDateSelectComponent,
    quartinecovid: QuarantineComponent,
    selectsymptoms: SelectSymptomsComponent,
    vaccineconsent: ReceiveVaccinationConsent
  };

  const ComponentName = components[compName || 'pininput'];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
        <ComponentName
          nextPage={nextPage}
          isPrevEnabled={isPrevEnabled}
          isNextEnabled={isNextEnabled}
          isDoneEnabled={isDoneEnabled}
          setSchedulerURL={setSchedulerURL}
          schedulePush={schedulePush}
          setDepartment={setDepartment}
          verifyPin={verifyPin}
          isPfizer={isPfizer}
          pfizerSelected={pfizerSelected}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className="button" hidden={!prevEnabled} onClick={prevPage}>
          {`< Back`}
        </button>
        <button className="button" hidden={!nextEnabled} onClick={nextPage}>
          {`Next >`}
        </button>
        <button
          className="button"
          hidden={!doneEnabled}
          onClick={() => schedulePush(false)}
        >
          Schedule Appoinment
        </button>
      </div>
    </div>
  );
};

export default QuestionViewComponent;
