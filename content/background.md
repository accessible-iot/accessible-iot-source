---
title: "Background"
---

## Introduction: The Accessibility Gap in IoT

Inclusive Design and Accessibility are foundational concepts emphasized in nearly all 17 of the United Nations' Sustainable Development Goals. As the Internet of Things rapidly expands into all aspects of daily life—from smart homes and wearable health monitors to connected transportation and public infrastructure—its potential to advance social good depends critically on accessibility for differently-abled users. People who do not fit the notion of an "average user" (including those with disabilities or who are neurodiverse) stand to benefit immensely from IoT technologies. Mainstream home automation products and services, for example, could substantially improve the quality and reduce the cost of custom-made solutions for ambient assisted living, a field of accessibility research and development spanning decades.

However, when accessibility considerations are overlooked in IoT design, these same technologies risk further excluding people with different abilities. A touchscreen interface controlling an air conditioner or a smartphone app for home automation may be significantly less accessible than traditional physical controls if they fail to follow accessibility guidelines. Accessibility considerations span multiple dimensions: user interface design, communication protocols and APIs, and the subjective user experience itself.

This project addresses these challenges through the development of Open Accessibility Assessment Toolkits for Inclusive IoT Design. Our vision is to provide foundational tools for evaluating diverse IoT services in terms of user-perceived accessibility, enabling dynamic, in-situ system reconfiguration based on users' implicit feedback captured through on-body sensing technologies.

## Research Motivation

### Why Traditional Accessibility Methods Fall Short

Traditional accessibility evaluation approaches face three fundamental limitations when applied to IoT ecosystems:

**Static Assessment**: Conventional methods typically evaluate accessibility at a single point in time, failing to account for users' changing needs, contexts, and capabilities throughout the day or across different situations.

**Reactive Design**: Problems are usually identified after systems are built and deployed, making remediation costly and often incomplete. This after-the-fact approach misses opportunities to embed accessibility from the earliest design stages.

**Single-Device Focus**: Most evaluation frameworks examine individual devices in isolation rather than the interconnected, context-aware IoT ecosystems that users actually encounter in daily life.

### Our Approach: Dynamic, In-Situ Assessment

Our research explores approaches to address these limitations through two interconnected strategies:

1. **Real-time Physiological Sensing**: We use wearable sensors and smart eyewear to capture objective indicators of user experience—including physiological signals (heart rate, electrodermal activity, eye movements, muscle activity), cognitive and emotional states, and environmental context—as users interact with IoT devices in authentic settings.

2. **Adaptive System Reconfiguration**: The assessment toolkit enables IoT systems to dynamically adjust their interfaces, modalities, and behaviors based on implicit feedback from physiological sensing, creating truly responsive environments tailored to individual users' accessibility needs.

This approach transforms accessibility assessment from a static, post-hoc evaluation into an ongoing, adaptive process embedded in the fabric of IoT interactions.

These approaches are complementary but represent different stages of validation: physiological sensing methods have been technically validated in specific contexts, while their generalizability to diverse accessibility assessment scenarios remains an active research question.

## Accessibility Framework

This research draws on multiple accessibility models and frameworks:

**Social Model of Disability**: We recognize that accessibility barriers arise from the interaction between individuals and their environments, not solely from individual impairments. Our dual-approach addresses both user-centered sensing (helping individuals navigate barriers) and designer-centered education (removing barriers at the design stage).

**Universal Design Principles**: While our prototypes focus on specific contexts (visual accessibility, stress management), they embody universal design thinking—creating systems that benefit diverse users through flexible, perceptible, and intuitive design.

**Participatory Design**: We emphasize co-design with disabled communities throughout the research process, though the extent of participation varies across projects (acknowledged in individual project descriptions).

**Research Questions vs. Validated Findings**: A foundational question guiding this work is: *Can physiological sensing reliably indicate accessibility barriers in IoT contexts?* While our prototypes demonstrate technical feasibility and suggest potential applications, validating this core premise requires ongoing research with diverse user populations and IoT systems.

## Research Approaches: Dual-Approach Framework

Our research follows two complementary approaches that together create a comprehensive ecosystem for accessible IoT design:

### Approach 1: Helping Users Through Physiological Sensing and Adaptive Feedback

The first approach focuses on detecting stressful or challenging situations through unobtrusive physiological sensing and providing technologies for stress relief and emotion regulation. This user-centered work enables real-time assessment of accessibility barriers as they occur in authentic contexts.

#### Integration into Everyday Devices

We explore how physiological sensing can be seamlessly integrated into objects people already use in daily life, making assessment both unobtrusive and ecologically valid.

**Affective Umbrella (2021-2023)**: Our initial explorations integrated galvanic skin response (GSR) electrodes and photoplethysmography (PPG) heart rate sensors directly into an umbrella handle. The system captures physiological data as users naturally grasp the umbrella, with no additional instrumentation required. Real-time visualization through RGB LEDs embedded in the umbrella provides immediate bio-feedback, with light intensity reflecting heart activity and color variations mapping to electrodermal activity patterns.

In a 21-person real-world study conducted during rainy weather at night, we evaluated two bio-feedback patterns: a mirror effect (directly reflecting physiological state) and an inversion effect (designed to regulate emotions through counter-stimulation). Statistical analysis demonstrated the system's potential for emotion regulation through somaesthetic appreciation—fostering awareness and appreciation of one's own bodily states. The mirror effect produced significantly higher emotional arousal (p=.0022) compared to baseline, while both patterns showed measurably different impacts on physiological indicators such as RMSSD and pNN50. This work established that physiological sensing can be successfully integrated into everyday objects while maintaining data quality comparable to traditional finger-based measurements, opening new possibilities for context-aware accessibility assessment.

**Limitations**: This study demonstrates bio-feedback's potential for emotion regulation but does not directly validate the umbrella as an accessibility assessment tool. The 21-person sample was a convenience sample (demographics not reported), and the study was conducted in specific weather conditions (rainy, nighttime). Whether these findings generalize to other contexts, user populations, or types of accessibility barriers requires further research.

#### Stress Relief Technologies

Building on our sensing capabilities, we developed interventions to help users manage stress and promote well-being through adaptive feedback.

**MindSpace (2025)**: This pneumatically-controlled haptic device simulates gentle, life-like breathing movements that provide deep touch pressure sensations on the user's upper chest area. Designed as a "focusing agent" for short relaxation breaks in work environments, MindSpace aims to enhance mental clarity and reduce stress levels without requiring extended time commitments.

Our initial prototype study with 18 participants employed a within-subjects design comparing performance with and without MindSpace during short break periods. Initial findings suggest MindSpace is associated with increased self-reported relaxation, environmental awareness, and work responsiveness following breaks. The findings suggest that regular short breaks augmented with tactile aids like MindSpace may positively impact overall well-being and productivity, offering a practical intervention for stress management in everyday contexts.

**Limitations**: This preliminary study (n=18) used within-subjects design without apparent blinding or comparison to other relaxation interventions (e.g., simply resting without the device). Participant characteristics were not reported. Further controlled studies are needed to isolate the device's specific contribution to relaxation and assess its effectiveness across diverse user populations and work contexts.

#### Extension to Earable Form Factor

To democratize access to wearable physiological sensing and expand the range of measurable signals, we extended our toolkit to an earable platform.

**OpenEarable ExG (2024)**: We developed the first open-source hardware platform specifically designed for ear-based biopotential sensing. The system employs a high-resolution 24-bit analog-to-digital converter with 130 dB noise rejection at power line frequencies, achieving a minimum detectable voltage difference of approximately 4 nanovolts between electrodes. This technical capability enables measurement of electroencephalography (EEG), electromyography (EMG), and electrooculography (EOG) signals through electrodes embedded within standard earphone form factors.

A technical demonstration with three participants successfully showed signal detection capability: detection of alpha-band brain activity during eyes-closed states, jaw clenching via masseter muscle signals, and smooth pursuit eye movements. Released under the MIT license following Open Source Hardware Association best practices, OpenEarable ExG lowers barriers for researchers and developers working on accessible wearable technologies, directly contributing to our toolkit's mission of promoting inclusive IoT design.

**Development Stage**: This work represents technical validation—demonstrating that ear-based electrodes can detect biopotential signals—not application validation. The accessibility applications listed (eye-gaze interfaces, cognitive monitoring, stress detection) are theoretically possible but would require substantial additional research including: co-design with target disability communities, iterative development, comparative evaluation against existing solutions, and validation studies with users who have motor impairments, cognitive differences, or stress-related conditions.

### Approach 2: Supporting Designers Through Simulation and Awareness

The second approach provides simulation tools and experiential learning opportunities that help designers, developers, and students understand the experiences of people with different abilities. This empathy-building work aims to embed accessibility considerations from the earliest stages of the design process.

#### Visual Impairment Simulation

As populations age, visual impairments become increasingly prevalent, yet designers often lack firsthand experience with these challenges. Traditional simulation methods using analog filters or virtual reality suffer from limitations including restricted fields of view, vergence-accommodation conflict (causing discomfort), and inability to use them on-the-go during design activities.

**Seeing Our Blind Spots (2022)**: We developed optical see-through smart glasses that enable dynamic, on-the-go visual impairment simulation without the limitations of previous approaches. The system provides approximately 160 degrees horizontal and 140 degrees vertical field of view—much wider than VR headsets and closer to natural human vision. Users can experience both central vision loss and peripheral vision loss at variable severities (moderate to severe), with real-time adjustable parameters.

Our evaluation with 14 participants, including design students, demonstrated that the glasses significantly and effectively reduce visual acuity and visual field without causing typical motion sickness symptoms such as headaches or visual fatigue—a common problem with VR-based simulation. Questionnaire responses and qualitative feedback showed how the glasses helped increase participants' awareness of visual impairment challenges. By enabling designers to experience visual accessibility barriers while engaging in everyday activities (walking through campus, navigating buildings, examining design materials), the tool fosters embodied understanding that informs more inclusive design decisions. This work was published at ACM UIST 2022, a top-tier venue for user interface research.

**Critical Perspectives on Disability Simulation**: Disability studies scholars have raised important concerns about simulation as a pedagogical approach, noting risks of reinforcing deficit perspectives or promoting patronizing attitudes. Our simulation glasses were used within structured educational contexts that emphasized: (1) the distinction between temporary simulation and lived disability experience, (2) environmental and social barriers as primary accessibility challenges (not individual impairments), and (3) co-design with disabled communities as essential to inclusive design. The evaluation measured awareness changes, but measuring whether simulation actually improves design outcomes in practice remains an important direction for future research.

#### Community Outreach and Co-Design

Beyond technological tools, we established partnerships with communities experiencing specific accessibility needs to ground our research in authentic user requirements and lived experiences.

**Partnership with Visually Impaired Runners (2022-2024)**: We established positive relationships with volunteering organizations supporting leisure sporting activities for visually impaired individuals. Through ethnographic observations of outdoor jogging activities, we identified opportunities for sensing technologies and IoT devices to detect stressful and potentially risky situations while supporting better embodied communication strategies between blind runners and their sighted guides.

Our research examined how visually impaired people and guides communicate during running and how technology might support this interdependent collaboration. Video and interview analysis of six pairs of runners and guides revealed that guided running is a deeply collaborative act mediated by interdependent multi-layered communication featuring both vocal and corporeal exchanges. We identified three key concepts shaping this communication: directionality (who initiates and responds), synchrony (coordination of movements and physiological states), and silence (the sophisticated use of non-verbal communication).

The study also included exploratory measurements of physiological synchrony between pairs with different experience levels, revealing patterns in how practiced teams coordinate their bodily states. We presented potential avenues for technology to support this mixed-ability collaborative relationship for training purposes, in-situ augmentation during runs, and post-run reflection. This work was published at CHI 2024, demonstrating the value of community-engaged research for understanding authentic accessibility needs in IoT contexts.

## Methodological Approach

Our research methodology integrates multiple complementary strategies:

**Co-Design with Disabled Communities**: Rather than designing for users, we design with them, engaging people with diverse abilities as full partners throughout the research process. This approach ensures that our tools address genuine needs and respect the expertise of disabled communities regarding their own experiences.

**Real-World Deployments and Evaluations**: We prioritize evaluations in authentic contexts—rainy weather for the Affective Umbrella, actual jogging routes for the runners study, real work environments for MindSpace—rather than controlled laboratory settings. This ecological validity ensures our findings transfer to the messy realities of daily life.

**Open-Source Philosophy**: We release both hardware designs and software implementations under open licenses (MIT, OSHWA-certified) to lower barriers for researchers, developers, and communities who wish to build upon or adapt our work. This commitment to openness accelerates collective progress toward accessible IoT.

**Somaesthetic Design Principles**: We embrace somaesthetic approaches that value and enhance embodied awareness—how people perceive, interpret, and appreciate their own bodily states and experiences. This philosophical foundation informs our bio-feedback systems and simulation tools.

**Interdisciplinary Collaboration**: Our work spans human-computer interaction, wearable computing, accessibility research, physiological sensing, haptics, and art. This breadth enables holistic solutions that address technical, experiential, and social dimensions of accessibility.

## Research Scope and Limitations

**Sample Limitations**: Studies involved convenience samples (primarily students and volunteers) with sample sizes ranging from n=3 to n=21. Participant demographics, disability status, and representativeness were not systematically reported, limiting generalizability.

**Validation Stages**: Projects represent different validation stages—from technical demonstrations (OpenEarable signal detection) to behavioral interventions (MindSpace relaxation) to educational tools (visual impairment glasses). We distinguish these stages explicitly to avoid overstating claims.

**Focus Areas**: This research concentrated on visual accessibility and stress-related barriers. Findings may not generalize to other disability types (hearing, cognitive, motor) or accessibility challenges without additional research tailored to those contexts.

**Comparative Evaluation**: Most prototypes were evaluated in isolation without systematic comparison to existing accessibility assessment tools or alternative interventions. Establishing comparative effectiveness remains important future work.

**Long-term Adoption**: While prototypes were deployed in authentic contexts, long-term adoption, maintenance, and impact beyond initial studies were not systematically evaluated. Open-source releases enable broader use, but adoption barriers (technical expertise, fabrication resources, ongoing support) may limit practical accessibility.

## Impact and Outcomes

Through this five-year project (2021-2025), we have achieved substantial research impact across multiple dimensions:

**Scholarly Contributions**: We published 30 papers in top-tier international venues including ACM CHI (Human Factors in Computing Systems), UIST (User Interface Software and Technology), UbiComp (Ubiquitous Computing), ETRA (Eye Tracking Research and Applications), and Augmented Humans. These publications have accumulated over 40 citations according to Google Scholar, demonstrating the influence of our work on the broader research community.

**Open-Source Platforms**: We released two major open-source platforms—the Affective Umbrella sensing system and OpenEarable ExG—with complete hardware designs, firmware, and documentation. These resources enable other researchers and developers to build upon our work without replicating foundational infrastructure.

**Community Building**: We co-organized two prestigious Dagstuhl Seminars focused on cognitive augmentation and four international workshops at major conferences (Augmented Humans 2023-2025, IoT 2023, MobileHCI 2024-2025) focusing on mobile cognitive augmentation (mobiCHAI series). These events brought together leading researchers including keynote speakers Prof. Paul Lukowicz (Artificial Intelligence, DFKI) and Prof. Thad Starner (Accessibility, Georgia Tech).

**Real-World Deployments**: Our prototypes have been deployed in authentic contexts: sports activities with visually impaired runners, work environments for stress management, and educational settings for accessibility awareness. These deployments demonstrate the practical applicability of our research beyond academic contributions.

## Future Directions

As the grant period concludes in 2025, several promising directions emerge for extending and expanding this work:

**Broader User Groups**: While we focused initially on visual impairments and stress-related accessibility challenges, future research could extend the toolkit to accommodate a wider range of physical, sensory, and cognitive impairments. This includes designing interfaces for neurodiverse individuals, adapting to different sensory capabilities (hearing, touch), and developing accessibility solutions for outdoor and public spaces.

**Expanded Contexts**: Extending our approach to additional scenarios—workplace settings, public transportation systems, healthcare environments—would make the toolkit relevant across a broader spectrum of daily activities and increase its real-world impact.

**Immersive Simulation Environments**: Future iterations could integrate virtual and augmented reality to create fully immersive environments where designers experience firsthand the challenges faced by individuals with different impairments. By simulating scenarios such as navigating a smart home with visual or motor impairments, developers can gain deeper understanding of accessibility barriers and the critical importance of inclusive design practices.

**Adaptive IoT Architectures**: Building on our current toolkit, the next step involves creating adaptive IoT architectures that utilize real-time data from wearable sensors to dynamically adjust environments. For example, smart home systems could automatically adapt lighting, temperature, and sound settings based on physiological and behavioral data to accommodate users' changing comfort and accessibility needs. The system could also provide personalized interaction modalities—voice control, gesture recognition, haptic feedback—tailored to individual requirements.

**Continuous User Feedback Mechanisms**: Implementing ongoing feedback collection within the toolkit will enable iterative assessment and refinement. By collecting data on user interactions and experiences with various IoT systems, designers can identify areas for improvement and adapt solutions in real time. This continuous improvement cycle will keep the toolkit responsive to evolving user needs and technological advancements.

**Integration with IoT Standards**: As accessibility standards for IoT continue to develop, integrating our assessment methodologies with emerging industry standards will increase adoption and ensure our approaches inform mainstream design practices.

These future directions aim to transform our toolkit into a comprehensive, adaptive, and user-centered solution for accessible IoT design, ultimately contributing to more inclusive digital environments and communities worldwide.

## Funding and Team

This research is supported by JST Presto Grant JPMJPR2132 (2021-2025), focusing on "Open Accessibility Assessment Toolkits for Inclusive IoT Design."

**Principal Investigator**: Prof. Kai Kunze
**Institution**: Graduate School of Media Design, Keio University
**Grant Period**: 2021-2025

The project involves international collaborations with researchers and community partners across multiple institutions and countries, reflecting the global nature of accessibility challenges and solutions.
