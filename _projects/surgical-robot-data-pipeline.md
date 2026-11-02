---
title: Surgical Robot Control & Data Pipeline
summary: Micro-ROS actuation and a VM-based TCP–ROS bridge that time-syncs load cells, 6-axis force sensors, and EM position tracking.
org: UCSD Morimoto Robotics Lab
role: Undergraduate Researcher
period: 2025 – Present
tags: [Controls, Embedded, Medical Robotics]
featured: false
status: complete           # complete | prototype | design | concept
order: 2
tools: [ROS 2, micro-ROS, C++, Python, TCP sockets, Virtual machines, Load cells, 6-axis F/T sensing, EM tracking]
# image: /assets/images/projects/data-pipeline.jpg
---

## The problem

Characterizing a surgical instrument means answering questions like: *when the distal tendon is pulled with this much force, where does the tip end up, and how hard does it push on tissue?* Each of those numbers comes from a different sensor:

| Sensor | Measures | Challenge |
| --- | --- | --- |
| Inline load cells | Tendon tension | Read by the embedded motor controller |
| 6-axis load sensor | Tip/tissue forces and torques | Separate DAQ with its own clock |
| Electromagnetic (EM) tracker | 3D tip position & orientation | Vendor software that doesn't speak ROS |

If these streams aren't on a common clock, you can't line up force with position, and the data is useless for modeling.

<!-- VERIFY: interfaces for each sensor in the table above -->

## Architecture

I built a pipeline that brings everything into **ROS 2** with consistent timestamps:

```
 Tendon motors ◄──┐
 Load cells ──────┤ MCU running micro-ROS ──(serial/UDP)──► micro-ROS agent ─┐
                  │                                                           │
 6-axis sensor ───────────────────────────────────────► ROS 2 driver node ───┼──► ROS 2 topics ──► rosbag / analysis
                                                                              │
 EM tracker ──► vendor software (VM) ──► TCP bridge ──────────────────────────┘
```

### micro-ROS actuation

The tendon motors and load cells run on a microcontroller using **micro-ROS**, which puts a ROS 2 node directly on the embedded device. Motor commands come in as ROS topics, and load-cell readings are published back with timestamps from the same ROS time base as the rest of the system. That removed the need for a custom serial protocol.

### The VM-based TCP–ROS bridge

The EM tracker's software didn't run natively alongside ROS. I set it up in a **virtual machine** and wrote a **TCP bridge**: a small server on the VM streams pose samples over a socket, and a ROS node on the host receives them, stamps them, and republishes them as standard ROS messages. Every sensor ends up on the same topic graph, recordable in a single bag file.

<!-- VERIFY: which OS ran in the VM, and which side was server vs. client -->

## Time synchronization

High-frequency data is only useful if samples line up. The pipeline:

- stamps every sample against a **single ROS clock** as close to acquisition as possible,
- keeps each sensor at its **native rate** instead of downsampling at the source,
- and aligns streams **after the fact** by timestamp, so analysis can interpolate force at the exact moment of each position sample.

<!-- ADD: sample rates and measured latency/jitter if you have them -->

## Results

- One command launches the full system and records every sensor into one time-aligned dataset.
- The data feeds directly into instrument characterization and the [traction-assisted polypectomy paper]({{ '/projects/nitinol-wristed-instruments/' | relative_url }}).
- New sensors can be added by writing a single ROS node rather than reworking the whole stack.

## What I took away

Mechanical engineers tend to treat data collection as an afterthought. Building this pipeline showed me that **the quality of an experiment is capped by the quality of its data infrastructure**. Putting time into synchronization up front saved weeks of alignment work later.
