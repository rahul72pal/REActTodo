import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mx-auto mt-8 text-center text-white p-5">
            <h1 className="text-4xl font-bold mb-4">Welcome to Your Todo App</h1>
            <p className="text-lg mb-8">Stay organized and get things done!</p>

            <div className="flex justify-center space-x-4">
                <Link to="/tasks" className="bg-blue-500 text-white px-4 py-2 rounded">
                    View Tasks
                </Link>
                <Link to="/add-task" className="bg-green-500 text-white px-4 py-2 rounded">
                    Add Task
                </Link>
                <Link to="/sign-up" className="bg-green-500 text-white px-4 py-2 rounded">
                    Sing Up
                </Link>
            </div>
        </div>
    );
};

export default Home;
