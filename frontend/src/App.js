import React from 'react';
import { useReducer, useState } from 'react';
import APIService from './Components/APIService';
import './App.css';
import './Form.css';

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      'domain': '',
      'email': '',
      'password': '',
      'subject': '',
      'content': ''
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}

function App() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    APIService.SendDetails(formData);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      });
      alert('You have submitted the form.');
    }, 3000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value
    })
  }

  return (
    <div className="wrapper">
      {/* {
        submitting ? 
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div> 
        : null
      } */}
      <form className="form-box" onSubmit={handleSubmit}>
        <h5>Automatic Email Sender</h5>
        <fieldset disabled={submitting}>
          <label>
            <p>Domains</p>
            <select name="domain" onChange={handleChange} value={formData.domain || ''}>
              <option value="">--Please choose an option--</option>
              <option value="hotmail">Hotmail</option>
              <option value="gmail">Gmail</option>
              <option value="outlook">Outlook</option>
            </select>
          </label>
          <label>
            <p>Email</p>
            <input name="email" onChange={handleChange} value={formData.email || ''}></input>
          </label>
          <label>
            <p>Password</p>
            <input name="password" type="password" onChange={handleChange} value={formData.password || ''}></input>
          </label>
          <label>
            <p>Email Subject</p>
            <input name="subject" onChange={handleChange} value={formData.subject || ''}></input>
          </label>
          <label>
            <p>Email Content</p>
            <textarea placeholder="Please write email here, with variables in curly braces like this - {data}" name="content" onChange={handleChange} value={formData.content || ''}/>
          </label>
        </fieldset>
        <button className="submitBtn" type="submit" disabled={submitting}>Submit</button>
      </form>
    </div>
  );
}

export default App;
