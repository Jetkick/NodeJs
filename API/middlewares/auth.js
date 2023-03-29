const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
  const headers = req.headers;
  if (!headers.hasOwnProperty('authorization')) {
    return res.status(200).json({
      status : 403,
      success : false,
      message : '로그인이 필요합니다.'
    });
  }
  const token = req.headers.authorization.split('Bearer ')[1] || req.headers[(`x-access-token`)]
  if  (!token || token === null) {
    return res.status(200).json({
      status : 403,
      success : false,
      message : '로그인이 필요합니다.'
    })
  }
  // 토큰이 유효한지 검증


console.log('1');
  const jwtToken = new Promise((resolve, reject) => {
    jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
      if (err) { //토큰이 일치하지 않음.

        const info = {
          type : false,
          message : ''
        }

        console.error(err)
        info.type = false;
        info.message = '토큰이 일치하지 않습니다.';
        return res.status(403).send({
          status : 403,
          success : false,
          info : `${info}`
        })
      }
      console.log(info);
      resolve(decoded)
    })
  })

  jwtToken.then((decoded) => {
    req.decoded = decoded;
    next();
  })

}
