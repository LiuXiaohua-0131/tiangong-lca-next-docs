---
sidebar_position: 1
---

# TianGong LCA Data Platform Overview

This introduction will help you understand the core functionality and data modules of the TianGong LCA Data Platform, and how to use these features to manage and share lifecycle assessment data.

> The TianGong LCA Platform online version is free for everyone to use. If you haven't registered an account yet, please see [First Login and Registration](../quick-start/first-login.md). To learn how to get started quickly, see [Demonstrations](../quick-start/demonstrations.md).

The TianGong LCA Data Platform provides four core data modules for viewing, managing and analyzing lifecycle assessment data. All modules contain models, processes, flows, flow properties, units, sources and contact information, but with different access permissions.

## Open Data

The **Open Data** module provides standardized LCA datasets reviewed by the platform, available for viewing and referencing by all users. Key features:

- Data sources: Publicly available data sources
- Permissions: View and use data only
- Data publishing: User-created datasets can be published here after review
- Applications: Supports searching, filtering and referencing for research and analysis

## Commercial Data

The **Commercial Data** module provides metadata for commercial LCA datasets. Key features:

- Content: Only displays dataset metadata (descriptive information)
- Permissions: View metadata only
- Access: Users can contact data providers for complete datasets
- Publishing: Commercial users can publish reviewed metadata through the platform

> Note:  
Both Open Data and Commercial Data **cannot be modified directly**. To adjust data, first copy target data to [My Data](./create-my-data.md) module, make modifications there, then reference from [My Data](./create-my-data.md).

## My Data

The **My Data** module is the core area for data creation and management, with full operational permissions. Features include:

- **Models**: Visual construction of product LCA models
- **Processes**: Create and manage unit processes, save product model results
- **Flows**: Create and edit product flows, waste flows
- **Flow Properties**: Define physical, chemical, economic properties and composition
- **Units**: Create and manage unit groups (physical, monetary, energy units etc.)
- **Sources**: Manage data references and image files (literature, reports etc.)
- **Contacts**: Maintain personal and team contact information

For detailed data creation procedures, see [Creating New Data](./create-my-data.md).

Note: Creating new flow properties and units is not recommended. Use platform-provided standard properties and units to ensure proper LCIA calculations.

## Team Data

The **Team Data** module manages and shares collaborative team data. Key features:

- Permissions: View only
- Scope: View all data from joined teams
- Management: Team admins can maintain data in "My Data" module
- Collaboration: Supports data sharing and referencing among team members

## Data Operation Permissions

| Module | View Full Data | View Metadata | Create | Edit | Delete | Copy |
|--------|----------------|---------------|--------|------|--------|------|
| Open Data |✅|||||✅|
| Commercial Data ||✅||||✅|
| My Data |✅|✅|✅|✅|✅|✅|
| Team Data |✅|||||✅|
