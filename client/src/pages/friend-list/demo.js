import $conf from '@/common/config'
export default {
  dataList: [
    {
      avatar: `${$conf.ossUrl}/userpic/14.jpg`,
      username: '靓女',
      sex: 2, // 0保密, 1男, 2女
      age: 18,
      isFollow: true,
    },
    {
      avatar: `${$conf.ossUrl}/userpic/10.jpg`,
      username: '靓仔',
      sex: 1,
      age: 23,
      isFollow: false,
    },
    {
      avatar: `${$conf.ossUrl}/default.jpg`,
      username: '煎蛋',
      sex: 0,
      age: 30,
      isFollow: true,
    },
    {
      avatar: `${$conf.ossUrl}/userpic/8.jpg`,
      username: '川普',
      sex: 1,
      age: 66,
      isFollow: false,
    },
  ],
}
