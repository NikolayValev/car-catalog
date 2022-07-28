import styles from '../styles/Contact.module.css'
import TextField from '@mui/material/TextField';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import phone from '../public/phone.jpg'

export default function Form() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your message: ${result.data}`)
  }
  return (
    <div className={styles.container}>
      <Paper className={styles.phoneImage} variant="outlined">
      </Paper>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.heading}>
        <Typography variant="h3" component="div" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Please fill this form in a respectful manner
        </Typography>
        </div>
        <Stack
          container
          direction="column"
          spacing={2}>
          <TextField
            required
            id="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
          />
          <TextField required id="subject" label="Subject" variant="standard" />
          <TextField
            required
            id="message"
            label="Your Message"
            placeholder="Placeholder"
            rows={4}
            multiline
          />
          <Button type="submit" variant="contained">Contained</Button>
        </Stack>
      </form>
    </div>
  )
}