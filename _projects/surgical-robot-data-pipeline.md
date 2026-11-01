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
# image: /assets/images/projects/data-pipeline.jpg
---

## Overview

To evaluate the surgical instruments, the lab needs force and position data from several sensors on one shared clock. I built the control and data-acquisition layer that provides it.

## What I did

- Implemented **micro-ROS** on the embedded controllers to actuate the robot.
- Programmed a **virtual-machine-based TCP–ROS bridge** that streams high-frequency data into ROS.
- Time-synchronized data from **inline load cells**, **6-axis load sensors**, and **electromagnetic (EM) position tracking**.

## Outcome

Experiments now produce synchronized force and position data that can be used directly for instrument characterization and the upcoming publication.
