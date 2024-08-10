// await req('login', {mail: 'admin@corecreators.kr', pw: await password('qwerasdf')});

export async function getUserInfo(userinput) {
  const { email: email, password: pass } = userinput;

  // console.log(email, pass);
  const userInfo = await req('login', {
    mail: email,
    pw: await password(pass),
  });
  cookie.my = userInfo.token;
  delete userInfo.token;
  return userInfo;
}

export async function rememberUser() {
  return await req('login', { token: cookie.my });
}
//
