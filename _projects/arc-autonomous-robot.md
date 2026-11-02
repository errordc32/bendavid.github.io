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
tools: [CAD, Capstan drives, Sheet-metal design, Nvidia Jetson, CUDA, Computer vision, Mecanum drive]
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

## The challenge

Triton Robotics is UCSD's team for the **ARC robotics contest**, where robots compete head to head by detecting opponents and launching projectiles at their armor panels. Our **sentry** robot runs **fully autonomously**: no driver, no remote aiming. It has to find targets, move, and hit them on its own.

That puts heavy demands on the mechanical system. Vision and ballistics are only as accurate as the turret holding the launcher, and a robot that's too big is slow and easy to hit.

## Where the previous robot fell short

| Issue | Effect |
| --- | --- |
| Large overall volume | Slower, harder to maneuver, bigger target |
| Gear backlash in the turret | Play between command and actual aim, so shots scattered even with perfect vision |
| Tightly coupled subsystems | Hard to service or swap parts between matches |

<!-- VERIFY: are these the actual pain points? -->

## Redesign

### Smaller and faster

I stripped the previous iteration back to what it needed and repackaged the subsystems around the turret. The result was **28% less volume**, a lighter robot with a lower center of gravity, and faster movement. The chassis uses **truss-cut aluminum plates**, which remove material where it isn't carrying load while keeping the structure stiff.

### Zero-backlash capstan actuators

Gears always have some clearance between teeth, and every time the turret reverses direction, that clearance shows up as aiming error. I replaced the gear stages with **capstan drives**: a cable wrapped around a small drum drives a larger sector. A capstan has:

- **no backlash**, because the cable is always in tension,
- **high stiffness and smooth motion** with no tooth-mesh vibration,
- **backdrivability**, which helps the control loop.

That gave the turret clean, repeatable motion, so the autonomy stack's aim commands actually translated into where the launcher pointed.

{% include media.html src="/assets/images/projects/Triton_robotics/pitch_assmb.png" caption="CAD of the turret's pitch assembly: a truss-cut side plate driving the launcher module, mounted on the yaw ring." %}

### Modular layout

The robot is split into **swappable modules**: drive base, turret, launcher, and electronics enclosure. Each one can be pulled and serviced without taking apart the rest of the robot, which matters during a competition weekend.

## Autonomy

I used an **Nvidia Jetson** with **CUDA** to run the full control scheme on board:

- **Autonomous targeting:** a camera feed is processed on the GPU to detect and track opponent armor in real time.
- **Real-time projectile calculations:** the system computes the aim offset each shot needs from target distance and projectile speed, so it leads moving targets and compensates for drop.
- **Task-based repositioning:** the robot switches between behaviors and moves itself to better positions on the field based on game state.

<!-- VERIFY / ADD: detection approach (classical CV vs. neural net), frame rate, how ballistics were modeled -->

## Results

- **3rd place trophy at ARC Nationals.**
- 28% smaller, faster, and with zero-backlash aiming.
- A modular platform the team can keep building on in later seasons.

## What I took away

Autonomy is a whole-system problem. The best perception code can't make up for a turret with slop in it. **Fixing the mechanics was the biggest accuracy improvement for the software.**
