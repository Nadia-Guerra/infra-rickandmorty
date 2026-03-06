import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import RickAndMortyRoutes from './routes/rickandmorty.routes';


const app = express();
const PORT = process.env.PORT || 3000;

const RICK_AND_MORTY_API_URL = process.env.RICK_AND_MORTY_API_URL;


app.use(express.json());
app.use(cors({ origin: '*' }));
app.use('/api', RickAndMortyRoutes);
app.get('/', (req, res) => {
    res.json({ message: 'Backend corriendo', status: 'ok' });
});

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


