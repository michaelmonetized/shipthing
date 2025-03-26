import * as React from "react";

interface NotificationEmailProps {
  contact: {
    name: string;
    phone: string;
    email: string;
    message: string;
    page: string;
    created: string;
  };
}

export const NotificationEmail: React.FC<Readonly<NotificationEmailProps>> = ({
  contact,
}) => (
  <div>
    <h1>
      New lead from {contact.name} on page {contact.page},
    </h1>
    <table>
      <tbody>
        <tr>
          <td>
            <strong>Name</strong>
          </td>
          <td>{contact.name}</td>
        </tr>
        <tr>
          <td>
            <strong>Phone</strong>
          </td>
          <td>{contact.phone}</td>
        </tr>
        <tr>
          <td>
            <strong>Email</strong>
          </td>
          <td>{contact.email}</td>
        </tr>
        <tr>
          <td>
            <strong>Message</strong>
          </td>
          <td>{contact.message}</td>
        </tr>
        <tr>
          <td>
            <strong>Page</strong>
          </td>
          <td>{contact.page}</td>
        </tr>
        <tr>
          <td>
            <strong>Created</strong>
          </td>
          <td>{contact.created}</td>
        </tr>
      </tbody>
    </table>
  </div>
);
