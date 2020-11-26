export default function request(options){
  return new Promise((resolve,reject) => {
    wx.request({
      // url:options.url,
      url:'http://152.136.185.210:8000/api/w6' + options.url,
      methods:options.methods || 'get',
      data:options.data || {},
      success:resolve,
      fail:reject
    })
  })
}


// export default function request(options){
//   return new Promise((resolve,reject) => {
//     wx.request({
//       url:options.url,
//       methods:options.methods || 'get',
//       data:options.data || {},
//       success:function(res){
//         resolve(res)
//       },
//       fail:function(err){
//         reject(err)
//       }
//     })
//   })
// }