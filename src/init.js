import dotenv from 'dotenv';
import app from './app';
import './models/Video';
import './models/User';
import './models/Comment';

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log('Listening!');

app.listen(PORT, handleListening);
