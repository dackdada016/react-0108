function ChildA(props) {
  return (
    <>
      <h1>ChildA</h1>
      <p>來自子元件B的資料: {props.dataFromChid}</p>
    </>
  )
}

export default ChildA
