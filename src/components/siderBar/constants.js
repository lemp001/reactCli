const menuConfig = [
  {
    title: '首页',
    key: '/',
    icon: 'edit'
  },
  {
    title: '图表',
    key: '/chart',
    icon: 'form',
    children: [
      {
        title: '饼图',
        key: '/chart/pie',
      },
      {
        title: '其他',
        key: '/chart/others',
      },
    ]
  },
  {
    title: '详情',
    key: '/detail',
    icon: 'copy',
  }
];

export default menuConfig;