---
title: Nitinol Wristed Surgical Instruments
summary: Wristed robotic instruments for minimally invasive removal of cancerous colonic polyps, plus a manufacturing workflow that cut machining time by 90%.
org: UCSD Morimoto Robotics Lab
role: Undergraduate Researcher
period: 2025 – Present
tags: [Medical Robotics, Mechanical Design, Manufacturing]
featured: true
status: complete           # complete | prototype | design | concept
order: 1
image: /assets/images/projects/Helping_Hand/stepwise_resection.jpg   # still used for link previews
card: /assets/images/projects/Helping_Hand/HH_actuating.mp4          # plays on the project card
cover: /assets/images/projects/Helping_Hand/HH_actuating.mp4         # top of the project page
tools: [SolidWorks, Nitinol flexures, Wire EDM, Sinker EDM, CNC milling, Tendon actuation, micro-ROS, Load cells]
# links:
#   - label: Read the paper
#     url: https://...
stats:
  - value: 4 h → 23 min
    label: Machining time per part
  - value: 2-segment
    label: Tendon-driven wrist
  - value: IEEE ISMR
    label: Paper in progress
---

## The problem

Most colorectal cancers start as polyps, and catching them early during colonoscopy is one of the most effective cancer-prevention tools available. Small polyps are easy to snare. Large, flat lesions often need **endoscopic submucosal dissection (ESD)**, where the endoscopist cuts the lesion away from the colon wall layer by layer.

ESD is hard because every tool comes through the endoscope's working channel. Each instrument can only push, pull, and rotate along the scope's axis. Without a "second hand" to lift the tissue out of the way, the cutting plane is hard to see, procedures run long, and the risk of perforation goes up. This is why ESD is mostly done by a small number of specialists.

> **Goal:** give the endoscopist a dexterous, robotically actuated "helping hand" that can grasp the lesion and apply traction while a knife does the cutting, all through a standard colonoscope.

## Design requirements

| Requirement | Why it matters |
| --- | --- |
| Fit alongside a standard colonoscope | No new endoscope, so the system works with existing clinical workflows |
| Two independent bending segments | One segment positions the grasper, the other sets the traction angle |
| Grasp and hold tissue under load | Traction is only useful if the grasp doesn't slip |
| Coexist with an electrosurgical knife | The grasper and knife work in the same few millimeters without shorting |
| Survive repeated large bends | Instruments are articulated hundreds of times per procedure |

<!-- VERIFY / ADD: outer diameter, bend angles, grasp force targets if you have them -->

## Design

The instrument is a **two-segment, tendon-driven wrist** made from nitinol tube. Nitinol is superelastic: it recovers from strains of several percent, roughly ten times what steel can take. That lets a thin tube bend sharply and spring back over and over without plastic deformation.

Each segment is a **notched-tube flexure**. A pattern of notches cut into one side of the tube makes it much more flexible in one direction. Pulling a tendon routed along the notched side closes the notches and bends the segment.

- **Proximal segment:** lifts the wrist off the scope axis and exposes the knife.
- **Distal segment:** orients the grasper toward the tissue and sets the direction of traction.
- **Tendon routers** at each segment keep the proximal and distal tendons separated, which limits coupling between the two bends.
- A **knife isolation** sleeve keeps the electrosurgical knife electrically separate from the conductive nitinol wrist.

{% include media.html src="/assets/images/projects/Helping_Hand/HH_Rig_fig.png" class="wide" caption="System overview: two-segment tendon-driven nitinol wrist with grasper and ESD knife (left), driven by a lead-screw linear motion unit with inline beam load cells, wired to the electrosurgical generator (right)." %}

## Fabrication: 4 hours → 23 minutes

The first wrists were **CNC milled**. Nitinol is a notoriously difficult material to machine: it work-hardens, wears tools quickly, and a thin-walled tube deflects under cutting forces. Each part took about **4 hours** and needed constant attention.

I redesigned the process around **electrical discharge machining (EDM)**, which removes material with sparks instead of a cutting tool, so there's no cutting force on the tube:

1. **Sinker EDM** cuts the fixture features into **high-speed-steel (HSS) jigs**, so tubes are held precisely and repeatably in the same position.
2. **Wire EDM** cuts the notch pattern into the tube held in the jig.
3. Because the jig sets the location, setups are fast and the notch geometry stays consistent from part to part.

The result was **23 minutes per part**, a ~90% reduction. That meant the lab could iterate on notch designs in days instead of weeks.

<!-- VERIFY: exact sequence of sinker vs. wire EDM steps, how many tubes per jig -->

## Actuation & sensing

Each tendon is driven by a **lead-screw linear motion unit** on linear rails. **Beam load cells** sit inline with the proximal and distal tendons, so we measure tendon tension directly during every motion. The grasper is actuated through its own handle, and the knife is powered by a standard electrosurgical generator (ESG) controlled by a foot pedal.

The motors run on **micro-ROS**, and all sensor data is time-synchronized. That system is its own project: [Surgical Robot Control & Data Pipeline]({{ '/projects/surgical-robot-data-pipeline/' | relative_url }}).

## Testing

We validated the full workflow on **ex-vivo tissue**. The instrument performs the complete traction-assisted resection sequence:

1. **Initial pose:** the wrist is straight and the target is identified.
2. **Proximal articulation:** the wrist lifts away and exposes the knife.
3. **Distal articulation + grasper contact:** the grasper reaches and grips the tissue.
4. **Traction:** the wrist lifts the tissue and opens up the cutting plane.
5. **ESG activation:** the [electrosurgical knife]({{ '/projects/electrosurgical-knife/' | relative_url }}) cuts beneath the lifted tissue.
6. **Excision:** the lesion is removed while still held by the grasper.

{% include media.html src="/assets/images/projects/Helping_Hand/stepwise_resection.jpg" caption="Stepwise resection: (a) initial pose, (b) proximal articulation, (c) grasper contact, (d) traction, (e) ESG activation, (f) excised tissue." %}

<!-- ADD: quantitative results, e.g. traction force achieved, resection time, number of trials -->

## Results & publication

- A working two-segment wrist that completes traction-assisted resection end to end.
- A fabrication workflow that is **~10× faster**, making design iteration practical.
- This work is the basis of a paper on minimally invasive traction-assisted polypectomy, to be presented at the **IEEE International Symposium on Medical Robotics (ISMR)**.

## What I took away

Designing at this scale changed how I think about manufacturing. A small change in notch geometry can be the difference between a wrist that bends cleanly and one that buckles, so **how fast you can make a part sets how fast you learn**. Redesigning the fabrication process ended up being just as important as the mechanism design.

<!-- ADD: anything else you'd want an interviewer to know -->
