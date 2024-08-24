import supabase from "./supabase";

export async function login({email, password}) {
  const {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return {data, error};
}

export async function getCurrentUser() {
  const {data: session} = await supabase.auth.getSession();

  if (!session.session) return null;

  // if session is available, get the user
  const {data, error} = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}
