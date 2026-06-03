import { Send } from "lucide-react";

export function LeadForm({ type = "contact" }: { type?: "contact" | "quote" | "product" | "service" }) {
  return (
    <form
  className="form"
  action="https://api.web3forms.com/submit"
  method="POST"
>
  <input
  type="hidden"
  name="access_key"
  value="3a720a32-fadb-41b5-a960-e832cfb0d91e"
/>

<input
  type="hidden"
  name="subject"
  value={`New ${type} enquiry from Vidyut Enterprise Website`}
/>

<input
  type="hidden"
  name="from_name"
  value="Vidyut Enterprise Website"
/>
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
