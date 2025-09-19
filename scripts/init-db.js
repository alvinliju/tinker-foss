const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const dbPath = path.join(__dirname, '..', 'data', 'tinker_foss.db');

// Ensure data directory exists
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

function getConnection() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(db);
      }
    });
  });
}

async function initDatabase() {
  const db = await getConnection();
  
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Enable foreign keys
      db.run('PRAGMA foreign_keys = ON');
      
      // Create users table (updated for Clerk)
      db.run(`
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
      db.run(`
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
      `, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log('Database tables created successfully');
          resolve();
        }
      });
    });
    
    db.close();
  });
}

async function main() {
  try {
    console.log('🚀 Initializing TinkerHub SQLite database...');
    console.log('📊 Creating tables for Clerk authentication and course progress...');
    console.log(`📁 Database location: ${dbPath}`);
    
    await initDatabase();
    
    console.log('✅ Database initialized successfully!');
    console.log('📋 Created tables:');
    console.log('   - users (with Clerk integration)');
    console.log('   - lesson_progress');
    console.log('');
    console.log('🎯 Your SQLite database is ready for the course player!');
    console.log('💡 Next steps:');
    console.log('   1. Set up your Clerk account at https://clerk.com');
    console.log('   2. Add your Clerk keys to .env.local');
    console.log('   3. Run: npm run dev');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Failed to initialize database:', error.message);
    console.log('');
    console.log('🔧 Troubleshooting:');
    console.log('   - Make sure you have write permissions in the project directory');
    console.log('   - Check if the data directory can be created');
    console.log('');
    console.log('📝 Database file location:');
    console.log(`   ${dbPath}`);
    
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Database initialization cancelled');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n👋 Database initialization terminated');
  process.exit(0);
});

main();
