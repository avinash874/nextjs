import { Button } from "@/components/ui/button"

const page = () => {
  return (
    <div className="min-h-screen bg-amber-50  p-4">
      <p>
        This approach works well until you need to customize a component to fit your design 
        system or require one that isn’t included in the library. Often, you end up wrapping 
        library components, writing workarounds to override styles, or mixing components from 
        different libraries with incompatible APIs.
      </p>
      <Button> Click Me </Button>
    </div>
  )
}

export default page;