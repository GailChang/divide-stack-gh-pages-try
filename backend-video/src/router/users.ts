import express from 'express';

import { deleteUser, getAllUsers, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
    router.get("/users", isAuthenticated, getAllUsers);
    // 不加 isAuthenticated 會失敗是因為，isOwner 裡面的 identity._id，需要從 isAuthenticated 裡面先有 merge req，才抓得道
    router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
}