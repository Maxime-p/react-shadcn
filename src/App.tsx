import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

function App() {
  return (
    <main className="p-4">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Hello, Shadcn!</h1>
        <ThemeToggle />
      </div>
      <p className="mt-4 text-muted-foreground">
        This is a simple React app using Shadcn components.
      </p>
      <Button className="mt-4">Click Me</Button>
    </main>
  )
}

export default App
