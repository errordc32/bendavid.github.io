---
title: Colonoscope Manipulation Tools & Test Rig
summary: External tools that make colonoscopes easier to handle, plus a portable rig for collecting torque and EMG data on a colonoscopy simulator.
org: UCSD Delson Engineering Lab
role: Undergraduate Researcher
period: 2023 – 2024
tags: [Medical Robotics, Mechanical Design, Embedded]
featured: false
status: prototype           # complete | prototype | design | concept
order: 7
image: /assets/images/projects/endogrip/testing_rig_web.jpg
image_position: 50% 40%
tools: [SolidWorks, 3D printing, Tribology, Torque sensing, EMG (Delsys Trigno), Arduino, 80/20 extrusion]
---

## The problem

During a colonoscopy, the endoscopist steers the scope by **twisting and pushing the insertion tube by hand**. The tube is slippery with lubricant, so getting enough torque means gripping hard, over and over, for hours a day. Musculoskeletal pain and injury are common among endoscopists, especially in the hand, wrist, and thumb.

The Delson Lab studies how to reduce that strain. My work had two parts: **tools** that make the scope easier to grip and turn, and a **test rig** to measure whether they work.

## Manipulation tools

### Design goals

- Clamp onto a standard colonoscope **without modifying it**.
- **Increase the effective grip diameter**, so the same torque needs less grip force.
- Go on and come off quickly mid-procedure.
- Be cheap and easy to make (3D printable).

### Design

The grip is a **split sleeve** that snaps around the insertion tube. A **stepped slit** lets it open to slide onto the scope and then lock closed. Small tabs at the base help with alignment and removal. The larger outer diameter gives the endoscopist more leverage, so the scope turns with a lighter grip.

{% include media.html src="/assets/images/projects/endogrip/cad_of_tool.png" class="small" caption="SolidWorks model of the grip tool that clamps around the colonoscope shaft." %}

<!-- VERIFY: how the slit/locking geometry works, and the materials used -->

### Tribology

A grip only helps if it doesn't slip on a lubricated tube. I researched **tribology**, the science of friction, wear, and lubrication, to understand how the inner surface of the tool interacts with the scope's coating. I then used what I learned on contact materials and surface textures to maximize torque transfer without damaging the scope.

<!-- ADD: what materials/textures you compared and what worked -->

## Portable test rig

Whether a tool "helps" is a quantitative question, so I designed and assembled a **portable testing rig** for the advanced colonoscopy simulator at UCSD's **Center for Surgery of the Future**.

- An **aluminum-extrusion frame** holds the colonoscope shaft in a realistic orientation and clamps to a table, so it's easy to move between rooms.
- An inline **torque sensor** at the base of the shaft measures exactly how much torque the user applies.
- **Wireless EMG sensors** on the forearm record muscle activation, a direct measure of how hard the user is working to produce that torque.
- Small **motion sensors** on the hand and wrist capture posture.
- An **Arduino** reads the torque sensor and logs it alongside the other streams.

{% include media.html src="/assets/images/projects/endogrip/testing_rig_web.jpg" class="small" caption="The portable rig in use: a torque sensor at the base of the colonoscope shaft, with wireless EMG and motion sensors on the operator's forearm and hand." %}

The key metric is **torque per unit of muscle activation**. If a tool lets users produce the same torque with less EMG activity, it's reducing strain.

<!-- ADD: study protocol and results if available -->

## What I took away

This was my first research project, and it taught me that a good design claim needs a **measurement behind it**. Building the rig took as much engineering as the tool did.
