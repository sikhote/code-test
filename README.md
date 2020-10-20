# code test
This is a code test to survey coding preferences, coding proficiency, ability to communicate, and ability to follow directions. There are two parts: First, create a very small project from the ground up; second, modify code on an existing project. All work is to be completed within this repository and submitted as a merge request. Note: this is a React coding test, but it also includes working with various other JavaScript tools that are part of the React ecosystem.

Reach out to David Sinclair as needed for any questions—this is certainly not looked down upon. This is a new test and interpreting someone else's code can be difficult.

1. Create a new form

The exercise in this part is to give flexibility to the tester to show their preferences and ability to start a project fresh. Using any React starting point (react create app, next js, webpack, or anything else), create a single input form field and a button to submit the form. The details are:

- Create an input field
- The text field will have the label "Reason for contacting"
- The text field will be required before submitting occurs
- If user tries to submit without any text, show this error somewhere on the page: "This field is required"
- Add a button with the label "Submit", which will then execute the following: `alert('Submitted');` when submitting without any errors
- Use any CSS method desired to apply some light styling to the input field and button (no more than 10 minutes of styling in total)

2. Modify an existing form

The exercise in this part is to modify existing code. Within the `existing-form` folder, modify the form located at `existing-form/components/pages/Index/index.js`. The modifications are as follows:

- Add an input field that accepts a last name
- The text field will have the label "Last name"
- The text field should be required, but it cannot be longer than 80 characters
- If user tries to submit without any text or with too long of text, a red border should show (similar to how the other inputs work)
- Use existing coding patterns as much as possible

To get the `existing-form` project running, take the following steps:
- In terminal or command line, go to the `existing-form` folder.
- Execute `yarn install` to install dependencies (or `npm install` if you do not have Yarn installed)
- Execute `yarn dev` to start a development server (or `npm run dev` if you do not have Yarn installed)
- Visit `http://localhost:3000/` on a browser
- Begin coding!
