import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demos/resumable-upload')({
  component: ResumableUploadDemo,
})

function ResumableUploadDemo() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Resumable Upload</h2>
      <p className="text-muted-foreground">TODO: Implement resumable upload demo here.</p>
    </div>
  )
}
