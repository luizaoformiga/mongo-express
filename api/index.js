import app from './app';
import 'dotenv/config';

const port = process.env.PORT || 7758;
// http://localhost:7758
app.listen(port, () => console.log(`Server running`));