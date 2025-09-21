import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Initialize database schema
export async function initDatabase() {
  try {
    // Create users table
    const { error: usersError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS users (
          id TEXT PRIMARY KEY,
          clerk_id TEXT UNIQUE NOT NULL,
          username TEXT NOT NULL,
          email TEXT,
          avatar_url TEXT,
          total_points INTEGER DEFAULT 0,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `
    })

    if (usersError) {
      console.error('Error creating users table:', usersError)
      throw usersError
    }

    // Create lesson_progress table
    const { error: progressError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS lesson_progress (
          id SERIAL PRIMARY KEY,
          user_id TEXT NOT NULL,
          lesson_id INTEGER NOT NULL,
          completed BOOLEAN DEFAULT FALSE,
          points_earned INTEGER DEFAULT 0,
          completed_at TIMESTAMP,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(clerk_id) ON DELETE CASCADE,
          UNIQUE(user_id, lesson_id)
        )
      `
    })

    if (progressError) {
      console.error('Error creating lesson_progress table:', progressError)
      throw progressError
    }

    console.log('Database initialized successfully')
  } catch (error) {
    console.error('Database initialization error:', error)
    throw error
  }
}

// Run a raw SQL query
export async function runQuery(sql: string, params: any[] = []) {
  try {
    // Format the query with parameters
    let formattedSql = sql;
    params.forEach(param => {
      formattedSql = formattedSql.replace('?', typeof param === 'string' ? `'${param}'` : param.toString());
    });

    const { data, error } = await supabase.rpc('exec_sql', { sql: formattedSql });
    
    if (error) {
      console.error('Query error:', error);
      throw error;
    }
    
    return data || [];
  } catch (error) {
    console.error('Error running query:', error);
    throw error;
  }
}

// Ensure user exists in database
export async function ensureUserExists(userId: string, userData: any) {
  try {
    // Check if user exists
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('clerk_id', userId)
      .single()

    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error('Error fetching user:', fetchError)
      throw fetchError
    }

    if (!existingUser) {
      // Create new user
      const { error: insertError } = await supabase
        .from('users')
        .insert({
          id: userId,
          clerk_id: userId,
          username: userData.username || userData.firstName || 'User',
          email: userData.email || '',
          avatar_url: userData.imageUrl || '',
          total_points: 0
        })

      if (insertError) {
        console.error('Error creating user:', insertError)
        throw insertError
      }
      console.log('Created new user in database:', userId)
    } else {
      // Update existing user info
      const { error: updateError } = await supabase
        .from('users')
        .update({
          username: userData.username || userData.firstName || 'User',
          email: userData.email || '',
          avatar_url: userData.imageUrl || '',
          updated_at: new Date().toISOString()
        })
        .eq('clerk_id', userId)

      if (updateError) {
        console.error('Error updating user:', updateError)
        throw updateError
      }
    }
  } catch (error) {
    console.error('Error ensuring user exists:', error)
    throw error
  }
}
