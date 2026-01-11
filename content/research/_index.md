---
title: "Research Outcomes"
---

This page presents the major prototypes and systems developed through our dual-approach research framework for accessible IoT. Each system addresses specific accessibility challenges through novel technical solutions, community partnerships, or empathy-building tools. Our work demonstrates how physiological sensing, adaptive feedback, and experiential simulation can create more inclusive IoT environments.

## Approach 1: Helping Users

### Affective Umbrella: Physiological Sensing in Everyday Objects

**Problem**: How can we unobtrusively capture physiological data in daily life to assess accessibility challenges as they occur in authentic contexts?

Traditional physiological sensing requires dedicated wearables or laboratory equipment that alter natural behaviors. Users must remember to wear specialized devices, maintain them, and accept their social visibility. This instrumentation burden limits ecological validity—the extent to which findings reflect real-world conditions. For accessibility assessment, we need sensing approaches that integrate seamlessly into objects people already use, capturing data during authentic interactions without imposing additional cognitive or social burdens.

**Solution**: Sensors integrated into umbrella handle with real-time bio-feedback visualization

We developed the Affective Umbrella system by embedding galvanic skin response (GSR) electrodes and photoplethysmography (PPG) heart rate sensors directly into an umbrella handle. The sensing occurs naturally as users grasp the umbrella—no additional action or awareness required. The handle design ensures consistent electrode contact while maintaining the ergonomics and weight distribution of a conventional umbrella.

The system provides immediate visual feedback through RGB LEDs embedded along the umbrella's shaft. Light intensity reflects heart activity variations, while color gradients map to electrodermal activity patterns (the number of GSR peaks influences color transitions). We implemented two bio-feedback patterns: a *mirror effect* that directly reflects the user's physiological state, and an *inversion effect* designed to promote emotion regulation through counter-stimulation (calming feedback when arousal is high, energizing feedback when arousal is low).

This design enables *somaesthetic appreciation*—the conscious attention to and valuation of one's own bodily states and sensations. By making internal physiological processes visible and aesthetically engaging, the system promotes embodied awareness that can support emotion regulation and stress management.

**Impact**: Validated through real-world deployment and open dataset

We conducted a 21-person field study in actual use conditions: rainy weather at night, when umbrellas are naturally used. Participants experienced both bio-feedback patterns while walking outdoors. Statistical analysis using Self-Assessment Manikin (SAM) scales and physiological measures yielded several significant findings:

- The mirror effect produced significantly higher emotional arousal compared to baseline (p=.0022)
- Participants showed significantly lower feelings of dominance/control with bio-feedback (p=.0277), suggesting increased receptivity to bodily states
- Physiological arousal (measured via pNN50) increased significantly with bio-feedback (p<.0001)
- The mirror effect produced significantly higher arousal than the inversion effect (p=.0277)
- RMSSD (a heart rate variability measure) showed significant differences between feedback patterns (p<.0001)

Critically, our validation study comparing umbrella handle measurements to traditional finger-based GSR demonstrated that the handle provides consistent, accurate physiological signals comparable to gold-standard measurement locations. This technical validation opens possibilities for integrating physiological sensing into a wide range of everyday objects.

We released the complete dataset of 21 participants' physiological data, enabling other researchers to explore bio-feedback approaches without replicating our data collection infrastructure. This work has been published at MUM 2021 and Augmented Humans 2023, establishing foundations for context-aware accessibility assessment through everyday objects.

**Publications**: chen2021affective (MUM 2021), chen2023affective (Augmented Humans 2023)

---

### MindSpace: Haptic Stress Relief Device

**Problem**: How can we support relaxation breaks in work environments to manage stress-related accessibility challenges?

Stress and cognitive overload create temporary accessibility barriers that affect everyone but disproportionately impact people with anxiety disorders, attention differences, or chronic stress conditions. Traditional relaxation interventions—meditation, breathing exercises, long breaks—require time commitments and skill development that may not fit workplace contexts. We sought a "focusing agent" that could enhance short relaxation breaks (5-10 minutes) without extensive training or time investment, providing tangible stress relief that supports sustained productivity.

**Solution**: Pneumatic device simulating life-like breathing with deep touch pressure

MindSpace employs pneumatic actuation to simulate gentle, life-like breathing movements that provide deep touch pressure sensations on the user's upper chest area. The device cycles through inflation and deflation patterns that mimic human respiratory rhythms, creating a tactile sensation similar to feeling another person's breathing. This squeeze-like pressure activates deep touch receptors associated with calming responses in the nervous system.

The device is designed for portability and ease of use: users simply place it on their chest during short breaks, without need for complex setup, calibration, or learned techniques. The pneumatic system operates quietly to avoid disrupting coworkers in shared spaces. By providing a tangible focal point for attention, MindSpace helps users disengage from work-related thoughts and enter a more relaxed state.

The design draws on research demonstrating that deep pressure stimulation can reduce physiological arousal and increase feelings of security and calm. By simulating the experience of being close to another breathing person—a fundamental source of comfort across human development—the device leverages embodied associations between respiratory synchrony and social bonding.

**Impact**: Evidence for relaxation, awareness, and work responsiveness

Our initial prototype study with 18 participants employed a within-subjects experimental design. Each participant completed work tasks followed by short break periods, with and without MindSpace, in counterbalanced order. We measured subjective states through questionnaires and observed behavioral indicators of relaxation and attention.

The study provided initial evidence that MindSpace effectively:
- Induces relaxation during short breaks (significantly higher self-reported calm)
- Increases environmental awareness (participants noticed more details in their surroundings after MindSpace breaks)
- Improves work responsiveness (faster return to productive states following breaks)
- Requires no training period (effectiveness observed from first use)

Qualitative feedback revealed that participants particularly valued the device's simplicity—no apps to navigate, no settings to configure, no techniques to master. Several participants with high-stress roles expressed interest in using such a device regularly in their workplaces.

These findings suggest that regular short breaks augmented with tactile aids like MindSpace may positively impact overall well-being and productivity. The approach has particular relevance for accessibility: by providing non-pharmaceutical, non-invasive stress management, it could help workers with anxiety or stress-related challenges maintain comfort and performance throughout the workday.

**Publications**: kikuchi2025mindspace (Mensch und Computer 2025)

---

### OpenEarable ExG: Open-Source Ear-Based Sensing

**Problem**: How can we democratize access to wearable biopotential sensing for accessibility research and development?

While wearable physiological sensing holds tremendous promise for adaptive accessibility systems, existing research platforms are typically expensive proprietary systems or require extensive electronics expertise to build. This creates barriers for accessibility researchers, developers in resource-constrained settings, and community organizations who want to explore sensing-based interventions but lack funding or technical infrastructure. Additionally, most wearable sensing focuses on wrist or chest placement, missing opportunities for ear-based measurements that can capture unique signals while leveraging the widespread adoption of earphone form factors.

**Solution**: Open-source earable platform for EEG, EMG, and EOG sensing

We developed OpenEarable ExG as the first open-source hardware platform specifically designed for ear-based biopotential sensing. The system architecture includes:

- **High-resolution sensing**: 24-bit analog-to-digital converter with 130 dB noise rejection at power line frequencies (50/60 Hz), achieving minimum detectable voltage differences of approximately 4 nanovolts between electrodes
- **Multiple modalities**: Capable of measuring electroencephalography (EEG) for brain activity, electromyography (EMG) for muscle signals, and electrooculography (EOG) for eye movements
- **Custom electrodes**: 3D-printed in-ear plugs based on Dätwyler SoftPulse designs, with embedded electrodes positioned to capture biopotentials while maintaining comfort for extended wear
- **Accessible fabrication**: Complete bill of materials, PCB designs, 3D print files, and firmware released under MIT license
- **OSHWA certified**: Follows Open Source Hardware Association best practices for documentation, making designs reproducible by others

The earable form factor offers several advantages: electrodes positioned near the ear can detect brain activity, facial muscle movements, and eye movements simultaneously; earphones are socially acceptable to wear in many contexts where other sensors would be obtrusive; and leveraging existing earphone adoption patterns reduces barriers to user acceptance.

**Impact**: Validated capabilities with open designs enabling broader adoption

Our validation study with three participants successfully demonstrated three distinct sensing capabilities:

1. **EEG (brain activity)**: Detection of alpha-band oscillations (8-13 Hz) during eyes-closed rest states, indicating successful measurement of cortical activity from ear electrodes
2. **EMG (muscle activity)**: Clear detection of masseter (jaw) muscle clenching, useful for detecting stress, bruxism, or as an alternative input method for users with limited mobility
3. **EOG (eye movements)**: Successful tracking of smooth pursuit eye movements, enabling potential applications in eye-gaze interfaces without line-of-sight requirements

These validated capabilities have direct applications to accessibility:
- **Eye-gaze interfaces** for users with motor impairments who cannot operate traditional input devices
- **Cognitive state monitoring** to detect attention, drowsiness, or cognitive load, enabling adaptive systems that adjust difficulty or provide support
- **Stress detection** through combined analysis of multiple physiological indicators
- **Alternative input methods** through facial gestures or eye movements

By releasing complete hardware designs, firmware, and documentation under open licenses, OpenEarable ExG significantly lowers barriers for accessibility researchers and developers. The platform has been adopted by multiple research groups and contributes directly to our toolkit's mission of promoting inclusive IoT design through democratized access to sensing technologies.

**Publications**: lepold2024openarable (UbiComp 2024)

---

## Approach 2: Supporting Designers

### Seeing Our Blind Spots: Visual Impairment Simulation

**Problem**: How can design students experience visual impairment on-the-go to inform inclusive design decisions?

As populations age, visual impairments from conditions like macular degeneration, glaucoma, and diabetic retinopathy become increasingly common. Yet most designers, developers, and students lack firsthand experience with these challenges. This experiential gap leads to interfaces and systems that work well for those with full vision but create barriers for users with visual impairments.

Traditional simulation approaches face significant limitations. Analog methods (frosted glasses, pinhole viewers) provide static simulations that don't reflect eye movements or respond to gaze. Virtual reality systems suffer from limited fields of view (typically 90-110 degrees compared to ~180 degrees human vision), vergence-accommodation conflict that causes visual discomfort and fatigue, and bulky form factors that prevent use during everyday design activities. Designers need simulation tools they can wear while sketching, examining physical prototypes, navigating spaces, and engaging in other activities central to their work.

**Solution**: Optical see-through smart glasses with wide FOV and adjustable parameters

We developed optical see-through smart glasses that enable dynamic visual impairment simulation without previous limitations. Key technical features include:

- **Wide field of view**: Approximately 160 degrees horizontal and 140 degrees vertical—substantially wider than VR headsets and approaching natural human vision
- **Dual simulation modes**: Both central vision loss (simulating macular degeneration) and peripheral vision loss (simulating glaucoma or retinitis pigmentosa)
- **Variable severity**: Adjustable from moderate to severe impairment levels
- **Real-time adjustability**: Users or facilitators can modify parameters during use
- **VAC-free design**: Optical see-through eliminates vergence-accommodation conflict, preventing the headaches and visual fatigue common with VR simulation
- **Mobile form factor**: Lightweight, battery-powered design enables wearing during walking, reaching, examining objects, and other everyday activities

The system uses liquid crystal displays positioned in the optical path to selectively block or transmit light, creating simulated scotomas (blind spots) that move with the user's gaze—accurately reflecting how central and peripheral vision losses affect visual experience during eye movements.

**Impact**: Validated effectiveness with design students; published at top-tier venue

Our evaluation study with 14 participants, including design students, examined both physiological effects and educational outcomes:

**Physiological validation**:
- The glasses significantly reduced visual acuity (sharpness of vision)
- Visual field (extent of peripheral vision) was effectively reduced
- No participants experienced headaches or visual fatigue—common problems with VR simulation
- Minimal motion sickness symptoms despite dynamic visual changes during movement

**Educational outcomes**:
- Questionnaire responses showed significantly increased awareness of visual impairment challenges
- Qualitative feedback revealed specific insights: "I never realized how much I rely on peripheral vision to navigate doorways" and "Reading signage is completely different—I had to get much closer"
- Design students reported that the embodied experience changed their thinking about font sizes, contrast ratios, and spatial layouts
- Several participants requested extended loans of the glasses to wear during their design projects

The work was published at ACM UIST 2022, one of the most competitive venues for user interface research (acceptance rate typically 20-25%). This peer recognition validates both the technical contribution (novel simulation approach) and the practical impact (changing designer awareness).

By enabling designers to experience visual accessibility barriers while engaging in authentic design activities—examining mockups, navigating spaces they're redesigning, reviewing visual layouts—the tool fosters embodied understanding that abstract guidelines cannot provide. This experiential learning complements analytical accessibility evaluation, creating designers who intuitively consider visual accessibility because they've experienced the challenges firsthand.

**Publications**: zhang2022seeing (UIST 2022)

---

### Visually Impaired Runners: Community Co-Design

**Problem**: How can technology support guided running for visually impaired individuals while respecting their sophisticated communication practices?

Running and jogging offer significant physical and mental health benefits, with relatively low entry barriers compared to many sports. Many visually impaired individuals run with sighted guides using tethers or verbal communication. However, technology development for accessible running has focused primarily on independent running systems (GPS navigation, obstacle detection), overlooking the substantial population who prefer or require running with guides. This gap reflects a common pattern in accessibility technology: assuming independence as the primary goal rather than supporting interdependent collaboration between disabled and non-disabled partners.

To address this gap, we needed to understand the authentic communication practices, challenges, and opportunities in guided running before proposing technological interventions. This required establishing genuine partnerships with the visually impaired running community rather than designing for them from outside perspectives.

**Solution**: Ethnographic study and co-design yielding design recommendations

We established collaborative relationships with volunteering organizations supporting leisure sports for visually impaired individuals. Through this partnership, we:

- Conducted ethnographic observations of six pairs of visually impaired runners and sighted guides during actual jogging sessions on outdoor routes
- Recorded video from multiple angles capturing both verbal and bodily communication
- Conducted semi-structured interviews with runners and guides about their experiences, challenges, and strategies
- Performed interaction analysis examining micro-moments of communication and coordination
- Measured physiological signals (heart rate, electrodermal activity) to explore synchrony between partners

Our analysis revealed that guided running is a deeply collaborative act mediated by sophisticated interdependent communication featuring both vocal and corporeal (bodily) exchanges. We identified three key concepts:

**Directionality**: Communication flows bidirectionally, with runners often initiating exchanges to assert agency and guides responding supportively. This challenges assumptions that guides always lead.

**Synchrony**: Experienced pairs develop remarkable coordination—movement synchrony (matching stride patterns) and physiological synchrony (heart rate patterns that converge during runs). Our exploratory measurements showed stronger physiological coupling in experienced versus novice pairs.

**Silence**: Non-verbal communication through tether tension, breathing patterns, and body positioning conveys information continuously. Skilled pairs use sophisticated silent signals that outsiders might not recognize as communication at all.

**Impact**: Framework informing accessible sports technology; published at top-tier venue

Our research contributions include:

- **Conceptual framework**: Three layers of vocal communication (directive, contextual, recreational) distinguished from intentional and unintentional corporeal communication, providing vocabulary for discussing guided sports
- **Design recommendations**: Specific guidance for technology developers:
  - Support rather than replace existing communication practices
  - Design for interdependent collaboration, not independence
  - Provide tools for training/skill development (helping new pairs learn sophisticated communication)
  - Enable post-run reflection through physiological data visualization
  - Consider in-situ augmentation that enhances rather than disrupts embodied coordination
- **Methodological model**: Demonstration of how ethnographic observation combined with physiological measurement can inform accessible technology design
- **Community partnership**: Ongoing relationship enabling future co-design work grounded in authentic needs

The work was published at CHI 2024 (the premier venue for human-computer interaction research, with acceptance rate typically 23-26%). This publication demonstrates the value of community-engaged research for understanding authentic accessibility needs in IoT contexts.

Rather than immediately building technology, we invested time in understanding existing practices, challenges, and opportunities. This approach—starting with deep ethnographic understanding before proposing solutions—exemplifies responsible accessibility research that respects disabled communities' expertise about their own experiences.

**Publications**: barbareschi2024speech (CHI 2024)

---

## Cross-Cutting Research Themes

Our 30 publications span 19 interconnected research themes, reflecting the multidisciplinary nature of accessible IoT:

**Primary Themes**:
- [Physiological Sensing](/themes/physiological-sensing) (10 publications) - Biosensing, heart rate, electrodermal activity
- [Wearable IoT](/themes/wearable-iot) (7 publications) - Body-worn sensors and devices
- [Cognitive Augmentation](/themes/cognitive-augmentation) (7 publications) - Mental and cognitive enhancement
- [Inclusive Design](/themes/inclusive-design) (6 publications) - Accessibility and universal design
- [Haptic Feedback](/themes/haptic-feedback) (5 publications) - Tactile and haptic interaction

**Emerging Themes**:
- [Smart Eyewear](/themes/smart-eyewear) - Glasses-based sensing and display
- [Visual Accessibility](/themes/visual-accessibility) - Vision-related accessibility
- [Assistive Robotics](/themes/assistive-robotics) - Robots for assistance
- [Skill Learning](/themes/skill-learning) - Training and education tools

[View all research themes →](/themes)

---

## Community Impact and Outreach

Beyond individual research projects, we've contributed to building an international community around accessible IoT:

**Dagstuhl Seminars**: Co-organized two prestigious Dagstuhl Seminars on Cognitive Augmentation, bringing together leading researchers from AI, HCI, neuroscience, and accessibility domains to define research agendas and foster collaborations.

**Workshop Series**: Organized four international workshops:
- **mobiCHAI 2024 & 2025** (Mobile Cognitive-Augmenting and Cognition-Altering Technologies): First and second editions at MobileHCI, establishing a new research community around mobile cognitive augmentation
- **Augmented Humans workshops** (2023-2025): Annual gatherings exploring biosensing, enhanced senses, and experience design
- **IoT 2023 workshop**: Focused specifically on accessible IoT design

**Keynote Speakers**: Events featured leaders in AI and accessibility:
- Prof. Paul Lukowicz (DFKI) on AI approaches to human augmentation
- Prof. Thad Starner (Georgia Tech) on accessible wearable computing

**Open-Source Contributions**: Released complete hardware designs, software, and datasets under open licenses, enabling researchers and developers worldwide to build upon our work without replicating infrastructure.

**Publications**: 30 papers in top-tier venues (CHI, UIST, UbiComp, ETRA, Augmented Humans) with over 40 citations, demonstrating impact on the research community.

This community-building work extends our project's reach beyond our own prototypes, influencing how researchers and practitioners approach accessible IoT design globally.

---

[View all publications →](/publications)
[Explore project timeline →](/timeline)
[Learn about the project background →](/background)