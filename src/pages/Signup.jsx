import { useState } from 'react';
import { supabase } from '../supabase/init';
import { useAuthStore } from '../stores/authStore';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error(error);
    } else {
      setUser(user);
      // Redirect to login page

    }
  };

  // ... form JSX
  <main>

  </main>
};

export default Signup;
