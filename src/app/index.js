import express from 'express';
import 'dotenv/config';
import app from './app';

const port = process.env.PORT || 3795;

app.listen(port, () => console.log(`Server running ${port}`));