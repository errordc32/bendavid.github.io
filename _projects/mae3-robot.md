---
title: MAE 3 Competition Robot
summary: A gear-driven collection robot with a hopper and pivoting arm, taken from Fusion 360 CAD to a laser-cut, bolted-together build for UCSD's MAE 3 design competition.
org: UCSD MAE 3 · Intro to Engineering Design
role: Mechanical Design Lead
period: 2023
tags: [Mechanical Design, Manufacturing]
featured: false
status: complete           # complete | prototype | design | concept
order: 9
image: /assets/images/projects/MAE3-robot/mae3-robot-irl.png
tools: [Fusion 360, Laser cutting, Gear trains, Arduino, Rapid prototyping]
---

## The challenge

**MAE 3** is UCSD's introductory engineering design course. Small teams design, build, and compete with a mobile robot in a quarter-long project. Our robot had to **collect game pieces, hold them, and deliver them** to a scoring zone within a timed match.

<!-- VERIFY / ADD: the actual game rules and scoring -->

## Design

{% include media.html src="/assets/images/projects/MAE3-robot/mae3-robot.png" class="small" caption="Full CAD assembly in Fusion 360." %}

### Chassis

A **gusseted box chassis** of laser-cut panels joined with fasteners and standoffs. The cross-bracing keeps it stiff without adding much weight. Every panel can be recut and swapped in minutes, which mattered as the design changed between tests.

### Drivetrain

- **Spur-gear reduction** on the drive motors trades speed for torque, so the robot can push through contact and carry a full hopper.
- **Omni wheels at the front** let the robot pivot tightly, while the geared drive wheels at the back provide traction.

### Hopper & arm

- A large **flared hopper** on top collects and holds game pieces. Its angled walls funnel them toward the center.
- A **pivoting arm** with linkage plates loads pieces into the hopper and delivers them to the scoring zone.

<!-- VERIFY: how the arm was actuated and how pieces were collected/released -->

## Build & iteration

We went from CAD to a **laser-cut, bolted-together build**, then tested and adjusted:

1. First assembly to check fit and gear mesh.
2. Drive testing to tune the gear ratio and wheel layout.
3. Arm and hopper testing with real game pieces.
4. Final refinements before competition.

{% include media.html src="/assets/images/projects/MAE3-robot/mae3-robot-irl.png" class="small" caption="The finished robot." %}

## Outcome

The robot went from CAD to a working competition build in one quarter.

<!-- ADD: competition result -->

## What I took away

MAE 3 was my first complete **design → fabricate → test** loop. It taught me to design for the manufacturing process I actually had access to, and to leave room in the design for changes after the first test.
