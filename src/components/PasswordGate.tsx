import { useState } from "react";
import logo from "@/assets/sna-logo.png";

const PASSWORD = "Review@2026";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [allowed, setAllowed] = useState(
    sessionStorage.getItem("sna_review_access") === "true"
  );
  const [input, setInput] = useState("");

  const submit = () => {
    if (input === PASSWORD) {
      sessionStorage.setItem("sna_review_access", "true");
      setAllowed(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!allowed) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <img src={logo} alt="Singapore Neuroscience Association" style={styles.logo} />

          <h2 style={styles.title}>Review Access</h2>
          <p style={styles.subtitle}>
            This site is currently under internal review.<br />
            Please enter the access password to continue.
          </p>

          <input
            type="password"
            placeholder="Enter password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
          />

          <button onClick={submit} style={styles.button}>
            Enter Site
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    height: "100vh",
    background: "#f8fafc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "420px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  },
  logo: {
    width: "140px",
    marginBottom: "24px",
  },
  title: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#475569",
    marginBottom: "24px",
    lineHeight: 1.5,
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    marginBottom: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#9b1c1c", // SNA red
    color: "#ffffff",
    fontWeight: 600,
    cursor: "pointer",
  },
};
