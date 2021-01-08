import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';

const axios = require('axios');

export default function SubmissionForm({ rtwStatus, pathway }) {
  const router = useRouter();
  const intialValues = { firstName: '', lastName: '', phone: '', dob: '' };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccessful, setSubmitSuccessful] = useState(false);

  // /^[A-Za-z]+$/i
  // /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
  const sendData = () => {
    let today = new Date();
    let twodaysFromToday = new Date();
    twodaysFromToday.setDate(twodaysFromToday.getDate() + 2);

    let contactData = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      phone: formValues.phone,
      dob: JSON.stringify(formValues.dob),
      pathway: pathway,
      rtwStatus: rtwStatus,
      finalrtwdate: rtwStatus ? JSON.stringify(today) : null,
      outofworkdate: rtwStatus ? null : JSON.stringify(twodaysFromToday),
      date: JSON.stringify(today),
      occ_health_review: false
    };

    axios
      .post('/api/rtwinfo', contactData)
      .then(function (response) {
        console.log(response);
        alert('Thank You For Your Submission');
        setSubmitSuccessful(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(contactData);
    if (pathway === '4') {
      router.push('/mychart');
    }
  };

  const handleChange = (e) => {
    setIsSubmitting(false);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const getYear = (date) => {
    return date.getFullYear();
  };

  const getMonth = (date) => {
    return date.getMonth();
  };

  function range(size, startAt = 0) {
    return [...Array(size).keys()].map((i) => startAt - i);
  }

  const years = range(90, getYear(new Date()) + 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const validate = (values) => {
    let errors = {};
    const nameRegex = /^[a-z ,.'-]+$/i;
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!values.firstName) {
      errors.firstName = 'Cannot be blank';
    } else if (!nameRegex.test(values.firstName)) {
      errors.firstName = 'Invalid Name';
    }

    if (!values.lastName) {
      errors.lastName = 'Cannot be blank';
    } else if (!nameRegex.test(values.lastName)) {
      errors.lastName = 'Invalid Name';
    }

    if (values.phone === '') {
      errors.phone = 'Cannot be blank';
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = 'Invalid Phone Number';
    }

    if (!values.dob) {
      errors.dob = 'Cannot be blank';
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      setIsSubmitting(false);
      sendData();
    }
  }, [formErrors, isSubmitting, sendData]);

  return (
    <div className="container">
      <Head>
        <title>COVID-19 Employee Return to Work Clearance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      <h1 className="title">Please Enter your Contact Info:</h1>
      <div className="questionContainer">
        <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input
            id="firstName"
            className={`${formErrors.firstName && 'input-error'} form-input`}
            name="firstName"
            value={formValues.firstName}
            onChange={(e) => handleChange(e)}
          />
          {formErrors.firstName && (
            <span className="">{formErrors.firstName}</span>
          )}
          <label>Last Name:</label>
          <input
            id="lastName"
            className={`${formErrors.lastName && 'input-error'} form-input`}
            name="lastName"
            value={formValues.lastName}
            onChange={(e) => handleChange(e)}
          />
          {formErrors.lastName && (
            <span className="">{formErrors.lastName}</span>
          )}
          <label>Contact Number:</label>
          <input
            id="phone"
            className={`${formErrors.phone && 'input-error'} form-input`}
            name="phone"
            value={formValues.phone}
            onChange={(e) => handleChange(e)}
          />
          {formErrors.phone && <span className="">{formErrors.phone}</span>}
          <label>Date of Birth:</label>
          <DatePicker
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled
            }) => (
              <div
                style={{
                  margin: 10,
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  {'<'}
                </button>
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  {'>'}
                </button>
              </div>
            )}
            className={`${formErrors.dob && 'input-error'} date-input`}
            isClearable
            selected={formValues.dob}
            onChange={(date) =>
              handleChange({ target: { name: 'dob', value: date } })
            }
          />
          {formErrors.dob && <span className="">{formErrors.dob}</span>}
          <input
            className="centered_button"
            hidden={submitSuccessful}
            type="submit"
          />
        </form>
      </div>

      <style jsx>{`
        .questionContainer {
          width: 65%;
          background: white;
          box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          align-items: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          padding: 20px 10%;
          margin-top: 40px;
        }
        form {
          width: 60%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }
        .form-input {
          height: 35px;
        }
        .date-input {
          width: 100%;
        }
        .input-error {
          border: solid 2px red !important;
        }
        .centered_button {
          padding: 15px 35px;
          margin: 15% 3% 6% 0;
          border: 2px solid #000;
          background: transparent;
          color: #000;
        }
        label {
          margin-top: 15px;
          margin-bottom: 10px;
        }
        h2,
        .main-h {
          color: #0070c0;
        }
        .main-link {
          background: #00008b;
          font-size: 2em;
          color: white;
          width: 60%;
        }
        ul {
          width: 100%;
        }
        @media (max-width: 422px) {
          .main-link {
            font-size: 1.5em;
          }
          .questionContainer {
            width: 90%;
          }
          form {
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
}

SubmissionForm.getInitialProps = async ({ query }) => {
  const { rtwstatus, pathway } = query;
  let rtwStatus = rtwstatus == 'true' ? true : false;

  return {
    rtwStatus,
    pathway
  };
};
