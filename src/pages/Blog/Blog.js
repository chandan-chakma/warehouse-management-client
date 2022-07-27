import React from 'react';

const Blog = () => {
    return (
        <div className="w-50 mx-auto mt-5">
            <div className='border p-4 mb-4'>
                <h1 className='fs-3'>Different between Javascript and Node.js?</h1>
                <p className='fs-5'>Javascript is a programming language that is used for writing scripts on the website. Javascript can only run in the browser. Javascript used in frontend development. Beside Node js is a javascript runtime environment. We can run any browser. basically Node.js used in server side.</p>
            </div>
            <div className='border p-4 mb-4'>
                <h1 className='fs-3'>When should you use nodejs and when should you use mongodb?</h1>
                <p className='fs-5'>Node.js is a javascript runtime environment. Responsibility is especially execute application. Mongodb is a nosql database for storing data.Responsibility availability of data with automatic, fast, and instant data recovery. Actually depend on your application what technologies you use. </p>
            </div>

            <div className='border p-4 mb-4'>
                <h1 className='fs-3'>Differences between sql and nosql databases.</h1>
                <p className='fs-5'>SQL is Relational database management system (RDBMS). This database use in complex queries. Other side No-SQL database is a non relational database it is a distribute database system. This database in not good for complex queries. </p>
            </div>

            <div className='border p-4 mb-4'>
                <h1 className='fs-3'>What is the purpose of jwt and how does it work</h1>
                <p className='fs-5'>JWT is a json web token which is used to securely transfer information over the web. This token is mainly composed of header payload signature. Jwt defines the structure of information we sending from one party to another party.  </p>
            </div>


        </div>
    );
};

export default Blog;