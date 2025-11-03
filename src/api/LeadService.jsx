// src/services/LeadService.js
import axiosInstance from "./axiosInstances";

/**
 * Creates a lead entry for a specific site.
 * 
 * @param {string} site - Site name (e.g. "boulou_lpo")
 * @param {string} lead_source - Source of the lead (e.g. "application")
 * @param {object} data - Lead details (name, email, phone, etc.)
 * 
 * @returns {Promise<object>} API response
 */
export const createLead = async (site, lead_source, data) => {
  try {
    const response = await axiosInstance.post("/lead/sites", {
      site,
      lead_source,
      data,
    });
    return response;
  } catch (error) {
    console.error("Error creating lead:", error);
    throw error;
  }
};
