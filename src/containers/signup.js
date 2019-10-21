import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <form>
        <h1>signup</h1>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input
            type="password"
            name="password confirmation"
            placeholder="password"
          />
          <label htmlFor="password">Password confirmation</label>
        </div>
        <input type="submit" value="Signup" />
      </form>
    );
  }
}
export default Signup;
