import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Toast from "./Toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '', visible: false });

  const showToast = (message, type) => {
    setToast({ message, type, visible: true });
  };

  const hideToast = () => {
    setToast({ ...toast, visible: false });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use Web3Forms to send the email without a backend
    // Get your access key from https://web3forms.com and set it as REACT_APP_WEB3FORMS_ACCESS_KEY
    const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

    const payload = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      from_name: formData.name
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        showToast('Message sent successfully!', 'success');
      } else {
        console.error('Web3Forms error:', data);
        showToast('Failed to send message. Please try again later.', 'error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      showToast('An unexpected error occurred. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+91-7993913174",
      href: "tel:+917993913174"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "karthikreddypeketi@gmail.com",
      href: "mailto:karthikreddypeketi@gmail.com"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Vijayawada, Andhra Pradesh, India",
      href: ""
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/karthikpeketi",
      color: "hover:text-[#ffffff]"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/karthik-peketi/",
      color: "hover:text-[#0073b0]"
    }
  ];

  return (
    <div className="my-16 md:my-20 lg:my-24" id="contact">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Touch</span>
        </h1>
        <p className="text-gray-400 text-xl max-md:text-lg">Let's discuss your next project</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full overflow-x-hidden"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-full">
            <h2 className="text-3xl font-bold mb-8 text-white">Let's Connect</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <info.icon className="text-white text-lg" />
                </div>
                  <div className="flex flex-col min-w-0 break-words">
                    <span className="text-gray-400 text-sm">{info.label}</span>
                    <span className="text-white font-medium">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-8 hidden md:block">
              <h3 className="text-xl font-semibold mb-4 text-white">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:scale-110`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-8 text-white">Send Message</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                placeholder="Project Discussion"
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
      {toast.visible && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </div>
  );
}

export default Contact;
