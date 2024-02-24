import  { useState } from 'react';
import '../pages/css/LoanForm.css'
function LoanForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    landSize: '',
    cropType: '',
    loanAmount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend for processing
    console.log(formData);
    // Optionally, you can add form validation logic here before submitting
  };

  return (
    <div className="agriculture-loan-form">
      <h2>Apply for Agriculture Loan</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <label>
          State:
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </label>
        <label>
          Pincode:
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
        </label>
        <label>
          Land Size (in acres):
          <input type="text" name="landSize" value={formData.landSize} onChange={handleChange} required />
        </label>
        <label>
          Crop Type:
          <input type="text" name="cropType" value={formData.cropType} onChange={handleChange} required />
        </label>
        <label>
          Loan Amount (in INR):
          <input type="text" name="loanAmount" value={formData.loanAmount} onChange={handleChange} required />
        </label>
        <button type="submit">Apply Now</button>
      </form>
    </div>
  );
}

export default LoanForm;
