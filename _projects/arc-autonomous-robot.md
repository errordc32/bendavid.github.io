---
title: Autonomous Competition Robot
summary: A modular, fully autonomous robot for the ARC robotics contest that is 28% smaller, has zero-backlash capstan drives, and runs Jetson-powered targeting.
org: Triton Robotics
role: Mechanical Design Engineer
period: 2023 – 2025
tags: [Autonomy, Mechanical Design, Controls]
featured: true
status: complete           # complete | prototype | design | concept
order: 4
image: /assets/images/projects/Triton_robotics/sentry_gif.gif   # GIFs work anywhere an image does
cover: /assets/images/projects/Triton_robotics/sentry_gif.gif
gallery:
  - src: /assets/images/projects/Triton_robotics/sentry_irl.jpg
    caption: The sentry on its mecanum base, with the stereo camera and launcher on the turret.
  - src: /assets/images/projects/Triton_robotics/sentry_irl2.jpg
    caption: Rear view showing the truss-cut pitch plates, electronics enclosure, and suspension.
stats:
  - value: "−28%"
    label: Robot volume
  - value: Zero
    label: Backlash with capstan actuators
  - value: 3rd
    label: ARC Nationals
---

## Overview

Triton Robotics competes in the ARC robotics contest, where autonomous robots aim and fire projectiles. I redesigned and fabricated the team's modular robot system.

## What I did

- **Stripped down the previous iteration**, reducing volume by **28%** and increasing speed.
- **Eliminated backlash** by replacing the drives with **capstan-based actuators**.
- Used an **Nvidia Jetson** and **CUDA** to fully automate the control scheme, giving the robot autonomous targeting, task-based repositioning, and real-time projectile calculations.

{% include media.html src="/assets/images/projects/Triton_robotics/pitch_assmb.png" caption="CAD of the turret's pitch assembly: a truss-cut side plate driving the launcher module, mounted on the yaw ring." %}

## Outcome

The team took home a **3rd place trophy at ARC Nationals**.
