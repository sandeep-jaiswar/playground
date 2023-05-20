import { Button, Loader } from "@openlibrary/ui";

export default function ButtonComponent() {
  return (
    <Button
      onClick={() => {
        console.log('login')
      }}
    >
      <Loader />
    </Button>
  )
}