import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', licenseType: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.company) newErrors.company = 'Company is required';
    if (!form.licenseType) newErrors.licenseType = 'License type is required';
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Form submitted!');
      setForm({ name: '', email: '', company: '', licenseType: '', message: '' });
      setErrors({});
    }
  };

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-4">
        <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="p-3 rounded border" />
        {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}

        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="p-3 rounded border" />
        {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}

        <input type="text" placeholder="Company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="p-3 rounded border" />
        {errors.company && <div className="text-red-500 text-sm">{errors.company}</div>}

        <select value={form.licenseType} onChange={e => setForm({ ...form, licenseType: e.target.value })} className="p-3 rounded border">
          <option value="">Select License Type</option>
          <option value="Software A">Software A</option>
          <option value="Software B">Software B</option>
          <option value="Software C">Software C</option>
        </select>
        {errors.licenseType && <div className="text-red-500 text-sm">{errors.licenseType}</div>}

        <textarea placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="p-3 rounded border" rows="5"></textarea>
        {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}

        <button type="submit" className="bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700">Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;
