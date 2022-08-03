const { User, Project } = require('../models');

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const fetchAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{
                model: Project,
                attributes: ['id', 'title', 'imageUrl', 'description'],
            }],
        });
        return res.status(200).json({
            users,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const fetchAUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id,
            },
            include: [{
                model: Project,
                attributes: ['title', 'imageUrl', 'description'],
            }],
        });
        if (user) {
        return res.status(200).json({
            user,
        });
    }
    return res.status(404).json({
        error: 'User not found',
    });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const changeAUser = async (req, res) => {
    try {
        const user = await User.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (user) {
            return res.status(200).json({
                user,
            });
        }
        return res.status(404).json({
            error: 'User not found',
        });    
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createUser,
    fetchAllUsers,
    fetchAUser,
    changeAUser
}