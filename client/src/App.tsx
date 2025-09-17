import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { CreateContentModal } from "./components/CreateContentModal"
import { Add } from "./icon/Add"
import { Share } from "./icon/Share"




function App() {
  

  return (
    <>
    <div className="p-4">
      <CreateContentModal open={true} />
    <div className="flex justify-end gap-4">
      
      <Button variant="primary" text="Add Content" startIcon={<Add />} ></Button>
      <Button variant="secondary" text="Share Brain" startIcon={<Share />}></Button>
      </div>
      <div className="flex gap-4">
        <Card type="x" link="https://twitter.com/Hiteshdotcom/status/1968201148365672568" title="hitesh post"/>
        {/* <Card type="youtube" /> */}
        <Card link="https://www.youtube.com/watch?v=leWuDQoDaYY" title="first video" type="youtube" />
      </div>
      </div>
    </>
  )
}

export default App
