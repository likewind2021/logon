import { getValue, setValue, getHValue, delValue } from './RedisConfig'

setValue('imooc', 'imooc message from redis client')

getValue('imooc').then((res) => {
  console.log('getValue:' + res)
})

delValue('imooc')

setValue('imoocobj', { name: 'Jackson Yee', age: 21, email: 'Jackson@toimc.com' })

getHValue('imoocobj').then((res) => {
  console.log('getHValue:' + JSON.stringify(res, null, 2))
})
