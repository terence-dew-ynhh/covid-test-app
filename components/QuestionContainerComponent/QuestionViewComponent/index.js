import { useState } from 'react';
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
import HaveSymptomsComponent from '../HaveSymptomsComponent';
import ReceiveVaccinationConsent from '../ReceiveVaccinationConsent';
import SlotsFilledComponent from '../SlotsFilledComponent';
import MonoclonalComponent from '../MonoclonalComponent';
import ZipInputComponent from '../ZipInputComponent';
import VaccinationScheduleConsent from '../VaccinationScheduleConsent';
import AgeComponent from '../AgeComponent';
import HITHistoryComponent from '../HITHistoryComponent';
import YNHHFactSheetComponent from '../YNHHFactSheetComponent';
import MiscComponent from '../MiscComponent';
import ThirdDoseComponent from '../ThirdDoseComponent';
import ImmunoCompConsent from '../ImmunoCompConsent';
import ReceiveBoosterConsent from '../ReceiveBoosterConsent';
import SelectPfizerComponent from '../SelectPfizerComponent';
import AllergyComponent from '../AllergyComponent';

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
  overEighteen,
  isOver18,
  setRiskGroup,
  setJJApproved,
  isJassenapproved,
  setImmunocompromised,
  isImmunocomp,
  setBooster,
  isBooster
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);
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
    selectsymptoms: HaveSymptomsComponent,
    vaccineconsent: ReceiveVaccinationConsent,
    slotsfilled: SlotsFilledComponent,
    age: AgeComponent,
    monoclonal: MonoclonalComponent,
    zipcode: ZipInputComponent,
    vaccineschedule: VaccinationScheduleConsent,
    ynhhfactsheet: YNHHFactSheetComponent,
    hithistory: HITHistoryComponent,
    misc: MiscComponent,
    immunocomp: ThirdDoseComponent,
    immunocompconsent: ImmunoCompConsent,
    receivebooster: ReceiveBoosterConsent, 
    selectpfizer: SelectPfizerComponent,
    allergy: AllergyComponent
  };
  const ComponentName = components[compName || 'pininput'];

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
          isOver18={isOver18}
          overEighteen={overEighteen}
          setRiskGroup={setRiskGroup}
          setJJApproved={setJJApproved}
          isJassenapproved={isJassenapproved}
          setImmunocompromised={setImmunocompromised}
          isImmunocomp={isImmunocomp}
          setBooster={setBooster}
          isBooster={isBooster}
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
          onClick={() => {
            schedulePush(false);
          }}
        >
          {isSpanish ? `Programar una Cita` : `Schedule Appointment`}
        </button>
      </div>
    </div>
  );
};

export default QuestionViewComponent;
