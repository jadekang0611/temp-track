import React from 'react';

const LogIn = () => {
  return (
    <div>
      <h1>오늘도 좋은하루 보내세요, 원장님!</h1>
      <form>
        <label>
          아이디:
          <input type="email"></input>
        </label>
        <label>
          비밀번호:
          <input type="password"></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LogIn;
