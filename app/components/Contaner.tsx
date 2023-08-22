

function Contaner(props: any) {
  return (
    <div className="sm:grid-cols-1 lg:grid-cols-2  w-[90%] m-auto mt-6 grid ">{props.children}</div>
  )
}

export default Contaner