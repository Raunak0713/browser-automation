"use client"

import { Plus, Workflow } from "lucide-react"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

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

export function AppSidebar() {
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
          <OrganizationSwitcher
            hidePersonal
            appearance={{
              elements: {
                rootBox: "flex-1 min-w-0",
                trigger: "w-full justify-start gap-2",
                organizationSwitcherTrigger: "w-full justify-start gap-2",
              },
            }}
          />
          <SidebarTrigger />
        </div>
        <SidebarTrigger className="hidden group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:justify-center" />
      </SidebarHeader>

      <SidebarContent>
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
                    <Workflow />
                    <span>{workflow.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="group-data-[collapsible=icon]:items-center">
        <UserButton
          appearance={{
            elements: {
              rootBox: "w-full",
              userButtonTrigger:
              "w-full justify-start group-data-[collapsible=icon]:justify-center",
              userButtonOuterIdentifier: "group-data-[collapsible=icon]:hidden"
            },
          }}
          />
        </SidebarFooter>
    </Sidebar>
  )
}
