import React from 'react'
import ReactEcharts from 'echarts-for-react'
import * as styles from './index.css'

class Pie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 2, 3, 4]
    }
  }
  render() {
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '65%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ],
          label: {
            normal: {
              show: false,
              position: 'center'
            },

          },
        }
      ]
    };
    return (
      <div className={styles.pie_box}>
        {
          this.state.list.map(item => <ReactEcharts option={option} key={item} style={{width: '25%', maxHeight: '300px'}}/>)
        }
      </div>
    )
  }
}

export default Pie