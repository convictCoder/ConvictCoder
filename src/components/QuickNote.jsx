import { useState } from "react";

export default function QuickNote() {
  const [open, setOpen] = useState(false);

  return (
    <section className="quick-note" aria-live="polite">
      <button
        type="button"
        className="quick-note__button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
      >
        {open ? "Hide note" : "Show note"}
      </button>
      {open && (
        <p className="quick-note__text">
          Open to freelance roles, product builds, and mission-focused teams.
        </p>
      )}
    </section>
  );
}
