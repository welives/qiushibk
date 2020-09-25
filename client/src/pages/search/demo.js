import $conf from '@/common/config'
export default {
  post: [
    {
      username: '煎蛋',
      avatar: `${$conf.ossUrl}/default.jpg`,
      isFollow: false,
      title: '测试标题1',
      content: '英国大量上班族希望延续远程办公的政策',
      cover: `${$conf.ossUrl}/datapic/11.jpg`,
      support: {
        type: 'praise',
        praise_count: 10,
        blame_count: 10,
      },
      comment_count: 0,
      share_count: 0,
      created_at: new Date().getTime() - Math.floor(Math.random() * 1e10),
    },
    {
      username: '咸鱼',
      avatar: `${$conf.ossUrl}/userpic/3.jpg`,
      isFollow: true,
      title: '测试标题2',
      content: '外部供应链被切断，内部猴子不够用',
      cover: `${$conf.ossUrl}/datapic/12.jpg`,
      support: {
        type: 'blame',
        praise_count: 10,
        blame_count: 10,
      },
      comment_count: 0,
      share_count: 0,
      created_at: new Date().getTime() - Math.floor(Math.random() * 1e10),
    },
    {
      username: '绿师',
      avatar: `${$conf.ossUrl}/userpic/10.jpg`,
      isFollow: true,
      title: '测试标题3',
      content: 'Y染色体的消失，并不意味着男性的灭绝',
      cover: `${$conf.ossUrl}/datapic/2.jpg`,
      support: {
        type: '',
        praise_count: 0,
        blame_count: 0,
      },
      comment_count: 0,
      share_count: 0,
      created_at: new Date().getTime() - Math.floor(Math.random() * 1e10),
    },
  ],
  // 话题
  topic: [
    {
      cover: `${$conf.ossUrl}/topicpic/1.jpeg`,
      title: '话题名称1',
      desc: '话题描述1',
      news_count: 10,
      today_count: 10,
    },
    {
      cover: `${$conf.ossUrl}/topicpic/2.jpeg`,
      title: '话题名称2',
      desc: '话题描述2',
      news_count: 10,
      today_count: 10,
    },
    {
      cover: `${$conf.ossUrl}/topicpic/3.jpeg`,
      title: '话题名称3',
      desc: '话题描述3',
      news_count: 10,
      today_count: 10,
    },
    {
      cover: `${$conf.ossUrl}/topicpic/4.jpeg`,
      title: '话题名称4',
      desc: '话题描述4',
      news_count: 10,
      today_count: 10,
    },
  ],
  // 用户
  user: [
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
  history: [
    {
      keyword: 'ThinkPHP5.1',
    },
    {
      keyword: 'layuiAdmin',
    },
    {
      keyword: 'Vue实战项目',
    },
    {
      keyword: 'uni-app实战项目',
    },
    {
      keyword: 'egg.js实战项目',
    },
    {
      keyword: '前后端分离实战项目',
    },
  ],
}
