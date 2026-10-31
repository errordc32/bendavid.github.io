---
title: Nitinol Wristed Surgical Instruments
summary: Wristed robotic instruments for minimally invasive removal of cancerous colonic polyps, plus a manufacturing workflow that cut machining time by 90%.
org: UCSD Morimoto Robotics Lab
role: Undergraduate Researcher
period: 2025 – Present
tags: [Medical Robotics, Mechanical Design, Manufacturing]
featured: true
status: prototype           # complete | prototype | design | concept
order: 1
image: /assets/images/projects/Helping_Hand/stepwise_resection.jpg   # still used for link previews
card: /assets/images/projects/Helping_Hand/HH_actuating.mp4          # plays on the project card
cover: /assets/images/projects/Helping_Hand/HH_actuating.mp4         # top of the project page
stats:
  - value: 4 h → 23 min
    label: Machining time per part
  - value: IEEE ISMR
    label: Paper in progress
---

## Overview

Removing cancerous polyps from the colon takes dexterity that is hard to get through the narrow working channel of an endoscope. I design **nitinol wristed robotic instruments** that give the surgeon that dexterity without open surgery.

## What I did

- **Designed** the wristed nitinol instruments for traction-assisted polypectomy.
- **Fabricated** the first iterations by CNC milling, then **redesigned the production workflow** around sinker-EDM HSS jigging and wire EDM. That took machining time from **4 hours to 23 minutes** per part.
- Integrated the instruments with the lab's actuation and sensing stack (see [Surgical Robot Control & Data Pipeline]({{ '/projects/surgical-robot-data-pipeline/' | relative_url }})).

{% include media.html src="/assets/images/projects/Helping_Hand/HH_Rig_fig.png" class="wide" caption="System overview: two-segment tendon-driven nitinol wrist with grasper and ESD knife (left), driven by a lead-screw linear motion unit with inline beam load cells, wired to the electrosurgical generator (right)." %}

## Outcome

On ex-vivo tissue, the instrument performs the full traction-assisted resection sequence: proximal articulation exposes the knife, distal articulation brings the grasper into contact, traction lifts the tissue, and the electrosurgical knife excises it.

{% include media.html src="/assets/images/projects/Helping_Hand/stepwise_resection.jpg" caption="Stepwise resection: (a) initial pose, (b) proximal articulation, (c) grasper contact, (d) traction, (e) ESG activation, (f) excised tissue." %}

This work is the basis of a paper on minimally invasive traction-assisted polypectomy, to be presented at the **IEEE International Symposium on Medical Robotics**.
