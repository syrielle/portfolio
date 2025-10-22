import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const EmailJSTest = () => {
  const [testResult, setTestResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const testEmailJS = async () => {
    setIsLoading(true);
    setTestResult(null);

    try {
      // Test simple avec des données minimales
      const templateParams = {
        from_name: 'Test User',
        from_email: 'test@example.com',
        subject: 'Test EmailJS',
        message: 'Ceci est un test de configuration EmailJS',
        to_email: 'maks0005@uqar.ca'
      };

      console.log('Test EmailJS avec configuration:', EMAILJS_CONFIG);
      console.log('Paramètres de test:', templateParams);

      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      console.log('Test réussi:', result);
      setTestResult({ success: true, message: 'Configuration EmailJS fonctionne !' });

    } catch (error) {
      console.error('Test échoué:', error);
      setTestResult({ 
        success: false, 
        message: `Erreur: ${error.status} - ${error.text}`,
        details: error
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h3>Test EmailJS</h3>
      <button onClick={testEmailJS} disabled={isLoading}>
        {isLoading ? 'Test en cours...' : 'Tester EmailJS'}
      </button>
      
      {testResult && (
        <div style={{ 
          marginTop: '10px', 
          padding: '10px', 
          backgroundColor: testResult.success ? '#d4edda' : '#f8d7da',
          color: testResult.success ? '#155724' : '#721c24',
          borderRadius: '5px'
        }}>
          <strong>{testResult.success ? '✅' : '❌'}</strong> {testResult.message}
          {!testResult.success && (
            <pre style={{ fontSize: '12px', marginTop: '10px' }}>
              {JSON.stringify(testResult.details, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  );
};

export default EmailJSTest;
