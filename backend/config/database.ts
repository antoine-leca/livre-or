import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Configuration de la base de données
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'livreor',
    port: Number(process.env.DB_PORT) || 3306,
};

// Création du pool de connexions
export const pool = mysql.createPool(dbConfig);

// Fonction pour tester la connexion
export const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Connexion à la base de données réussie');
        connection.release();
        return true;
    } catch (error) {
        console.error('❌ Erreur de connexion à la base de données:', error);
        return false;
    }
};