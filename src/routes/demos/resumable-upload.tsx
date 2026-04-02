import { createFileRoute } from '@tanstack/react-router'
import * as styles from './resumable-upload.css'

export const Route = createFileRoute('/demos/resumable-upload')({
  component: ResumableUploadDemo,
})

function ResumableUploadDemo() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Resumable Upload</h2>
      <p className={styles.mutedText}>TODO: Implement resumable upload demo here.</p>
    </div>
  )
}
