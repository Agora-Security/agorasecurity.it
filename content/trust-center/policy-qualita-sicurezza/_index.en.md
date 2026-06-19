+++
title = "Integrated Quality and Information Security Policy"
description = "Agorà Security's top-level policy — integrates the Quality Policy (ISO 9001:2015) and the Information Security Policy (ISO/IEC 27001:2022) with the cloud-specific guidance of ISO/IEC 27017:2015. Approved by the Amministratore Unico."
template = "page.html"
weight = 10
+++

**Document code:** POL-01-AS · **Revision:** rev.00 · **Release date:** 10 November 2025 · **Approved by:** Amministratore Unico, Matteo Brunati

**References:** ISO 9001:2015 + Amd.1:2024 · ISO/IEC 27001:2022 · ISO/IEC 27017:2015

## 1. Purpose

This document is the top-level policy of the Integrated Management System (IMS) of Agorà Security S.r.l. It establishes the commitment of top management to the **quality** of Agorà Security's services and products and to the **confidentiality, integrity and availability** of the information entrusted to Agorà Security by its customers, personnel, suppliers and other interested parties. It is the anchor policy from which every subordinate policy, procedure, register and record of the IMS is derived.

## 2. Scope

This policy applies to the Integrated Management System of Agorà Security S.r.l. in its entirety. The IMS covers:

- **Advisory services** delivered by Agorà Security to client organizations — cyber resilience, data protection, ISO/IEC 27001 and ISO 9001 certification support, NIS 2 gap analysis and implementation, risk assessment, virtual CISO, incident response support, supplier security assessment, security awareness and training.
- **Software products** developed, operated and delivered by Agorà Security — in particular our SaaS cyber resilience platform, including the entire software development lifecycle, production operation, customer onboarding and support, and customer-data handling.
- **All personnel** of Agorà Security, all contractors and all partners working on behalf of the company, and all information and information systems owned or controlled by Agorà Security.
- **The physical Vicenza HQ site** and all personnel working remotely under an Agorà Security employment or contractor relationship.

## 3. Commitment of top management

The Amministratore Unico of Agorà Security S.r.l., on behalf of top management, commits to:

1. **Establish, implement, maintain and continually improve** the Integrated Management System in accordance with the requirements of ISO 9001:2015/Amd.1:2024 for quality management and ISO/IEC 27001:2022 for information security management, including the applicable cloud-specific guidance of ISO/IEC 27017:2015.
2. **Satisfy all applicable requirements** — customer contractual obligations, legal and regulatory requirements (including without limitation GDPR / Regulation (EU) 2016/679, the Italian Personal Data Protection Code — D.Lgs. 196/2003, the Italian workplace safety code — D.Lgs. 81/2008, and where applicable the Italian NIS 2 transposition — D.Lgs. 138/2024), and internal policies and procedures.
3. **Ensure the availability of resources** — human, technical, financial — necessary to operate the IMS effectively.
4. **Integrate the IMS into daily operations** of Agorà Security so that quality and information security are part of how the company works, not a separate set of activities.
5. **Assign and communicate roles, responsibilities and authorities** for the IMS via a documented RACI matrix and formal nomination letters.
6. **Set measurable objectives** for quality and for information security, monitor them, review them periodically, and adjust them as needed.
7. **Respond to incidents, nonconformities and customer feedback** with a systematic process leading to corrective actions, continual improvement and reduction of recurrence.
8. **Communicate this policy** to every person working for or on behalf of Agorà Security and to interested parties on request.

## 4. Strategic objectives

Agorà Security pursues the following strategic objectives, made concrete by measurable targets in our internal Objectives and KPIs register:

1. **Deliver advisory services and software products of high, consistent quality** that meet or exceed customer expectations and contractual commitments.
2. **Preserve the confidentiality, integrity and availability** of information entrusted by customers, personnel, suppliers and other interested parties. This is the core business of Agorà Security and the core content of its reputation.
3. **Operate our SaaS platform as a secure service** that meets customer security expectations and reflects the same standards Agorà Security advises its clients to adopt.
4. **Sustain regulatory compliance** — GDPR as the principal driver for privacy, ISO/IEC 27001:2022 and ISO/IEC 27017:2015 as the principal drivers for information security, ISO 9001:2015/Amd.1:2024 for quality management, and applicable Italian sectoral law.
5. **Continuously improve the IMS** through risk assessment, incident lessons-learned, internal audit findings, customer feedback and management review.
6. **Invest in competence and awareness** — both technical training for personnel and security-culture activities for the whole team.

## 5. Principles

The IMS operates under the following principles, which every subordinate policy and procedure elaborates for its specific domain:

1. **Security and quality by design and by default.** Every service, every deliverable, every software release begins with security and quality requirements and ends with verification that those requirements are met.
2. **Risk-based approach.** Resources are allocated in proportion to the risk they address. The Risk Assessment and the Statement of Applicability are the authoritative statement of which risks are managed and how.
3. **Least privilege and need-to-know.** Access to information and systems is granted only to the extent needed to perform a legitimate task, and only for the time needed. This principle applies to personnel, contractors, suppliers and automated service accounts.
4. **Segregation of duties.** Conflicting duties are segregated to reduce the risk of error and collusion. Where structural separation is not feasible, documented compensating controls are in place.
5. **Defense in depth.** Multiple layers of controls — organizational, physical, technological — protect each asset, so that the failure of any single control does not lead to an uncontained incident.
6. **Traceability and evidence.** Every significant decision, action and event in the IMS is recorded in a way that can be reconstructed and reviewed later.
7. **Supplier accountability.** Suppliers, especially cloud service providers, are selected against explicit security criteria, reviewed periodically, and held to equivalent obligations through contractual clauses.
8. **Cloud responsibility awareness.** Agorà Security operates as both a Cloud Service Customer (consuming third-party SaaS) and a Cloud Service Provider (delivering our SaaS platform). Each role carries distinct obligations under ISO/IEC 27017:2015.
9. **Privacy by design.** Personal data is collected, processed, stored and transferred with awareness of the data subject's rights, in accordance with GDPR and under DPO supervision.
10. **Customer focus.** Quality is defined by the customer's needs, not by the organization's convenience. Customer satisfaction is measured, feedback is acted upon, contractual commitments are honored.
11. **Continual improvement.** The IMS is never "finished". Every internal audit, every management review, every incident and every customer signal is an opportunity to do better.
12. **Personal accountability.** Each person is accountable for the quality of their work and for compliance with the IMS. Managers are accountable for those they direct. Top management is accountable for the IMS as a whole.

## 6. Commitments to specific topics

The following commitments supplement the principles above and address topics the auditor will expect to see stated explicitly. Each is elaborated in a subordinate policy or procedure.

- **Information security governance** — organized via a documented RACI matrix, with the RSGSI (Head of the ISMS), the RSQ (Head of Quality) and the DPO as the core governance roles, supplemented by the internal auditor and the system administrators.
- **Asset management** — every information asset has an owner, a classification and a documented handling rule.
- **Access control and identity** — least-privilege access, multi-factor authentication for all accounts, quarterly review for standard accounts and monthly review for privileged accounts.
- **Cryptography** — data in transit is protected with TLS; data at rest is protected according to the classification of the asset; cryptographic keys are managed under a dedicated procedure.
- **Operational security** — systems are hardened at install, protected against brute-force attacks, monitored by an EDR/SIEM solution, and patched on a defined cadence.
- **Cloud services** — cloud service providers are selected, used and exited under a dedicated policy; the primary hosting provider is subject to due diligence and periodic review.
- **Secure development** — our SaaS platform is developed under a secure SDLC: versioned source code, code review, automated testing, dependency vulnerability scanning, container image hardening.
- **Network security** — Agorà networks are protected, segmented and monitored.
- **Business continuity and ICT readiness** — defined procedures govern how Agorà Security maintains service delivery in the event of disruption; backups are managed under a dedicated procedure.
- **Incident management** — security events and incidents are detected, assessed, responded to and learned from, with specific provisions for GDPR personal-data breach notification under DPO supervision.
- **Human resources security** — personnel security is managed from pre-employment screening through termination.
- **Remote working and physical security** — remote work is the norm; remote-work controls and physical security of the Vicenza office and remote workstations are managed under a dedicated policy.
- **Acceptable use** — all personnel and contractors agree to acceptable-use rules as a condition of access to Agorà Security information and systems.
- **Supplier management** — suppliers are qualified, onboarded, reviewed and, where necessary, offboarded under a dedicated procedure.
- **Quality of service delivery** — advisory services are planned, delivered and verified under dedicated procedures; customer satisfaction is measured.
- **Legal and regulatory compliance** — a dedicated register lists every applicable law and contractual obligation; compliance is reviewed periodically by the RSGSI and the DPO within their respective remits.
- **Privacy and personal data protection** — personal data is processed in accordance with GDPR and Italian D.Lgs. 196/2003 under DPO supervision, with a maintained record of processing activities.

## 7. Framework scoping statement

The IMS of Agorà Security S.r.l. is designed and operated to meet the requirements of:

- **ISO 9001:2015**, as amended by Amendment 1:2024 (Climate action changes) — in full
- **ISO/IEC 27001:2022** — in full, including all 93 Annex A controls with applicability declared in the Statement of Applicability (SoA)
- **ISO/IEC 27017:2015** — in full, applied on top of ISO/IEC 27001:2022 via the SoA cloud-specific section

The following frameworks are considered **informative only** — Agorà Security operates with awareness of their provisions and implements controls where they overlap with the audited scope, but does not claim certification or formal conformance:

- ISO/IEC 27018:2014 (PII in public cloud) — relevant because our SaaS platform processes customer personal data
- ISO/IEC 27701:2019 (Privacy Information Management System) — relevant because of our data-protection advisory service line

The following framework is **out of scope** of the IMS at the time of this revision:

- NIS 2 / D.Lgs. 138/2024 — Agorà Security is below the mandatory-entity thresholds of the Italian NIS 2 implementation and does not voluntarily claim conformance. Where specific NIS 2 provisions overlap with ISO/IEC 27001 Annex A controls, those are implemented under the ISO/IEC 27001 banner, not under NIS 2.

Identified as a **future investment**, not in the current IMS scope:

- ISO/IEC 42001:2023 (Artificial Intelligence Management System) — Agorà Security is AI-native and plans to pursue AIMS certification in a subsequent cycle. The current IMS is designed in a way that does not prevent an AIMS extension.

## 8. Cloud role declaration

Agorà Security S.r.l. plays both sides of the cloud shared-responsibility model simultaneously:

- **Cloud Service Customer (CSC)** — when consuming third-party cloud services to operate the business (server workloads and a corporate productivity SaaS stack). In these relationships Agorà Security is the customer and is subject to the obligations of the CSC under ISO/IEC 27017:2015.
- **Cloud Service Provider (CSP)** — when delivering our SaaS platform to its own customers. In these relationships Agorà Security is the provider and is subject to the obligations of the CSP under ISO/IEC 27017:2015.

The detailed declaration, including the per-control split between CSC and CSP obligations, is in the dedicated cloud section of the Statement of Applicability.

## 9. Compliance and disciplinary framework

Compliance with this policy and with all subordinate policies and procedures of the IMS is **mandatory** for all employees, contractors and partners of Agorà Security. Violations may lead to:

- **For employees:** disciplinary measures in accordance with the applicable employment contract, the reference national collective bargaining agreement (CCNL), and Italian labor law (including the limits and procedures of the Statuto dei Lavoratori — Law 20 May 1970 no. 300, art. 4 on employer monitoring of workers).
- **For contractors and partners:** contractual remedies up to and including termination for cause of the engagement, in accordance with the contractual clauses of the applicable agreement.
- **For all:** where the violation involves a breach of law or regulation, reporting to the competent authorities (Italian Data Protection Authority for personal-data breaches; law enforcement for criminal conduct; other sectoral authorities as applicable).

The disciplinary process for personnel is defined in the HR Security Policy and is consistent with Italian labor law and the applicable collective bargaining agreement.

## 10. Review and revision

This policy is reviewed by the Amministratore Unico **at least annually** as part of the management review, and whenever a significant change occurs in Agorà Security's context, scope, risks, legal or contractual commitments, or organizational structure.

## 11. Communication

This policy is communicated to:

- **All personnel** of Agorà Security — as part of onboarding, and on every revision.
- **Contractors and partners** — at the start of the engagement and on every revision.
- **Customers** — on request, and as part of supplier security questionnaire responses.
- **Suppliers** — where relevant to the supplier relationship (e.g., cloud service providers handling Agorà Security information).
- **The certification body** — as part of the certification process.
- **Any interested party** — on request.

## Approval

Approved by the Amministratore Unico of Agorà Security S.r.l. and enters into force on the date of its signature.

— *Matteo Brunati, Amministratore Unico — Agorà Security S.r.l.*

---

*This document is the public version of policy POL-01-AS of Agorà Security's Integrated Management System. The signed internal version and subordinate documents (procedures, registers, nomination letters) are available on motivated request to* [privacy@agorasecurity.it](mailto:privacy@agorasecurity.it).
