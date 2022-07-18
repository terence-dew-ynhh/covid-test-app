import { useState } from 'react';
import PriorTest from '../PriorTestQuestionComponent';
import OverEighteen from '../Over18Component';
import ConsentComponent from '../ConsentComponent';
import SelectSymptoms from '../SelectSymptomsComponent';
import SelectLocationComponent from '../SelectLocationComponent';
import SchedulingForComponent from '../SchedulingForComponent';
import AsympConsentComponent from '../AsympConsentComponent';
import SympConsentComponent from '../SympConsentComponent';
import HealthProvQuestionComponent from '../HealthProvQuestionComponent';
import DisclaimerComponent from '../DisclaimerComponent';
import BillingChangeComponent from '../BillingChangeComponent';
import NotOfferedComponent from '../NotOfferedComponent';
import RetailComponent from '../RetailComponent';
import styles from './QuestionViewComponent.module.css'


const QuestionViewComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush,
  updateLocation,
  hasSymptoms,
  updateIsFiveOrBelow,
  updateSelectionCode
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);

  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };

  const isNextEnabled = (isEnabled) => {
    setNextEnabled(isEnabled);
  };

  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);    
  };     
  
  const components = {
    location: SelectLocationComponent,
    symptomssel: SelectSymptoms,
    eighteen: OverEighteen,
    consent: ConsentComponent,
    priortest: PriorTest,
    schedulingfor: SchedulingForComponent,
    asympconsent: AsympConsentComponent,
    sympconsent: SympConsentComponent,
    healthprov: HealthProvQuestionComponent,
    info: DisclaimerComponent,
    billingchange: BillingChangeComponent,
    notoffered: NotOfferedComponent,    
    retail: RetailComponent    
  };

  const ComponentName = components[compName || 'employee'];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
      <ComponentName
        nextPage={nextPage}
        isPrevEnabled={isPrevEnabled}        
        isDoneEnabled={isDoneEnabled}
        isNextEnabled={isNextEnabled}
        hasSymptoms={hasSymptoms}
        updateLocation={updateLocation}
        updateIsFiveOrBelow={updateIsFiveOrBelow}
        updateSelectionCode={updateSelectionCode}
        schedulePush={schedulePush}
      />
      </div>
      <div className={styles.buttonContainer}>
      <button className="button" hidden={!nextEnabled} onClick={nextPage}>
        {`Next >`}
      </button>            
      <button className="button" hidden={!prevEnabled} onClick={prevPage}>
        {`< Back`}
      </button>
      <button className="button" hidden={!doneEnabled} onClick={schedulePush}>
      Schedule COVID-19 Testing Only
      </button> 
      </div>
    </div>
  );
};

export default QuestionViewComponent;
