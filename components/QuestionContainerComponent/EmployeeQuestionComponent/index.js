import Head from 'next/head';

export default function EmployeeQuestion() {
  const [isEmployee, setIsEmployee] = useState(true);

  return (
    <>
      <div className="radio_grp">
        <fieldset className="radio_grp_set">
          <legend>
            Are you an employee or medical staff member of Yale New Haven
            Health/ Yale Medicine?
          </legend>
          <input
            defaultChecked
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsEmployee(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsEmployee(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">No</label>
        </fieldset>
        <p className="error" hidden={isEmployee}>
          Sorry, please navigate to a public testing website to schedule your
          test
        </p>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
