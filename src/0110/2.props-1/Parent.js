import Child from './Child'

function Parent() {
  return (
    <>
      <Child
        text="hello"
        color="red"
        flag={true}
        foo={() => {
          alert('HI')
        }}
      />
    </>
  )
}
export default Parent
