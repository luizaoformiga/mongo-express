import app from './app';
import 'dotenv/config';

const port = process.env.PORT || 7560;
// http://localhost:7659
app.listen(port, () => console.log(`Server running`));