import React, { useState } from 'react';

export function ContactForm(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="section" id="contact">
      <div className="container text-center">
        <p className="section-subtitle">How can you communicate?</p>
        <h6 className="section-title mb-5">Contact Me</h6>
        {/* Contact form */}
        <form onSubmit={handleSubmit} className="contact-form col-md-10 col-lg-8 m-auto">
          <div className="form-row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-sm-12">
              <textarea
                name="comment"
                id="comment"
                rows="6"
                className="form-control"
                placeholder="Write Something"
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group col-sm-12 mt-3">
              <input type="submit" value="Send Message" className="btn btn-outline-primary rounded" />
            </div>
          </div>
        </form>
        {/* End of contact form */}
      </div>
      {/* End of container */}
    </section>
  );
}

