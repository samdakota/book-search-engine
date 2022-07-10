const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async () => {

        }
    },
    Mutation: {
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('User not found');
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Wrong password');
            }

            const token = signToken(user);
            return { token, user }
        },
        addUser: async () => {
            const user = await User.create();
            const token = signToken(user);

            return { token, user };
        },
        saveBook: async () => {
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $addToSet: { savedBooks: body } },
                    { new: true, runValidators: true }
                );
                
                return { updatedUser };
            } catch (err) {
                console.error(err);
            };
        },
        removeBook: () => {

        },
    },
};

module.exports = resolvers;