"use client"

import { Plus, Workflow } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function Page() {
  return (
    <Empty className="min-h-svh">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Workflow />
        </EmptyMedia>
        <EmptyTitle>No workflow selected</EmptyTitle>
        <EmptyDescription>
          Select a workflow from the sidebar
          <br />
          or create a new one to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="lg">
          <Plus />
          New workflow
        </Button>
      </EmptyContent>
    </Empty>
  )
}
