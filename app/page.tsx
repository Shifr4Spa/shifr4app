"use client";

import "./../app/app.css";

import "@aws-amplify/ui-react/styles.css";

export default function App() {
  const stage = process.env.NEXT_PUBLIC_STAGE || "Dev";

  return (
    <main>
      <h1>SHIFRA-SPA AMPLIFY ENVIRONMENT</h1>
      <center>
        <h2>🚀 App successfully hosted 🚀.</h2>
        <h2>Current Environment: {stage}</h2>
      </center>
    </main>
  );
}
