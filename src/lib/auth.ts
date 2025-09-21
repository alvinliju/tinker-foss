import { auth, currentUser } from "@clerk/nextjs/server";
import { supabase, ensureUserExists } from "./db";

export async function getCurrentUser() {
  const { userId } = await auth();
  
  if (!userId) {
    return null;
  }

  const user = await currentUser();
  
  if (!user) {
    return null;
  }

  try {
    // Ensure user exists in database
    await ensureUserExists(userId, {
      username: user.username,
      firstName: user.firstName,
      email: user.emailAddresses[0]?.emailAddress,
      imageUrl: user.imageUrl
    });

    // Get user from database
    const { data: dbUser, error } = await supabase
      .from('users')
      .select('*')
      .eq('clerk_id', userId)
      .single();

    if (error) {
      console.error('Error fetching user:', error);
      return null;
    }

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
