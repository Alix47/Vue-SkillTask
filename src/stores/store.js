import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    formData: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    submissions: []
  }),
  actions: {
    updateFormData(field, value) {
      this.formData[field] = value;
    },
    resetFormData() {
      this.formData = { name: '', email: '', phone: '', message: '' };
    },
    addSubmission() {
      this.submissions.push({ ...this.formData, timestamp: new Date().toISOString() });
      this.resetFormData();
    }
  }
});