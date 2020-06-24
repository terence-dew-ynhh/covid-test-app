import Head from 'next/head';

export default function EmployeeQuestion() {
  const [schedulerEndpoint, setSchedulerEndpoint] = useState(
    'Bridgeport Hospital'
  );

  return (
    <>
      <div hidden={!(hasSymptoms === "No")} className={styles.question_row_item}>
              <div className={styles.question_row_item_sub}>
                <fieldset>
                  <legend>What is your preferred collection location?</legend>

                  <div className="select-wrapper">
                    <select
                      onChange={(e) => setSchedulerEndpoint(e.target.value)}
                      className="select"
                    >
                      {locationOptions}
                    </select>
                  </div>
                </fieldset>
              </div>
            </div>
      <style jsx>{``}</style>
    </>
  );
}
