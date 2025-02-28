import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box className='contact-links'>
            <Button 
              variant="contained" 
              startIcon={<LinkedInIcon />} 
              onClick={() => window.open('https://www.linkedin.com/in/mickael-sitompul-4239a4290/', '_blank')}
              className="contact-button"
              style={{ backgroundColor: '#0077b5' }} // LinkedIn color
            >
              <span>LinkedIn</span>
            </Button>
            <Button 
              variant="contained" 
              startIcon={<GitHubIcon />} 
              onClick={() => window.open('https://github.com/herisitompul', '_blank')}
              className="contact-button"
              style={{ backgroundColor: '#333' }} // GitHub color
            >
              <span>GitHub</span>
            </Button>
            <Button 
              variant="contained" 
              startIcon={<WhatsAppIcon />} 
              onClick={() => window.open('https://wa.me/+6285162779416', '_blank')}
              className="contact-button"
              style={{ backgroundColor: '#25D366' }} // WhatsApp color
            >
              <span>WhatsApp</span>
            </Button>
            <Button 
              variant="contained" 
              startIcon={<InstagramIcon />} 
              onClick={() => window.open('https://www.instagram.com/mickaelsitompul/', '_blank')}
              className="contact-button"
              style={{ backgroundColor: '#C13584' }} // Instagram color
            >
              <span>Instagram</span>
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;