import MobxTutorial from '@/pages/framework/mobx'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/frameworks/mobx')({
  component: MobxTutorial,
})