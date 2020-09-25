import $conf from '@/common/config'
export default {
  dataList: [
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
  hotCate: [
    {
      id: 1,
      name: '关注',
    },
    {
      id: 2,
      name: '推荐',
    },
    {
      id: 3,
      name: '体育',
    },
    {
      id: 4,
      name: '热点',
    },
    {
      id: 5,
      name: '财经',
    },
    {
      id: 6,
      name: '娱乐',
    },
  ],
  carousel: [
    {
      cover: `${$conf.ossUrl}/banner1.jpg`,
    },
    {
      cover: `${$conf.ossUrl}/banner2.jpg`,
    },
    {
      cover: `${$conf.ossUrl}/banner3.jpg`,
    },
  ],
  topicList: [
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
}
