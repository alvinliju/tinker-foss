import { auth } from "@clerk/nextjs/server";
import { getConnection, runQuery, runStatement } from "./db";
import { useUser } from "@clerk/nextjs";


export async function getCurrentUser() {
  const { userId } = await auth();
  const {user} = await useUser()
  if (!user) {
    return null;
  }
  if (!userId ) {
    return null;
  }

  try {
    const connection = await getConnection();

    
    // Check if user exists in our database
    const [existingUsers] = await runQuery(
      'SELECT * FROM users WHERE clerk_id = ?',
      [userId]
    );

    let dbUser;
    
    if (Array.isArray(existingUsers) && existingUsers.length === 0) {
      // Create new user in our database
      await runStatement(
        'INSERT INTO users (id, clerk_id, username, email, avatar_url) VALUES (?, ?, ?, ?, ?)',
        [
          userId,
          userId,
          user.username || user.firstName || 'User',
          user.emailAddresses[0]?.emailAddress || '',
          user.imageUrl || ''
        ]
      );
      
      dbUser = {
        id: userId,
        clerk_id: userId,
        username: user.username || user.firstName || 'User',
        email: user.emailAddresses[0]?.emailAddress || '',
        avatar_url: user.imageUrl || '',
        total_points: 0
      };
    } else {
      dbUser = existingUsers[0];
      
      // Update user info if needed
      await runStatement(
        'UPDATE users SET username = ?, email = ?, avatar_url = ? WHERE clerk_id = ?',
        [
          user.username || user.firstName || 'User',
          user.emailAddresses[0]?.emailAddress || '',
          user.imageUrl || '',
          userId
        ]
      );
    }

    //@ts-ignore
    await connection.end();
    
    return {
      id: userId,
      username: dbUser.username,
      email: dbUser.email,
      avatarUrl: dbUser.avatar_url,
      totalPoints: dbUser.total_points
    };
    
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}
