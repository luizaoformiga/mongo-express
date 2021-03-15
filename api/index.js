import app from './app';
import 'dotenv/config';

const port = process.env.PORT;
// http://localhost:7758
app.listen(port || 7758, () => console.log(`Server running`));