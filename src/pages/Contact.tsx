import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Send, Mail, Phone, MapPin } from 'lucide-react';


const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: ${props => props.theme.space.md};
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PageTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 800;
  margin-bottom: ${(props) => props.theme.space.lg};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

const PageDescription = styled.p`
  text-align: center;
  margin-bottom: ${props => props.theme.space.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.colors.gray};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.space.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.space.lg};
`;

const ContactInfoTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 600;
  margin-bottom: ${props => props.theme.space.md};
  color: ${props => props.theme.colors.primaryDark};
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space.md};
  margin-bottom: ${props => props.theme.space.md};
`;

const ContactDetailIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.primary}20;
  color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactDetailText = styled.div`
  flex: 1;
`;

const ContactDetailTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 4px;
  font-size: ${props => props.theme.fontSizes.small};
`;

const ContactDetailValue = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.small};
`;

const ContactForm = styled.form`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.large};
  padding: ${props => props.theme.space.lg};
  box-shadow: ${props => props.theme.shadows.small};
`;

const FormTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 600;
  margin-bottom: ${props => props.theme.space.md};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.space.md};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.space.md};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.space.xs};
  font-weight: 600;
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${props => props.theme.space.sm};
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.small};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${props => props.theme.space.sm};
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.small};
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const FormButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.space.sm};
  padding: ${props => props.theme.space.sm} ${props => props.theme.space.xl};
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  margin-top: ${props => props.theme.space.sm};
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`;

const NewsletterSection = styled.div`
  margin-top: ${props => props.theme.space.xl};
  background-color: ${props => props.theme.colors.primary}10;
  padding: ${props => props.theme.space.lg};
  border-radius: ${props => props.theme.borderRadius.medium};
  text-align: center;
`;

const NewsletterTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 600;
  margin-bottom: ${props => props.theme.space.md};
`;

const NewsletterText = styled.p`
  margin-bottom: ${props => props.theme.space.md};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const NewsletterForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${props => props.theme.space.sm};
  }
`;

const NewsletterInput = styled(FormInput)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-radius: ${props => props.theme.borderRadius.small};
  }
`;

const NewsletterButton = styled(FormButton)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-top: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-radius: ${props => props.theme.borderRadius.medium};
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [newsletterEmail, setNewsletterEmail] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', newsletterEmail);
    alert('Thank you for subscribing to our newsletter!');
    setNewsletterEmail('');
  };
  
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyles /> */}
      <AppContainer>
        
        <MainContent>
          <PageTitle>Contact Us</PageTitle>
          <PageDescription>
            Have questions about our products, recommendations, or services?
            Reach out to our team and we'll get back to you as soon as possible.
          </PageDescription>
          
          <ContactGrid>
            <ContactInfo>
              <ContactInfoTitle>Get in Touch</ContactInfoTitle>
              
              <ContactDetail>
                <ContactDetailIcon>
                  <Mail size={20} />
                </ContactDetailIcon>
                <ContactDetailText>
                  <ContactDetailTitle>Email</ContactDetailTitle>
                  <ContactDetailValue>support@freshpick.com</ContactDetailValue>
                </ContactDetailText>
              </ContactDetail>
              
              <ContactDetail>
                <ContactDetailIcon>
                  <Phone size={20} />
                </ContactDetailIcon>
                <ContactDetailText>
                  <ContactDetailTitle>Phone</ContactDetailTitle>
                  <ContactDetailValue>+1 (555) 123-4567</ContactDetailValue>
                </ContactDetailText>
              </ContactDetail>
              
              <ContactDetail>
                <ContactDetailIcon>
                  <MapPin size={20} />
                </ContactDetailIcon>
                <ContactDetailText>
                  <ContactDetailTitle>Address</ContactDetailTitle>
                  <ContactDetailValue>
                    123 Fresh Street<br />
                    Grocery Town, GT 12345
                  </ContactDetailValue>
                </ContactDetailText>
              </ContactDetail>
            </ContactInfo>
            
            <ContactForm onSubmit={handleFormSubmit}>
              <FormTitle>Send us a Message</FormTitle>
              
              <FormGrid>
                <FormGroup>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormGrid>
              
              <FormGrid>
                <FormGroup>
                  <FormLabel htmlFor="phone">Phone (optional)</FormLabel>
                  <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <FormInput
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormGrid>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormButton type="submit">
                <Send size={18} />
                Send Message
              </FormButton>
            </ContactForm>
          </ContactGrid>
          
          <NewsletterSection>
            <NewsletterTitle>Subscribe to Our Newsletter</NewsletterTitle>
            <NewsletterText>
              Sign up to receive weekly grocery tips, seasonal picks, and exclusive discounts 
              delivered straight to your inbox.
            </NewsletterText>
            
            <NewsletterForm onSubmit={handleNewsletterSubmit}>
              <NewsletterInput
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <NewsletterButton type="submit">Subscribe</NewsletterButton>
            </NewsletterForm>
          </NewsletterSection>
        </MainContent>
        
        {/* <Footer /> */}
      </AppContainer>
    </ThemeProvider>
  );
};

export default Contact;