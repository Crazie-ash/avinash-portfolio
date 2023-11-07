import React, { useState, useRef,useEffect } from 'react';
import styled from 'styled-components';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { iconListData } from '../../data/constants';
import CheckIcon from '@mui/icons-material/Check';


// import dotenv from 'dotenv';
// dotenv.config();

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;
const errorStyle = {
  color: 'red',
};
const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  margin-left: 10px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`

const IconListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  margin-left: 380px;
  column-gap: 0px;
  
  @media (max-width: 1263px) { /* Adjust the breakpoint to your desired screen size */
    flex-direction: column;
    margin-left: 27px;
  }
`;

const IconListItem = styled.div`
  flex: 0 0 calc(50% - 140px); /* Each item takes 50% of the container width with a little spacing */
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: rgb(228 176 255 / 71%);
  .icon {
    margin-right: 10px;
  }
  .text {
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: 550;
  }
`;  

const ContactWebinar = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phonenumber: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.Name) {
      newErrors.Name = 'Please enter your name';
    } else if (formData.Name.length < 3) {
      newErrors.Name = 'Name should be at least 3 characters long';
    } else if (formData.Name.length > 15) {
      newErrors.Name = 'Name should be less than 15 characters long';
    }

    if (!formData.Email || !formData.Email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.Email = 'Please enter a valid email address';
    }

    if (!formData.Phonenumber) {
      newErrors.Phonenumber = 'Please enter your phone number';
    } else if (!formData.Phonenumber.match(/^\d+$/)) {
      newErrors.Phonenumber = 'Phone number should contain only numbers';
    } else if (formData.Phonenumber.length !== 10) {
      newErrors.Phonenumber = 'Phone number should be exactly 10 digits long';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return; // Prevent multiple submissions
    }

    const isFormValid = validateForm();

    if (isFormValid) {
      const formDataToSend = new FormData(formRef.current);

      const spreadsheetId = process.env.REACT_APP_SPREADSHEET_ID;
      const url = spreadsheetId;

      try {
        const response = await axios.post(url, formDataToSend);

        // Handle the response as needed

        const data = response.data;
        console.log(data);
        setOpen(true);
        setShowSuccessMessage(true);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  useEffect(() => {
    if (showSuccessMessage) {
      const timeoutId = setTimeout(() => {
        setOpen(false);
        setShowSuccessMessage(false);
        window.location.reload();
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [showSuccessMessage]);

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Fill out the form below.</Title>
        {/* <Desc>Feel free to reach out to me for any questions or opportunities!</Desc> */}
        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          {/* <ContactTitle>Email Me 🚀</ContactTitle> */}
          <ContactInput
            type="text"
            name="Name"
            placeholder="Your Name"
            value={formData.Name}
            onChange={handleChange}
          />
          <div style={errorStyle}>{errors.Name}</div>
          <ContactInput
            type="text"
            name="Email"
            placeholder="Your Email"
            value={formData.Email}
            onChange={handleChange}
          />
          <div style={errorStyle}>{errors.Email}</div>
          <ContactInput
            type="text"
            name="Phonenumber"
            placeholder="Phone No"
            value={formData.Phonenumber}
            onChange={handleChange}
          />
          <div style={errorStyle}>{errors.Phonenumber}</div>
          <ContactButton
            disabled={isLoading}
            type="submit"
            value={isLoading ? 'Sending...' : 'Register for Webinar'}
          />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={() => {
            setOpen(false);
            window.location.reload();
          }}
        >
          <Alert severity="success">Enquiry added successfully!</Alert>
        </Snackbar>
        <IconListContainer>
          {iconListData.map((text, index) => (
            <IconListItem key={index}>
              <div className="icon">
                <CheckIcon />
              </div>
              <div className="text">{text}</div>
            </IconListItem>
          ))}
        </IconListContainer>
      </Wrapper>
    </Container>
  );
};

export default ContactWebinar;