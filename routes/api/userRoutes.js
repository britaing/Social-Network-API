const router = require('express').Router();

// require controller
const {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:freindID').post(addFriend).delete(deleteFriend)