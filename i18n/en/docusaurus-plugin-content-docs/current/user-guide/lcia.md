---
sidebar_position: 5
---

# LCIA Calculation and Viewing

This page briefly explains how to trigger LCIA (Life Cycle Impact Assessment) calculations on the platform, view results, and common troubleshooting steps.

## Overview

LCIA converts LCI (life cycle inventory) results into environmental impact indicators. The platform supports triggering LCIA calculations at the model and process levels and viewing the calculated results.

## Preconditions

- Use platform-provided standard flow properties and units; avoid custom unit groups or flow properties. See the "Creating Data" page for related notes. Custom units or properties may cause LCIA calculation failures or incorrect results.
- Models or processes should have their inputs/outputs correctly bound and a reference (functional) flow set.
- Ensure characterization factors are available for the selected impact categories; otherwise some categories cannot be calculated.

## Where to trigger calculation

1. Model: Open the target model under "My Data → Models", go to the Results or Inputs & Outputs panel, and click the "Calculate LCIA" / "Run assessment" button (UI label may vary by version). After the calculation finishes, results will appear in the model results panel.
2. Process: Open a unit process under "My Data → Processes" and use the "Run LCIA" or "Calculate results" action present on the page to view process-level results.

(Note: UI labels and panel locations may change between releases. Refer to demo videos or contact an administrator if you cannot find the controls.)

## Viewing results

- Results are typically listed by impact categories (e.g. GHGs, ozone depletion, acidification) and can be normalized to the functional unit or reference flow.
- You can switch between impact categories in the model results panel or export results for further analysis.

- Note: LCIA run at the **process** level includes only the impacts caused by the process's elementary flows. It does not include impacts from other products or waste streams produced by the process.
- To include product and waste impacts across linked processes, run LCIA at the **model** level (assemble related processes into a model and run the assessment there).

## Troubleshooting

- Missing categories or failed calculation: check that flows have standard properties and units provided by the platform.
- Abnormal magnitudes (scale errors): verify units are consistent and not created from custom unit groups.
- Missing characterization factors error: ensure selected impact categories have characterization factors for the used flows.

If issues persist, inspect flows/units/flow properties in "My Data" and refer to "Creating Data" and "Data Platform Overview".

## Related

- Data Platform Overview: /docs/user-guide/data.md
- Creating Data: /docs/user-guide/create-my-data.md
