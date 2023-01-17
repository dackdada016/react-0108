import React from 'react'
// 引入React 本身的函示庫
class CC extends React.Component {
  constructor() {
    // 繼承來自父母元件的建構式
    super()
    this.state = {
      total: 0,
    }
  }
  componentDidMount() {}

  // 渲染
  render() {
    return (
      <>
        <h1>類別型元件</h1>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CC
