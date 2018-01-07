
export default {
  Query: {
    allUsers: async (parent, args, { Collection }) => {
      // { _id: 123123, name: "whatever"}
      const cats = await Collection['User'].find();

      return cats.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
    allPost: async (parent, args, { Collection }) => {
      console.log("called allUsers function",args)
      // { _id: 123123, name: "whatever"}
      const cats = await Collection['Post'].find().populate('user');
      console.log("called allUsers cats",cats)

      return cats.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
    allUserWithPost: async (parent, args, { Collection }) => {
      console.log("called allUserWithPost" ,args)
      // { _id: 123123, name: "whatever"}
      const cats = await Collection['Post'].find().populate('user');
      console.log("called allUsers cats",cats)

      return cats.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
  },
  Mutation: {
    createUser: async (parent, args, { Collection }) => {
      // { _id: 123123, name: "whatever"}
      const kitty = await new Collection['User'](args).save();
      kitty._id = kitty._id.toString();
      return kitty;
    },
    createPost: async (parent, args, { Collection }) => {
      // { _id: 123123, name: "whatever"}
      console.log("called allUsers function",args)

      const kitty = await new Collection['Post'](args).save();
      kitty._id = kitty._id.toString();
      return kitty;
    },
  },
};
