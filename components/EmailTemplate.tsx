import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({ name, email, subject, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px' }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #4CAF50', paddingBottom: '10px' }}>
        New Email From Daniel Fonseca Portfolio
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
      <div style={{ marginTop: '30px' }}>
        <h2 style={{ color: '#333', marginBottom: '10px', fontSize: '18px' }}>
          Message:
        </h2>
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#f9f9f9', 
          borderRadius: '5px',
          borderLeft: '4px solid #4CAF50',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word'
        }}>
          <p style={{ margin: '0', color: '#333', lineHeight: '1.6' }}>
            {message}
          </p>
        </div>
      </div>
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
          This message was sent through the contact form on your portfolio.
        </p>
      </div>
    </div>
  );
}
