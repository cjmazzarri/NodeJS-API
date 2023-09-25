import express from 'express';

import { getAllUsers, deleteUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default(router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers); //Added isAuthenticated so we can only see users if logged in
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser); //Only allow the owner to delete their user
};

