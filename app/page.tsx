"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-sidebar-background py-4">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-sidebar-primary-foreground">
            Infinex
          </Link>
        </nav>
      </header>
      <main>
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Infinex</h1>
            <p className="text-xl mb-8">
              Infinex.org is an AI data creation platform, transforming how
              intelligent systems are trained by individual contributors
              worldwide.
            </p>

            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center">Sign Up</h2>
              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto bg-card p-8 rounded-lg"
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-foreground text-left"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-input border border-border rounded text-foreground"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-foreground text-left"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-input border border-border rounded text-foreground"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium mb-2 text-foreground text-left"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-input border border-border rounded text-foreground"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium mb-2 text-foreground text-left"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-input border border-border rounded text-foreground"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-foreground px-4 py-2 rounded text-lg font-semibold text-primary-foreground"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-sidebar-background py-8">
        <div className="container mx-auto px-4 text-center text-sidebar-foreground">
          <p>
            &copy; {new Date().getFullYear()} General Agents. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
