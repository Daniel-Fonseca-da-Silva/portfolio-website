import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
}

export function EmailTemplate({ name, email, subject }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px' }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #4CAF50', paddingBottom: '10px' }}>
        New contact message
      </h1>
      <div style={{ marginTop: '20px' }}>
        <p style={{ margin: '10px 0' }}>
          <strong>Name:</strong> {name}
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong>Email:</strong> {email}
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong>Subject:</strong> {subject}
        </p>
      </div>
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
          This message was sent through the contact form on your portfolio.
        </p>
      </div>
    </div>
  );
}
