---
sidebar_position: 1
---

# Data Platform Overview

Use this page to understand the scope, permissions, and typical usage of each data module before diving into creation or review work.

> New to the platform? Complete [First Login](/en/quick-start/first-login) and review the [Demonstrations](/en/quick-start/demonstrations) first.

## Key terminology

- **Model**: A network of processes describing a product system; can be referenced like a process.  
- **Process**: A unit-process record containing inputs, outputs, modelling, and management information.  
- **Flow**: Material, energy, or economic flow linked to unit groups and flow properties.  
- **Unit group**: A set of related units with defined conversion factors.  
- **Sources / Contacts**: Reference documents and responsible people attached to datasets.

These elements appear in every module, but permissions differ.

## Module overview

| Module | Primary audience | Main purpose | Permissions | Typical actions |
| --- | --- | --- | --- | --- |
| **Open Data** | All platform users | Browse and reference audited datasets | Read-only | Search, filter, copy, export |
| **Commercial Data** | Users needing third-party datasets | Discover metadata and contact providers | Read metadata | Browse, copy contact info |
| **My Data** | Authors and maintainers | Create, edit, import, and version datasets | Full CRUD | Create, import, edit, contribute, submit for review |
| **Team Data** | Team members | Share and reuse collaborative assets | Read-only | Discover, reference, copy to My Data |

> Open Data and Commercial Data cannot be edited directly. Copy them to [My Data](/en/user-guide/create-my-data) before making changes.

## Module details

### Open Data

- Audited, standardised lifecycle datasets curated by the TianGong team.  
- Ideal for research, referencing, and comparison.  
- Supports search, filtering, copy, and export.

### Commercial Data

- Presents descriptive metadata for commercial datasets.  
- Use the listed contacts to obtain full datasets from providers.  
- Suits organisations needing licensed or premium content.

### My Data

- Your main authoring workspace for models, processes, flows, unit groups, sources, and contacts.  
- Supports drafts, imports/exports, versioning, and team contributions.  
- See [Create My Data](/en/user-guide/create-my-data) and [Data Use](/en/user-guide/data-use) for detailed workflows.  
- ⚠️ Prefer the platform’s standard unit groups and flow properties to avoid LCIA compatibility issues.

### Team Data

- Shows datasets shared within your teams.  
- Copy items into “My Data” if you need to edit them, then share updates back to the team.  
- Works hand-in-hand with role management described in [Team Functions](/en/user-guide/team-function).

## Permission matrix

| Module | View full data | View metadata | Create | Edit | Delete | Copy |
| --- | --- | --- | --- | --- | --- | --- |
| Open Data | ✅ | | | | | ✅ |
| Commercial Data | | ✅ | | | | ✅ |
| My Data | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Team Data | ✅ | | | | | ✅ |

Next steps: proceed to [Create My Data](/en/user-guide/create-my-data) to build content, or jump to [Team Functions](/en/user-guide/team-function) for collaboration guidance.
