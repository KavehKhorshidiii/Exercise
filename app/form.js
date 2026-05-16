// components/LoginForm.js
'use client';

import { useState } from 'react';



export default function LoginForm() {


  const [name, setUsername] = useState('');
  const [blog, setBlog] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const authorID = '6a07060d3ad7573838e923f4'



  const handleSubmit = async (e) => {

    e.preventDefault();
    setError('');
    setLoading(true);

    try {

      const res = fetch('http://localhost:3000/api/usersAPI', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
      })

      if (res.status === 200) {
        setUsername('')
      }

    } catch (err) {

      setError('Error communicating with the server.');

    } finally {

      setLoading(false);
      setUsername('')

    }

  };

  const handleSubmitBlog = async (e) => {
    e.preventDefault()

    try {

      const res = fetch('http://localhost:3000/api/blogsAPI', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blog: blog, authorID: authorID })
      })

      if (res.status === 200) { setBlog('') }

    } catch (eror) {

      setError('Error communicating with the server.');

    } finally {

      setLoading(false);
      setBlog('')

    }

  }


  return (
    <>
      {/* FORM User */}
      <form onSubmit={handleSubmit} className="space-y-6 w-1/2 border-1 rounded-2xl p-3">


        {/* Name input */}
        <div>
          <label className="block text-sm font-medium text-white mb-2 text-right">نام کاربری</label>
          <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-right" type="text" value={name} onChange={(e) => setUsername(e.target.value)} dir="rtl" required />
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




      {/* FORM Blogs */}
      <form onSubmit={handleSubmitBlog} className="space-y-6 w-1/2 border-1 rounded-2xl p-3">


        {/* Name input */}
        <div>
          <label className="block text-sm font-medium text-white mb-2 text-right">بلاگ</label>
          <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-right" type="text" value={blog} onChange={(e) => setBlog(e.target.value)} dir="rtl" required />
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
    </>

  );

}