module.exports = (ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        msg: 'Protected resource, use Authorization header to get access\n'
      }
    } else {
      // console.log('process.env.NODE_ENV', process.env.NODE_ENV)
      ctx.status = err.status || 500;
      ctx.body = Object.assign({
        code: 500,
        msg: err.message
      }, process.env.NODE_ENV === 'development'? { stack: err.stack } : {})
    }
  });
}