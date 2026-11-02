---
title: Sub-Millimeter Electrosurgical Knife
summary: A sub-millimeter electrosurgical knife designed and fabricated for endoscopic submucosal dissection.
org: UCSD Morimoto Robotics Lab
role: Undergraduate Researcher
period: 2025 – Present
tags: [Medical Robotics, Manufacturing]
featured: false
status: prototype           # complete | prototype | design | concept
order: 3
tools: [Electrosurgery, Micro-fabrication, Electrical isolation]
# image: /assets/images/projects/electrosurgical_knife/....jpg
---

## The problem

In **endoscopic submucosal dissection (ESD)**, the lesion is cut free with an electrosurgical knife: a small electrode that passes high-frequency current into tissue, heating it fast enough to cut and coagulate at the same time. Commercial ESD knives are built to pass through an endoscope's working channel on their own.

Our [nitinol wristed instrument]({{ '/projects/nitinol-wristed-instruments/' | relative_url }}) needed a knife that could ride **alongside the wrist** in the same small space. The off-the-shelf options were too large and couldn't be integrated, so I designed one.

## Design requirements

- **Sub-millimeter** cutting tip that fits next to the wrist and grasper.
- **Electrical isolation** from the conductive nitinol wrist, so current only flows where we want it.
- **Current concentrated at the tip.** Stray current along the shaft risks burning tissue that isn't being cut.
- Compatible with a **standard electrosurgical generator (ESG)** and return pad.

## Design

The knife is a **thin exposed electrode tip** on an **insulated shaft**. Only the tip is bare, so current density, and therefore heating, is highest exactly where the cut happens. A flexible shaft lets it follow the scope while staying straight enough to aim. An isolation sleeve keeps the knife from contacting the wrist.

<!-- VERIFY / ADD: electrode material, tip diameter/length, insulation material, how the shaft is built -->

## Fabrication

I fabricated the knife in-house. At this scale, small variations in how much of the tip is exposed change how it cuts, so the process was built around **repeatable tip exposure** and **reliable insulation**.

<!-- ADD: fabrication steps -->

## Testing

- **Bench activation:** the knife was connected to a standard ESG, with a foot pedal and return pad, to confirm clean cutting at the tip.
- **Ex-vivo ESD:** the knife performed the cutting step in the full traction-assisted resection sequence with the wristed instrument (step (e) on the [project page]({{ '/projects/nitinol-wristed-instruments/' | relative_url }})).

<!-- ADD: test results, photos -->

## Electrosurgery vs. thermocautery

I also built a [thermocautery knife]({{ '/projects/thermocautery-knife/' | relative_url }}) for the same application. The two cut in fundamentally different ways:

| | Electrosurgical | Thermocautery |
| --- | --- | --- |
| How it heats | RF current flows **through the tissue** | A resistive element **heats itself**, then conducts heat into tissue |
| Return pad needed | Yes | No |
| Current in the patient | Yes | None |
| Power source | Standard ESG | Low-voltage DC supply |

## What I took away

Electrosurgical tools are as much an **electrical design problem** as a mechanical one. Getting insulation and exposed area right mattered more than the overall geometry.
