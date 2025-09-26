// JavaScript entry file for Company Contact Information Aggregation Page
const contactData = require('./contact-data.js');

/**
 * Get company contact information
 * @returns {Object} Object containing company contact information
 */
function getContactInfo() {
  return contactData.company;
}

/**
 * Initialize contact page
 */
function initContactPage() {
  // Page initialization logic can be added here
  console.log("Contact page initialized");
}

// Export functions
module.exports = {
  getContactInfo,
  initContactPage
};

// If running in browser environment, automatically initialize
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initContactPage);
}