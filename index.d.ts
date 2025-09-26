// TypeScript type definitions for Company Contact Information Aggregation Page

export interface ContactInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  whatsapp: string;
}

/**
 * Get company contact information
 * @returns Object containing company contact information
 */
export function getContactInfo(): ContactInfo;

/**
 * Initialize contact page
 */
export function initContactPage(): void;

export { getContactInfo as default };