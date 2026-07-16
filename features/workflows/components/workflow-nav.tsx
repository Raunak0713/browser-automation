"use client"

import { Plus, Workflow } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const workflows = [
  { id: "1", name: "dominant-wasp", isActive: true },
  { id: "2", name: "honest-reindeer" },
  { id: "3", name: "expected-llama" },
  { id: "4", name: "essential-ocelot" },
  { id: "5", name: "creepy-echidna" },
  { id: "6", name: "eastern-silkworm" },
  { id: "7", name: "cultural-lion" },
  { id: "8", name: "proud-weasel" },
  { id: "9", name: "regional-bonobo" },
]

export function WorkflowNav() {
  const { state } = useSidebar()

  if (state === "collapsed") {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <SidebarMenuButton
            size="lg"
            className="group-data-[collapsible=icon]:w-full! justify-center"
          >
            <Workflow />
          </SidebarMenuButton>
        </PopoverTrigger>
        <PopoverContent side="right" align="start" sideOffset={8}>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Plus />
                <span>New workflow</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarSeparator />
          <SidebarMenu>
            {workflows.map((workflow) => (
              <SidebarMenuItem key={workflow.id}>
                <SidebarMenuButton isActive={workflow.isActive}>
                  <span>{workflow.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Workflows</SidebarGroupLabel>
      <SidebarGroupAction title="New Workflow">
        <Plus />
        <span className="sr-only">New Workflow</span>
      </SidebarGroupAction>
      <SidebarGroupContent>
        <SidebarMenu>
          {workflows.map((workflow) => (
            <SidebarMenuItem key={workflow.id}>
              <SidebarMenuButton isActive={workflow.isActive}>
                <span>{workflow.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
