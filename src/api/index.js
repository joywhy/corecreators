// await req('login', {mail: 'admin@corecreators.kr', pw: await password('qwerasdf')});

export async function getUserInfo(userinput) {
  const { email: email, password: pass } = userinput;

  // console.log(email, pass);
  const userInfo = await req('login', {
    mail: email,
    pw: await password(pass),
  });
  return userInfo;
}
