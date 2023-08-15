

function Contaner(props: any) {
  return (
    <div className="m-auto max-w-[800px]  grid grid-cols-2 gap-4  items-center">{props.children}</div>
  )
}

export default Contaner