import { WorkflowNav } from "@/features/workflows/components/workflow-nav"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"

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
        <WorkflowNav />
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
