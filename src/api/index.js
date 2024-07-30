export async function getUserInfo() {
  const userInfo = await req('login', {
    mail: 'admin@corecreators.kr',
    pw: await password('qwerasdf'),
  });
  return userInfo;
  // if(!my.token) console.log('아이디가 존재하지 않거나 비밀번호가 잘못되었습니다.')
}
