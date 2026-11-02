---
title: Open-Source Running Blade
summary: A low-cost, open-source running prosthesis that makes para-athletic sport easier to get into.
org: TOM at UCSD × JSOE
role: Founder / Designer
period: 2024 – 2025
tags: [Assistive Tech, Mechanical Design]
featured: false
status: prototype           # complete | prototype | design | concept
order: 6
image: /assets/images/projects/running_blade/bi-layer_blade.png
image_position: 50% 30%
tools: [CAD, FEA (Ansys Discovery), Composite layup, Open-source hardware]
---

## The problem

Running blades, the curved carbon-fiber prostheses used by amputee runners, store energy as the runner lands and return it at push-off. They're what make running possible for many amputees. They also commonly cost **thousands of dollars**, and insurance often treats them as "recreational" and won't cover them.

That price keeps many people, especially kids who are still growing, out of running and para-athletic sport. Through TOM, I worked with UCSD's **Jacobs School of Engineering (JSOE)** to design a **low-cost, open-source alternative**.

## How a running blade works

A blade is essentially a **curved leaf spring**. When the runner lands, the curve flattens and stores elastic energy. As the foot leaves the ground, the curve springs back and returns that energy. The design challenge is getting the **stiffness** right:

- **Too stiff:** a harsh ride with little energy return.
- **Too soft:** the blade bottoms out and feels unstable.
- **Ideal stiffness** depends on the runner's weight and speed, so a good design has to be **tunable**.

## Design

{% include media.html src="/assets/images/projects/running_blade/bi-layer_blade.png" class="small" caption="CAD of the bi-layer blade. The inserts (orange) stiffen the spring section." %}

The blade uses a **bi-layer construction**:

- A continuous **outer shell** runs the full length and provides the main spring.
- **Stiffening inserts** (orange) sit along the curved section. Changing their size, count, or material tunes stiffness for each runner without redesigning the whole blade.
- A **four-bolt mounting tab** at the top attaches the blade to a standard socket adapter.
- A flat **toe pad** at the bottom gives a consistent contact surface for traction.

<!-- VERIFY: materials of each layer, what the inserts actually are, mounting standard -->

## Analysis

I modeled the blade's loading at landing and push-off to estimate peak stress and deflection, and sized the layers so the blade flexes enough to return energy while keeping stress safely below the material's limits.

<!-- VERIFY / ADD: actual FEA setup, loads used, results -->

## Status & next steps

The design is at the **prototype** stage. Next steps:

1. Fabricate prototypes and run mechanical tests to measure stiffness.
2. Fit trials with runners.
3. Publish the CAD files and build instructions as **open source**, so anyone can make and adapt one.

## Why it matters

Lowering the cost of a running blade from thousands of dollars to the cost of materials means more independence for amputee athletes, and a much lower **barrier to entry** for para-athletic sports.
