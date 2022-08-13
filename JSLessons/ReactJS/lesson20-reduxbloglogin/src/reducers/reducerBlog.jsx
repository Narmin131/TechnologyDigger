// Reducer Start
const blogState = [];
const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];
    case "REMOVE_BLOG":
      return state.filter(({ id }) => {
        return id != action.id;
      });
     case "EDIT_BLOG":
      return state.map((blog)=>{
        if (blog.id  == action.id) {
          return{
            ...blog,
            ...action.update
          }
        }else{
          return blog;
        }
      })
    default:
      return state;
  }
};

// Reducer END

// Reducer Start
// const blogState1 = [];
// const blogReducer1 = (state = blogState1, action) => {
//   switch (action.type) {
//     case "ADD_BLOG":
//       return [...state, action.blog];

//     default:
//       return state;
//   }
// };

// Reducer END

export default blogReducer;
