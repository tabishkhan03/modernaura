// lib/emailTemplate.js
export function generateEmailContent({ firstName, lastName, email, phone, message }) {
    return `
      <div>
        <h1>Client Details</h1>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      </div>
    `;
  }
  