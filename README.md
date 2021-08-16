# covidvaccine.ynhh.org
___

- [Contents](#covidvaccineynhhorg)
    - [Contacts](#contacts)
    - [Visual Studio Code](#visual-studio-code)
    - [Cloning From Github](#cloning-from-github)
    - [Postman - IF NEEDED](#postman)
    - [Commit and Push Process](#commit-and-push-process)
    - [Common Asks and Resolution](#common-asks-and-resolution)
    - [Application Structure](#application-structure)
    - [Pages](#pages)
    - [Components](#reusable-components)

  
### Contacts
___
- **Yauheni Solad** - 203-863-3095
- **Terence Dew** - 516-690-7496
- **Timothy Cooney - Anything Epic Related** - 203-752-8830
- **Kerry Covington - Project Manager under Kunjan** - 203-606-6823
- **Roger Gagne - Server Admin** - 203-314-7071
- **Kunjan Divatia - Project Manager** - 203-863-3095

### Visual Studio Code
___
1. Download VSCode [here](https://code.visualstudio.com/download)
### Cloning From Github
___
1. install Git - [here](https://git-scm.com/downloads)
2. In Terminal, navigate to a folder in which you wish to work on your code. 
3. i.e. cd Documents/Web_Apps
4. `git clone https://github.com/terence-dew-ynhh/covid-test-app.git`
5. select branch of application you are working in. Only select new branch when you've committed on your current branch.

### Postman 
[Preconfigured Setup File - Click Here](https://www.getpostman.com/collections/a71cb5f67cf3ff314837)
- Download the json file and import into postman
- Run the request but changing the following parts:
- covidvaccine - 3032
- vaccinepartner - tbd
- fairhavenvaccine - 3020
- Change value to **true** to open and **false** to close
- Press send. Should not throw error.

### Commit and Push Process
- **If you are confused then do not try to fix it yourself. This can potentially cause major issues. Call me. Follow these steps to the letter and you should have no problems.**
- Pull Any Possible Changes
- Make Your Changes 
- Review Changes with another team member
- Commit Changes Locally
- Push to Github
  
### Common Asks and Resolutions
___

#### "We want to update the language on this page"
- Find the json file contained in the Component folder
- If not there check in the index.js file for String Literals
- RUN & TEST!!!
#### "We want to add a screen here"
- Learn which screen this most mirrors the features of the asked component
- Copy it and paste it into the QuestionContainerComponent  (make sure it is there)
- Create a name for it in the QuestionContainerComponent index.js (compNames)
- Make sure to place it in the proper order there
- Add it as an import to the QuestionViewComponent index.js
- RUN & TEST!!!
#### "If a user clicks this option we go here and if they click go there"
- Add or move component you need to the proper spot on compNames. One after the other
- Update the onClick or onChange function and call `nextPage(e, [next page step i.e. 1 or 2])` 
- RUN & TEST!!!
#### "We want to change the order of these screens"
- Move component you need to the proper spot on compNames.
- RUN & TEST!!!
#### "We need to update the open scheduler url (Tim Cooney sends you this)"
- pages/schedule.js
- Update the appropriate url based on the logic
- RUN & TEST!!!
#### I want to Open/Close the Site
- Contact Tim Cooney and he will shut it off

### Application Structure
___
#### Application - index.js
- Outer Frame for Entire Application
  - `<QuestionContainerComponent isSpanish={isSpanish} updateHeader={updateHeader} />`
- Manages Spanish Setting
  - `<button className="langButton" onClick={(e) => setIsSpanish(!isSpanish)}>
          {isSpanish ? 'English' : 'Español'}
        </button>`
#### Questions Container - QuestionContainerComponent
-  Holds Majority of the Application Level Logic
  
  `const overEighteen = (isOver18) => {
    setIsOver18(isOver18);
  };`

  `const setRiskGroup = (isRiskGroup) => {
    setIsRiskGroup(isRiskGroup);
  };`

  `const updateAnswerData = (questionData) => {
    // const dataKey = questionData.keys()
    // setResponseOrder([...responseOrder, ...dataKey[0]]);
    setResponseData({ ...responseData, ...questionData });
  };`

- Controls Component Progression (Do not modify)
  
  `  const nextPage = (e, pageIncrement = 1) => {
    let index = viewIdx + pageIncrement;
    setviewIdx(index);
    let newjumpArr = [...viewJump, pageIncrement];
    setviewJump(newjumpArr);
  };`

  `const prevPage = (e) => {
    let index = viewIdx - viewJump[viewJump.length - 1];
    let newjumpArr = [...viewJump];
    newjumpArr.splice(viewJump.length - 1, 1);
    setviewJump(newjumpArr);
    setviewIdx(index);
  };`

- Directory for All Child Components

#### QuestionView - QuestionViewComponent

- Pushes QuestionContainer functions to Children
- Imports All Child Components:
  
  `const components = {
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
    ynhhfactsheet: YNHHFactSheetComponent
  }`

-And Loads Them:

  `<ComponentName
          nextPage={nextPage}
          isPrevEnabled={isPrevEnabled}
          isNextEnabled={isNextEnabled}
          ...
        />`

- Hide/Show Back/Previous/Schedule Button
  `  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };`

  `const isNextEnabled = (isEnabled) => {
    setNextEnabled(isEnabled);
  };`

  `const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);
  };`
### Pages

___

- index.js
- scheduling.js:
  - Link is first determined by whether the person is over 18 (Adult) and then checks whether they are High Risk or not.
     
  `link =
    isOver18 == 'true'
      ? isRiskGroup == 'true'
        ? 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85374,85643,86213,84790,85637,86214,84789,85635,86215,84788,85636,86216,84787,85638,86217,84814,85639,86218,85097,85642,86171,84786,85640,86219&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
        : 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85374,85643,86213,84790,85637,86214,84789,85635,86215,84788,85636,86216,84787,85638,86217,84814,85639,86218,85097,85642,86171,84786,85640,86219&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
      : isRiskGroup == 'true'
      ? 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=86297,86298,86299,86300,86301,86302,86303&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
      : 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85374,84790,84789,84788,84787,84814,86171,84786&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1';`

### Reusable Components
___
- **Radio**
  - **Example**: AgeComponent
  - **Usage**: A when a users needs to select a choice from multiple options. 
- **Checkbox** 
  - **Example**: ReceiveVaccinationConsent
  - **Usage**: Attestations and Statements which need acknowledgement
  - **Alt Usage**: Select Multiple Choices
- **Input** 
  - **Example**: ZipInputComponent, PinInputComponent 
  - **Usage**: Taking User Input that is Alphanumerical
  

