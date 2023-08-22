import Call_me from "./Call_me"
import Send_emil from "./Send_emil"

function Footer() {
  return (
    <div className="SacendColor h-72  flex justify-center">
        <div className=" max-w-[900px] w-full flex justify-between">
          <Call_me/>
          <Send_emil/>
        </div>
    </div>
  )
}

export default Footer