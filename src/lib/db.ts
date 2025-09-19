import sqlite3 from 'sqlite3';
import { promisify } from 'util';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'tinker_foss.db');

// Ensure data directory exists
import fs from 'fs';
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

export async function getConnection() {
  return new Promise<sqlite3.Database>((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(db);
      }
    });
  });
}

export async function initDatabase() {
  const db = await getConnection();
  
  const run = promisify(db.run.bind(db));
  
  try {
    // Enable foreign keys
    await run('PRAGMA foreign_keys = ON');
    
    // Create users table (updated for Clerk)
    await run(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        clerk_id TEXT UNIQUE NOT NULL,
        username TEXT NOT NULL,
        email TEXT,
        avatar_url TEXT,
        total_points INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create lesson_progress table
    await run(`
      CREATE TABLE IF NOT EXISTS lesson_progress (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id TEXT NOT NULL,
        lesson_id INTEGER NOT NULL,
        completed BOOLEAN DEFAULT FALSE,
        points_earned INTEGER DEFAULT 0,
        completed_at DATETIME NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        UNIQUE(user_id, lesson_id)
      )
    `);

    console.log('Database tables created successfully');
  } catch (error) {
    console.error('Error creating database tables:', error);
    throw error;
  } finally {
    db.close();
  }
}

export async function runQuery(query: string, params: any[] = []): Promise<any[]> {
  const db = await getConnection();
  const all = promisify(db.all.bind(db));
  
  try {
    const result = await all(query, params);
    return result;
  } finally {
    db.close();
  }
}

export async function runStatement(query: string, params: any[] = []): Promise<any> {
  const db = await getConnection();
  const run = promisify(db.run.bind(db));
  
  try {
    const result = await run(query, params);
    return result;
  } finally {
    db.close();
  }
}
