export default `

type User {
  _id: String!
  firstName: String!
  lastName: String!
}
type Post{
  _id:  String!,
  title:  String!,
  description:  String!
  user: String!
}
type getUserWithPost{
  user : User!
  _id : String!
  title : String!
  description : String!
}
type Query {
  allUsers: [User!]!
  allPost : [Post!]!
  allUserWithPost: [getUserWithPost!]!
}

type Mutation {
  createUser(firstName: String! , lastName: String!): User!
  createPost(user: String! , title: String! , description: String!): Post!
}

`;


// _id:String!
// user : User!
// title : String!
// description : String!
// type User { _id:String, Name: String }
// type Query { allUsers: [User] }
// type Mutation { createUser(Name: String): User}
// type Cat {
//   _id: String!
//   name: String!
// }
// type Query {
//   allCats: [Cat!]!
// }
// type Mutation {
//   createCat(name: String!): Cat!
// }
