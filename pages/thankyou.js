import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ThankYou({ link }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const router = useRouter();
  const { endpoint } = router.query;

  const updateField = async (field, fieldVal) => {
    const action = 'post';
    const res = await fetch('/api/responses', {
      method: action,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({'uuid':uuid, 'field':field, 'fieldVal': fieldVal})
    })
  }

  const submitInfo = () => {
    const emailExpression = new RegExp('/\S+@\S+/');
    const nameExpression = new RegExp("/^[a-zA-Z'- ]+$/"); 

    const validEmail = emailExpression.test(String(em).toLowerCase())
    const validName = nameExpression.test(String('my-email@test.com').toLowerCase())
  }

  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Vaccine Clinical Trial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      <h1 className="title">
        Thank You for your Interest in this Vaccine Trial
      </h1>
      <div className="questionContainer">
        <p>
          Based on your responses you do not qualify for this clinical trial. If
          you would like to be contacted about future vaccine trials, please
          contact our team at Yale <a href="helpusdiscover@yale.edu">helpusdiscover@yale.edu</a>
        </p>
        {/* <p>
          Based on your responses you do not qualify for this clinical trial. If
          you would like to be contacted about future vaccine trials, please
          enter your contact details below:
        </p> */}
         {/* <fieldset className="radio_grp_set">
          <div className="question_row_item">
            <label htmlFor="employee_staff_check_yes">Full Name:</label>
            <input
              id="employee_staff_check_yes"
              type="text"
              placeholder='Enter your Name'
              value={name}
              onChange={(e) => setName(e)}
              name="applicant_name"
            ></input>
          </div>
          <div className="question_row_item">
            <label htmlFor="employee_staff_check_yes">Email:</label>
            <input
              id="employee_staff_check_yes"
              type="text"
              placeholder='Enter your Email'
              value={email}
              onChange={(e) => setEmail(e)}
              name="applicant_email"
            ></input>
          </div>
        </fieldset>
        <div className ="buttonContainer">              
        <button className="button" hidden={false} onClick={ e => console.log(e) }>
        {`Submit`}
      </button> 
      <button className="button" hidden={true} onClick={(e) => updateAndProgress(e)}>

        {`Next >`}
      </button>  
      <button className="button" hidden={true} onClick={() => schedulePush(false)}>
        Schedule Appoinment
      </button>  
      </div> */}
        
      </div>

      <style jsx>{`
        .questionContainer {
          width: 60%;
          background: white;
          box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
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
          padding: 40px;
        }

        .buttonContainer{
          padding-top: 25px;
        }
        @media (max-width: 700px) {
          .questionContainer {
            width: 100%;
            padding-left: 40px;
          }
        }
      `}</style>
    </div>
  );
}

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';

// export default function ThankYou({ link }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');


//   const router = useRouter();
//   const { endpoint } = router.query;

//   const updateField = async (field, fieldVal) => {
//     const action = 'post';
//     const res = await fetch('/api/responses', {
//       method: action,
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({'uuid':uuid, 'field':field, 'fieldVal': fieldVal})
//     })
//   }

//   const submitInfo = () => {
//     const emailExpression = new RegExp('\\S+@\\S+');
//     // const nameExpression = new RegExp("[a-zA-Z'- ]+$"); 

//     const validEmail = emailExpression.test(String(email).toLowerCase())
//     // const validName = nameExpression.test(String(name).toLowerCase())

//     if(!validEmail)setErrorMessage('Invalid Email')
//     // if(validName)setErrorMessage('Invalid Name')
//   }

//   return (
//     <div className="container">
//       <Head>
//         <title>Yale COVID-19 Vaccine Clinical Trial</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className="grid">
//         <img src="/YNHHSLogo.png"></img>
//       </div>
//       <h1 className="title">
//         Thank You for your Interest in this Vaccine Trial
//       </h1>
//       <div className="questionContainer">
//         <p hidden={errorMessage === ''}>
//             {errorMessage}
//         </p>
//         <p>
//           Based on your responses you do not qualify for this clinical trial. If
//           you would like to be contacted about future vaccine trials, please
//           enter your contact details below:
//         </p>
//          <fieldset className="radio_grp_set">
//           <div className="question_row_item">
//             <label htmlFor="employee_staff_check_yes">Full Name:</label>
//             <input
//               id="employee_staff_check_yes"
//               type="text"
//               placeholder='Enter your Name'
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               name="applicant_name"
//             ></input>
//           </div>
//           <div className="question_row_item">
//             <label htmlFor="employee_staff_check_yes">Email:</label>
//             <input
//               id="employee_staff_check_yes"
//               type="text"
//               placeholder='Enter your Email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               name="applicant_email"
//             ></input>
//           </div>
//         </fieldset>
//         <div className ="buttonContainer">              
//         <button className="button" hidden={false} onClick={ e => submitInfo() }>
//         {`Submit`}
//       </button> 
//       <button className="button" hidden={true} onClick={(e) => updateAndProgress(e)}>

//         {`Next >`}
//       </button>  
//       <button className="button" hidden={true} onClick={() => schedulePush(false)}>
//         Schedule Appoinment
//       </button>  
//       </div>
        
//       </div>

//       <style jsx>{`
//         .questionContainer {
//           width: 60%;
//           background: white;
//           box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
//           display: -webkit-box;
//           display: -ms-flexbox;
//           display: flex;
//           -webkit-box-pack: center;
//           -ms-flex-pack: center;
//           justify-content: center;
//           -webkit-box-orient: vertical;
//           -webkit-box-direction: normal;
//           -ms-flex-direction: column;
//           flex-direction: column;
//           padding: 40px;
//         }

//         .buttonContainer{
//           padding-top: 25px;
//         }
//         @media (max-width: 700px) {
//           .questionContainer {
//             width: 100%;
//             padding-left: 40px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
