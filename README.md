# Graphql-apollo-server
Graphql demo with apollo client at server side.
# Install instruction
    step 1 -  npm i 
    step 2 -  npm start
    make sure that mongodb is running for crud operation
   ## [http://localhost:3000/graphiql](http://localhost:3000/graphiql)
   ## Query for graphiql - 
      mutation saveUser {
      createUser(firstName: "Your firsName", lastName: "Your lastName") {
        _id
        firstName
        lastName
      }
    }

    query getAllUser {
      allUsers {
        _id
        firstName
        lastName
      }
    }

    query getAllPost {
      allPost {
        _id
        user
        title
        description
      }
    }

    mutation savePost {
      createPost(user: "userId", title: "Learn graphql", description: "its easy to learn Graphql and very use full too.") {
        user
        _id
        title
        description
      }
    }

    query userWithpost{
      allUserWithPost{
        title
        description
        user{
          lastName
          firstName
        }

      }
    }
     
# resolver
  you can find resolver in /resolver/user directory
# Schema 
   Input , output schema is define in /schema/user

    
