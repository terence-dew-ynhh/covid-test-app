import { useState } from 'react';
import EmployeeQuestion from '../EmployeeQuestionComponent';
import SelectSymptoms from '../SelectSymptomsComponent';
import SevereSympStatement from '../SevereSympStatementComponent';
import SymptomsStatement from '../SymptomsStatementComponent';
import OutOfWorkConsentComponent from '../OutOfWorkConsentComponent';
import NegResultConsentComponent from '../NegResultConsentComponent';
import HighRiskStatementComponent from '../HighRiskStatementComponent';
import RequireCovidTestingComponent from '../RequireCovidTestingComponent';
import ReturnedFromHighRiskComponent from '../ReturnedFromHighRiskComponent';
import PostTravelTestingComponent from '../PostTravelTestingComponent';
import TravelTestingComponent from '../TravelTestingComponent';
import SelectLocation from '../SelectLocationComponent';
import VaccineDoseComponent from '../VaccineDoseComponent';
import ExposureToCovidComponent from '../ExposureToCovidComponent';
import PossibleFluConsent from '../PossibleFluConsentComponent'
import VaccineExemptConsentComponent from '../VaccineExemptConsentComponent'
import styles from './QuestionViewComponent.module.css'


const QuestionViewComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush,
  updateLocation
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);

  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };


  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);    
  };     

  const setSchedulerURL = (location) => {updateLocation(location)};
  
  const components = {
    employee: EmployeeQuestion,
    symptomssel: SelectSymptoms,
    sevsymptomsstatment: SevereSympStatement,
    symptomsstatment: SymptomsStatement,
    outworkconsent: OutOfWorkConsentComponent,
    negconsent: NegResultConsentComponent,
    highriskstatement:HighRiskStatementComponent,
    needcovidtesting: RequireCovidTestingComponent,
    traveltesting: TravelTestingComponent,
    returnfromhighrisk: ReturnedFromHighRiskComponent,
    posttravel: PostTravelTestingComponent ,
    location: SelectLocation,
    vaccinedose: VaccineDoseComponent,
    exposuretocovid: ExposureToCovidComponent,
    possibleflu:PossibleFluConsent,
    vaccineexempt: VaccineExemptConsentComponent
  };

  const ComponentName = components[compName || 'employee'];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
      <ComponentName
        nextPage={nextPage}
        isPrevEnabled={isPrevEnabled}        
        isDoneEnabled={isDoneEnabled}
        setSchedulerURL={setSchedulerURL}
        schedulePush={schedulePush}
      />
      </div>
      <div className={styles.buttonContainer}>          
      <button className="button" hidden={!prevEnabled} onClick={prevPage}>
        {`< Back`}
      </button>
      <button className="button" hidden={!doneEnabled} onClick={schedulePush}>
        Schedule Appoinment
      </button>  
      </div>
    </div>
  );
};

export default QuestionViewComponent;
