<template>
    <div class="contact-form">
      <f7-block class="f7-title">Contact Us</f7-block>
      <f7-card class="contact-form-card">
        <f7-list form>
          <f7-list-input label="Name" type="text" placeholder="Your Name" @input="updateField('name', $event.target.value)" :value="store.formData.name" clear-input required>
          </f7-list-input>
  
          <f7-list-input label="Email" type="email" placeholder="Your Email" @input="updateField('email', $event.target.value)" :value="store.formData.email" clear-input required>
          </f7-list-input>
          
          <f7-list-input label="Phone" type="number" placeholder="Your Phone Number" @input="updateField('phone', $event.target.value)" :value="store.formData.phone" clear-input>
          </f7-list-input>
  
          <f7-list-input label="Message" type="textarea" placeholder="Your Message" @input="updateField('message', $event.target.value)" :value="store.formData.message" resizable required>
          </f7-list-input>
        </f7-list>
        
        <f7-block strong class="submit-button-block">
          <f7-button @click="submitForm" large fill class="submit-button">Submit</f7-button>
        </f7-block>
      </f7-card>
  
      <f7-block class="f7-title">Submissions</f7-block>
      <f7-list media-list class="submission-list">
        <f7-list-item v-for="(submission, index) in store.submissions" :key="index">
          <div>
                <div>{{ submission.name }} </div>
                <div>{{ submission.email }} </div>
                <div>{{ submission.message }} </div>
                <div>{{ new Date(submission.timestamp).toLocaleString() }} </div>
            </div>
        </f7-list-item>
      </f7-list>
    </div>
  </template>
  
  <script>
  import { useMainStore } from '@/stores/store';
  import { f7Page,f7ListItem,f7Button,f7ListInput,f7Block,f7BlockTitle,f7List,f7Card } from 'framework7-vue';
  

  export default {
    f7Page,f7ListItem,f7Button,f7ListInput,f7Block,f7BlockTitle,f7List,f7Card,
    setup() {
      const store = useMainStore();
  
      const updateField = (field, value) => {
        store.updateFormData(field, value);
      };
      
      const submitForm = () => {
        if (!store.formData.name || !store.formData.email || !store.formData.message) {
          alert('All required fields must be filled!');
          return;
        }
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(store.formData.email)) {
        alert('This field must be a valid email');
        return;
      }
      if(store.formData.phone.length !== 10){
        alert('Phone number must be 10 digits long');
        return;
      }
        store.addSubmission();
        alert('Form Submitted Successfully!');
      };
  
      return {
        store,
        updateField,
        submitForm
      };
    }
  };
  </script>
  
  <style scoped>
  .f7-title{
    font-size: 2.5rem;
  }
  .contact-form{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .contact-form-card {
    width: 30vw;
    margin: 20px auto;
    padding: 15px;
    border-radius: 10px;
    /* background: #f5f5f5; */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .submit-button-block{
    display: flex;
    justify-content: center;
  }
  .submit-button {
    width: 10vw;
    /* background-color: #007aff;
    color: white; */
    border-radius: 25px;
    font-weight: bold;
  }
  
  .submission-list {
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    .contact-form-card {
    width: 60vw;
  }
  
  .submit-button {
    width: 30vw;
  }
}
@media (max-width: 768px) {
    .contact-form-card {
    width: 60vw;
  }
  
  .submit-button {
    width: 30vw;
  }
}
  
  .f7-list-input span[slot="info"] {
    font-size: 12px;
    /* color: #6c757d; */
  }
  
  .f7-list-input input,
  .f7-list-input textarea {
    border-radius: 5px;
    padding: 8px;
  }
  </style>