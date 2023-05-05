const { createSlice } = require("@reduxjs/toolkit");

const SignupSlice = createSlice({
  name: "SignUp",
  initialState: {
    username: "",
    idno: "",
    email: "",
    password: "",
    confirmpassword: "",
  },
  reducers: {
    add(state, action) {
      state.username = action.payload.username;
      state.idno = action.payload.idno;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.confirmpassword = action.payload.confirmpassword;
    },
    del() {},
  },
});
export const { add, del } = SignupSlice.actions;
export default SignupSlice.reducer;
