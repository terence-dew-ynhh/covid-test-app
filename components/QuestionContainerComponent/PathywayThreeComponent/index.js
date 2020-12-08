import NoCovidTestComponent from './NoCovidTestComponent';
import styles from './PathywayThreeComponent.module.css';
import { useRouter } from 'next/router';

const PathywayThreeComponent = ({ selectPathway }) => {
  const router = useRouter();
  const components = [NoCovidTestComponent];

  // TODO: Yes: route to Testing website: https://ocucovidtesting.ynhhs.org/ || No: Symptom Recovery Questions

  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);
  };

  const schedulePush = () => {
    window.location.href = 'https://ocucovidtesting.ynhhs.org/';
  };

  const ComponentName = components[0];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
        <ComponentName
          selectPathway={selectPathway}
          schedulePush={schedulePush}
        />
      </div>
      <div className={styles.buttonContainer}></div>
    </div>
  );
};

export default PathywayThreeComponent;
