import { useState } from "react";

export default function ContactForm({ formRef }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!fullName.trim()) e.fullName = "Full name is required.";
    if (!email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = "Enter a valid email address.";
    }
    if (!phoneNumber.trim()) {
      e.phoneNumber = "Phone number is required.";
    } else if (!/^\+?[\d\s\-().]{7,15}$/.test(phoneNumber)) {
      e.phoneNumber = "Enter a valid phone number.";
    }
    if (!message.trim()) {
      e.message = "Message is required.";
    } else if (message.length > 100) {
      e.message = "Message must be 100 characters or less.";
    }
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }

    //console log the values //
    console.log("fullName:", fullName);
    console.log("email:", email);
    console.log("phoneNumber:", phoneNumber);
    console.log("message:", message);

    setSubmitting(true);

    //send as form-encoded data //
    const formData = new URLSearchParams();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("message", message);

    try {
      const response = await fetch("https://whitebricks.com/tsacademy.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      // check the response //
      console.log("status:", response.status);
      const text = await response.text();
      console.log("response text:", text);

      setSubmitted(true);
    } catch (error) {
      console.log("error:", error);
    }

    setSubmitting(false);
  };

  return (
    <section className="contact_section" ref={formRef}>
      <div className=" section_container contact_container">
        <h2 className="contact_title">
          Have Questions About Planetary Science?
        </h2>
        <p className="contact_description">
          Interested in learning more about space, astronomy, or how planetary
          data is collected and analyzed? Reach out and we'll get back to you.
        </p>

        {submitted ? (
          <div className="form_success">
            Thank you! Your message has been sent successfully ✅. We'll be in
            touch soon.
          </div>
        ) : (
          <form className="contact_form" onSubmit={handleSubmit} noValidate>
            <div className="form_grid">
              <div className="form_group">
                <label className="form_label">
                  Full Name <span>*</span>
                </label>
                <input
                  className={`form_input ${errors.fullName ? "form_input_error" : ""}`}
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && (
                  <span className="form_error">{errors.fullName}</span>
                )}
              </div>

              <div className="form_group">
                <label className="form_label">
                  Email <span>*</span>
                </label>
                <input
                  className={`form_input ${errors.email ? "form_input_error" : ""}`}
                  type="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span className="form_error">{errors.email}</span>
                )}
              </div>

              <div className="form_group">
                <label className="form_label">
                  Phone Number <span>*</span>
                </label>
                <input
                  className={`form_input ${errors.phoneNumber ? "form_input_error" : ""}`}
                  type="tel"
                  placeholder="Please enter a valid phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && (
                  <span className="form_error">{errors.phoneNumber}</span>
                )}
              </div>

              <div className="form_group">
                <label className="form_label">
                  Message <span>*</span>
                </label>
                <textarea
                  className={`form_textarea ${errors.message ? "form_input_error" : ""}`}
                  placeholder="Enter your message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="form_char_count">
                  {errors.message ? (
                    <span className="form_error">{errors.message}</span>
                  ) : (
                    <span />
                  )}
                  <span>{message.length}/100 characters</span>
                </div>
              </div>
            </div>

            <button
              className="submit_button"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Submitting…" : "Submit →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
