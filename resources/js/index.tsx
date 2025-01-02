import React from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';


const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
    <GoogleOAuthProvider clientId="470037599557-5369e29mttotncgto05fdnh16ebhoe7j.apps.googleusercontent.com">
        <React.StrictMode>
          
        </React.StrictMode>
    </GoogleOAuthProvider>
);