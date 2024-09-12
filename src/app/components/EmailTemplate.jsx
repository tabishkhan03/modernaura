import React from 'react';

const EmailTemplate = ({ name, phonenumber, email, emailsub, message }) => {
  return (
    <div>
      <p>You got a message from {name},</p>
      <p>Number: {phonenumber}</p>
      <p>Email: {email}</p>
      <p>Subject: {emailsub}</p>
      <p>Message: {message}</p>
    </div>
  );
}

export default EmailTemplate;
