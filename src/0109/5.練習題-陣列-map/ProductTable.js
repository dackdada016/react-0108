import data from './data/products.json'
import './ProductTable.css'

function ProductTable(props) {
  return (
    <>
      <h1>map展示</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr>
                <td key={v.id}>{v.id}</td>
                <td>
                  <img src={v.picture} alt="" />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default ProductTable
