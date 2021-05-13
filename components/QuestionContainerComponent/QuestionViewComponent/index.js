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
import SlotsFilledComponent from '../SlotsFilledComponent'
import AgeComponent from '../AgeComponent'
import MonoclonalComponent from '../MonoclonalComponent'
import ZipInputComponent from '../ZipInputComponent'
import MiscComponent from '../MiscComponent'
import HITHistoryComponent from '../HITHistoryComponent'
import styles from './QuestionViewComponent.module.css';


const QuestionViewComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush,
  setDepartment,
  verifyPin,
  isPfizer,
  pfizerSelected,
  setReccDate,
  department,
  updateAnswerData,
  updateHeader,
  isSpanish,
  zipCodeInRange,
  overEighteen
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);

  useEffect(() => {
    
  }, []);

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
    vaccineconsent: ReceiveVaccinationConsent,
    slotsfilled: SlotsFilledComponent,
    age: AgeComponent,
    monoclonal: MonoclonalComponent,
    zipcode: ZipInputComponent,
    misc: MiscComponent,
    hithistory: HITHistoryComponent
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
          setReccDate={setReccDate}
          department={department}
          updateAnswerData={updateAnswerData}
          updateHeader={updateHeader}
          isSpanish={isSpanish}
          zipCodeInRange={zipCodeInRange}
          overEighteen={overEighteen}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className="button" hidden={!prevEnabled} onClick={prevPage}>
          {isSpanish ? `< Atrás` : `< Back`}
        </button>
        <button className="button" hidden={!nextEnabled} onClick={nextPage}>
          {isSpanish ? `Próximo >` : `Next >`}
        </button>
        <button
          className="button"
          hidden={!doneEnabled}
          onClick={() => {schedulePush(false);}}
        >
          {isSpanish ? `Programar una Cita` : `Schedule Appointment`}
        </button>
      </div>
    </div>
  );
};

export default QuestionViewComponent;
