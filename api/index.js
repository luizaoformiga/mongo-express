import app from './app';
import 'dotenv/config';

const port = process.env.PORT || 7568;

app.listen(port, () => console.log(`Server running`));