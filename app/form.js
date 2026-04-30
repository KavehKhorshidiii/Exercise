// components/LoginForm.js
'use client';

import { useState } from 'react';

export default function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError('');
    setLoading(true);

    if (!username.trim() || !password.trim()) {
      setError('لطفاً تمام فیلدها را پر کنید');
      setLoading(false);
      return;
    }



    try {

      const res = await fetch('http://localhost:3000/api/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if(res.status === 200){
        setUsername('')
        setPassword('')
      }

    } catch (err) {

      setError('خطا در ارتباط با سرور');

    } finally {

      setLoading(false);

    }


  };



  return (

    // FORM
    <form onSubmit={handleSubmit} className="space-y-6">


      {/* Name input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 text-right">نام کاربری یا ایمیل</label>
        <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-right" type="text" value={username} onChange={(e) => setUsername(e.target.value)} dir="rtl" required />
      </div>


      {/* Password input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 text-right">رمز عبور</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-right" dir="rtl" required />
      </div>


      {/* Error */}
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-right">
          {error}
        </div>
      )}


      {/* Button */}
      <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 font-medium">
        {loading ? 'در حال ورود...' : 'ورود'}
      </button>


    </form>
  );

}