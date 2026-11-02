---
title: Thermocautery Knife
summary: A miniature resistively heated cutting tip that cauterizes tissue without passing current through the patient, characterized with thermal imaging.
org: UCSD Morimoto Robotics Lab
role: Undergraduate Researcher
period: 2025 – Present
tags: [Medical Robotics, Manufacturing]
featured: false
status: prototype           # complete | prototype | design | concept
order: 3.5
image: /assets/images/projects/thermal_knife/thermal_knife.jpg
tools: [Thermocautery, Resistive heating, Micro-fabrication, Thermal imaging]
gallery:
  - src: /assets/images/projects/thermal_knife/thermal_knife.jpg
    caption: The heating element glowing during a bench test.
  - src: /assets/images/projects/thermal_knife/thermal_imaging.jpg
    caption: Thermal image during activation. Heat stays concentrated at the tip (peak reading 130°).
---

## The problem

Cutting and cauterizing tissue inside the colon usually means an [electrosurgical knife]({{ '/projects/electrosurgical-knife/' | relative_url }}), which sends RF current through the patient to a return pad. On our [nitinol wristed instrument]({{ '/projects/nitinol-wristed-instruments/' | relative_url }}), that current has to be kept carefully away from a conductive metal wrist millimeters from the knife.

**Thermocautery** takes a different approach. The tip is a small resistive element that **heats itself** when DC current runs through it, and it cuts and seals by conducting that heat into tissue. **No current ever enters the patient**, so there's no return pad and no risk of stray current through the wrist.

<!-- VERIFY: motivation for building the thermocautery version -->

## Design requirements

- **Miniature heating element** small enough to work alongside the wrist and grasper.
- **Heat concentrated at the tip**, with a fast drop-off along the shaft, so only the target tissue is affected.
- **Fast heat-up** for responsive on/off control during cutting.
- **Thermal isolation** so the shaft and nearby instrument stay cool.
- A **low-voltage DC supply**, so no electrosurgical generator is needed.

## Design

The tip is a **resistive heating loop** at the end of a flexible shaft. Current runs out along one conductor, through the high-resistance tip, and back along the other. Because the tip has much higher resistance than the leads, nearly all the power, and so all the heat, is dissipated right where the cut happens.

<!-- VERIFY / ADD: element material, wire gauge, tip geometry, shaft construction, drive current/voltage -->

## Fabrication

I fabricated the knife in-house. At this scale, small changes in tip geometry and the joints to the leads determine where the heat ends up, so the build focused on a **consistent element length** and **low-resistance connections** that don't heat up themselves.

<!-- ADD: fabrication steps -->

## Testing

- **Bench activation:** under power, the element glows at the tip while the shaft stays dark, a quick visual check that the heat stays where it should.
- **Thermal imaging** during activation confirmed the heat is **concentrated at the tip**, with a peak reading around **130°** and a steep drop-off along the shaft.

<!-- ADD: units for the 130° reading, heat-up time, tissue tests -->

## What I took away

Building the same tool two ways, with electrosurgery and with thermocautery, made the trade-offs concrete. Electrosurgery cuts faster but requires careful electrical isolation. Thermocautery is electrically safer and simpler to power, but everything comes down to **managing where the heat goes**.
