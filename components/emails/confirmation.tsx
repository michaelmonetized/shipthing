import * as React from "react";

interface ConfirmationEmailProps {
  name: string;
}

export const ConfirmationEmail: React.FC<Readonly<ConfirmationEmailProps>> = ({
  name,
}) => (
  <div>
    <h1>Hey {name},</h1>
    <p>
      We received your message and will get back to you as soon as possible.
    </p>
  </div>
);
