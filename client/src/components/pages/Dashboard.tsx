import { useState } from "react"
import { Button } from "../ui/Button"
import { Card } from "../ui/Card"
import { CreateContentModal } from "../ui/CreateContentModal"
import { Add } from "../../icon/Add"
import { Share } from "../../icon/Share"
import { Sidebar } from "../ui/Sidebar"




function Dashboard() {

  const [modalOpen, setModelOpen] = useState(false)
  return (
    <>
      <div >
        <Sidebar />
        <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
          <CreateContentModal open={modalOpen} onClose={() => {
            setModelOpen(false)
          }} />
          <div className="flex justify-end gap-4">

            <Button onClick={() => {
              setModelOpen(true)
            }} variant="primary" text="Add Content" startIcon={<Add />} ></Button>
            <Button variant="secondary" text="Share Brain" startIcon={<Share />}></Button>
          </div>
          <div className="flex gap-4">
            <Card type="x" link="https://twitter.com/Hiteshdotcom/status/1968201148365672568" title="hitesh post" />
            {/* <Card type="youtube" /> */}
            <Card link="https://www.youtube.com/watch?v=leWuDQoDaYY" title="first video" type="youtube" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
