import mysql from 'mysql2'
import { config } from './mysql.config.js';

export const connection = mysql.createPool(config);