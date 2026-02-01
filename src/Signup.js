import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const navigate = useNavigate();
 const handleSignup = async (e) => {
   e.preventDefault();
   await createUserWithEmailAndPassword(auth, email, password);
   navigate('/login');
 };
 return (
   <form onSubmit={handleSignup}>
     <input type="email" onChange={(e) => setEmail(e.target.value)} required />
     <input type="password" onChange={(e) => setPassword(e.target.value)} required />
     <button type="submit">Sign Up</button>
   </form>
 );
}