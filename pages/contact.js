import styles from '../styles/Contact.module.css'
import Head from 'next/head'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
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
    <div className={styles.container}>.
      <form onSubmit={handleSubmit}>
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
            multiline
          />
          <Button type="submit" variant="contained">Contained</Button>
        </Stack>
      </form>
    </div>
  )
}