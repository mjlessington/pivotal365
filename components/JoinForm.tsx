"use client";

import { useState, type FormEvent } from "react";

type State = { kind: "idle" | "sending" | "ok" | "error"; message: string };

export default function JoinForm() {
  const [state, setState] = useState<State>({ kind: "idle", message: "" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    if (!email.value || !email.checkValidity()) {
      setState({ kind: "error", message: "Please enter a valid email address." });
      email.focus();
      return;
    }
    setState({ kind: "sending", message: "Sending..." });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      if (res.ok) {
        setState({ kind: "ok", message: "You're on the list. Welcome to your pivot year." });
        form.reset();
      } else {
        setState({ kind: "error", message: data.message ?? "Something went wrong. Please try again." });
      }
    } catch {
      setState({ kind: "error", message: "Something went wrong. Please try again." });
    }
  }

  return (
    <form className="join-form" onSubmit={onSubmit} noValidate>
      <label htmlFor="join-name">First name</label>
      <input id="join-name" name="firstName" type="text" autoComplete="given-name" placeholder="Your first name" />
      <label htmlFor="join-email">Email address</label>
      <input id="join-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      {/* Honeypot: real people never see or fill this. */}
      <input className="hp" name="company" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit" className="btn btn-gold btn-lg" disabled={state.kind === "sending"}>
        Join the Movement <span className="arrow" aria-hidden="true">→</span>
      </button>
      <p className={`join-note${state.kind === "ok" ? " ok" : ""}`} role="status" aria-live="polite">{state.message}</p>
    </form>
  );
}
