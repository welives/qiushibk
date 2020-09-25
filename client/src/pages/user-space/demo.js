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
}
