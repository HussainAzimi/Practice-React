## Feedback Form React project
The main objective of this project is to practice react, I have created a feedback form using React functional components and manage user details using the useState hook.it gives me practical experience building interactive forms and handling user inputs in React applications.

## Learning objectives

- Create a form to collect user feedback, including their name, email, and the feedback message.
- Handle form submission, including data validation, to ensure that the users enter their names and provide feedback before submitting the form.
- Display a confirmation dialog to users after they submit their feedback, showing the information they entered and prompting them to confirm before final submission.
- Reset the form fields to clear the input values and provide users with a clean form for submitting additional feedback.

## Conclusion
I have implemented a form to collect user feedback in the given 'FeedbackForm' component. The component utilizes React's useState hook to manage form data state, including the user's name, email, and feedback.
The 'handleChange' function updates the form data state as the user inputs information into the form fields. Upon form submission, the 'handleSubmit' function prevents the default form submission behavior, displays a confirmation dialog with the user's details, clears the form fields, and shows a thank you message upon confirmation.
The form includes input fields for the user's name and email, and a text area for providing feedback.