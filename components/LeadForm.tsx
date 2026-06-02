import { Send } from "lucide-react";

export function LeadForm({ type = "contact" }: { type?: "contact" | "quote" | "product" }) {
  return (
    <form className="form" action={`mailto:vidyute@yahoo.com?subject=${encodeURIComponent(type)} enquiry`} method="post">
      <div className="form-grid">
        <input name="name" placeholder="Your name" required />
        <input name="company" placeholder="Company name" />
      </div>
      <div className="form-grid">
        <input name="phone" placeholder="Phone number" required />
        <input name="email" placeholder="Email address" type="email" />
      </div>
      <div className="form-grid">
        <select name="interest" defaultValue="">
          <option value="" disabled>
            Product requirement
          </option>
          <option>Earthing Products</option>
          <option>Lightning Protection</option>
          <option>Copper Products</option>
          <option>GI Products</option>
          <option>Cable Management</option>
          <option>Project Supply / Contractor Work</option>
        </select>
        <input name="location" placeholder="Project location" />
      </div>
      <textarea name="message" placeholder="Tell us product, quantity, site requirement or drawing reference" required />
      <button className="button" type="submit">
        <Send size={18} /> Submit Enquiry
      </button>
    </form>
  );
}
