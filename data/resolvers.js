import {Films} from '../db/dbConnector.js'

/**
 * GraphQL Resolvers 
 **/

export const resolvers = {
  Query: {
    getFilms() {
      return new Promise((resolve, reject) => {
        Films.find((err, friends) => {
          if (err) reject(err);
          else resolve(friends);
        })
      })
    }
  },
  Mutation: {
    async rateFilm(_, {
      input
    }) {
      console.log('input', input)
      const currentFilm = await Films.findOneAndUpdate({
        _id: input.id
      }, {
        comment: input.comment,
        rating: input.rating,
      })

      console.log('currentFilm', currentFilm)
      return currentFilm
    },
    createFilm: (root, {
      input
    }) => {
      const newFilm = new Films({
        name: input.name,
        rating: input.rating,
        comment: input.comment,
        tags: input.tags,
        url: input.url
      });

      newFilm.id = newFilm._id;

      return new Promise((resolve, reject) => {
        newFilm.save((err) => {
          if (err) reject(err);
          else resolve(newFilm);
        })
      })
    },
  }
};