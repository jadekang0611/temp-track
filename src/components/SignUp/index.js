import React from 'react';

const SignUp = () => {
  return (
    <div>
      <h2>환영합니다.</h2>
      <form>
        <label for="name">
          이름:
          <input type="text" name="name" value=""></input>
        </label>
        <label for="location">
          사업장 이름:
          <input type="text" name="location" value=""></input>
        </label>
        <label for="email">
          이메일:
          <input type="email" name="email" value=""></input>
        </label>
        <label for="password">
          비밀번호:
          <input type="password" name="password"></input>
        </label>
      </form>
    </div>
  );
};

export default SignUp;
