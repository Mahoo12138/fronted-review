import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function Index() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>
      <p className="text-muted-foreground">
        This project is a collection of frontend technical demos and implementations.
        Explore the demos using the sidebar navigation.
      </p>
      
      {/* 样式调试区域 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
            <CardDescription>
              Built with React, TanStack Router, TanStack Query, and shadcn/ui.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Test Button</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>
              Different button styles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="default">Default Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Style Debug</CardTitle>
            <CardDescription>
              CSS Variables Test
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="p-4 bg-primary text-primary-foreground rounded">
              Primary Color Test
            </div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded">
              Secondary Color Test
            </div>
            <div className="p-4 bg-accent text-accent-foreground rounded">
              Accent Color Test
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Index