---
sidebar_position: 7
---

# Team Functionality Guide

This section explains the platform's team collaboration features for managing and sharing lifecycle assessment data.

## Overview

The platform supports team creation and membership for collaborative data management. Users can:

- **Create Teams**: Become team owners with full administrative privileges to manage members and settings.
- **Join Teams**: Requires invitation from team owners or administrators.

Users accessing **My Team** without existing membership can choose to create or join a team.

![Team Management Interface](img/my-team.png)
![Join or Create Team](img/join-or-create-team.png)

---

## Creating a Team

Click "Create Team", enter basic information (team name, description), and confirm to establish a new team.

![Create Team Button](img/create-team.png)
![Team Information Form](img/team-information.png)

---

## Joining a Team

Standard users can search for teams via "Join Team" and contact owners using provided contact information.

![Join Team Interface](img/join-team.png)
![Team Search Function](img/search-team.png)

⚠️ Currently only supports **invitation-only membership** - users cannot join teams without owner/admin approval.

---

## Team Invitation Process

1. **Owner/Admin Invitations**:
   Team owners and administrators can invite new members via username search.

   ![Add Member Interface](img/add-member.png)
   ![Member Email Display](img/team-member-email.png)

2. **Accepting Invitations**:
   Invited members receive notifications (red dot indicator) and must accept invitations to join.

   ![Invitation Notification](img/team-invitation.png)

3. **Successful Joining**:
   Members gain access to team data and can contribute to collaborative work.

![Team Data Access](img/team-member-data.png)

---

## Team Management Features

The member interface displays:

- **Usernames and emails**
- **Member roles**:
  - `Owner` (creator with full privileges)
  - `Administrator` (assigned management rights)
  - `Member` (standard viewing rights)

![Role Management](img/team-role.png)

Owners can perform these management actions:

- Invite new members
- Assign administrator status
- Revoke administrator privileges
- Resend invitations
- Remove members

Administrators can:

- Invite new members
- Remove existing members

For detailed button functions, see: [Team Button Reference]

---

## Frequently Asked Questions

- **Why don't some flows show units when contributed by team members?**  
Public system flows display units automatically. Member-created flows require synchronization of both process AND flow data to properly display units and properties.
