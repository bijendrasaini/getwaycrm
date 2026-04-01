

## Plan: GETWAY Website Enhancement & Fixes

This plan covers critical fixes, new pages, navigation overhaul, floating widgets, and content updates — all within the existing dark SaaS theme.

---

### 1. Fix Netlify Routing (404 on direct URL)

The `_redirects` file already exists in project root with the correct `/* /index.html 200` catch-all and subdomain rules. However, it needs to be in the `public/` directory so Vite copies it to the build output.

**Action:** Move `_redirects` → `public/_redirects` with the same content (subdomain rules + SPA fallback).

---

### 2. Update Contact Info Site-Wide

Replace across all files:
- `connect@getwaycrm.com` → `connect@getway.in`
- `93555-22544` → `92555-22544` (normalize the Office number)
- Update `9355522544` → `9255522544` in WhatsApp links and Profile page

**Files affected:** `Contact.tsx`, `Demo.tsx`, `Partners.tsx`, `Profile.tsx`, `supabase/functions/handle-form-submission/index.ts`

---

### 3. Revamp Navbar with Mega-Menu Dropdowns

Replace the current flat nav with two dropdown menus + direct links:

- **Products** (dropdown): AI CRM, CPaaS, AI Agents, AI Websites, AI School ERP
- **Marketing & Automation** (dropdown): AI Call Automation, WhatsApp Business API, SMS/RCS Messaging, IVR Calling System
- **Demo** (direct link → `/demo`)
- **Partners** (direct link → `/partners`)
- **Pricing** (direct link → `/pricing`)
- **Login** (external link → `https://login.getwaycrm.com`)

Mobile menu mirrors the same structure with collapsible sections.

---

### 4. Create New Policy Pages

- **`src/pages/RefundPolicy.tsx`** — Refund policy content with SaaS styling
- **`src/pages/CompliancePolicy.tsx`** — Compliance policy content

Add routes in `App.tsx`: `/refund-policy`, `/compliance-policy`

---

### 5. Update Footer

Add links: Privacy Policy, Terms, Refund Policy, Compliance Policy, Careers, Contact, Blog, Documentation, API, Help Center.

---

### 6. Presentation Page → Image-Based Slides

Replace the current PDF `<object>` embed with image-based slides:
- Reference images at `/presentation/slide1.jpg` through `/presentation/slide10.jpg`
- Add auto-play toggle (6-second interval)
- Smooth fade/slide transitions between slides
- Download button links to `/presentation/crm-presentation-getway.pdf`

Note: Actual slide image/PDF files must be uploaded to `public/presentation/` separately.

---

### 7. Homepage Additions

Add new sections to `Index.tsx`:
- **Trust Section** — "Trusted by Businesses Worldwide" with metrics
- **How It Works** — 4-step visual flow (Sign Up → Connect → Automate → Scale)
- **Testimonials** — 3-4 placeholder testimonial cards
- **AI Voice Agents highlight** — Featured card/section emphasizing AI calling capabilities

---

### 8. AI Voice Agents Featured Sections

Add prominent AI Voice Agents cards on:
- Homepage (new section)
- Platform/CPaaS page (already has some, enhance with stronger copy)

---

### 9. Floating WhatsApp Button

Create `src/components/WhatsAppButton.tsx` — fixed bottom-right green button linking to `https://wa.me/919255522544`. Render in `AppLayout` on all pages (except login).

---

### 10. Floating AI Chatbot Widget

Create `src/components/AIChatbot.tsx`:
- Floating chat icon (bottom-right, above WhatsApp button)
- Opens a chat panel with welcome message: "Hi 👋 Welcome to GETWAY AI CRM. How can I help you today?"
- Simple FAQ-style responses or connects to the Lovable AI edge function for intelligent replies
- Styled consistent with dark SaaS theme

---

### 11. Domain Redirection Note

Domain redirections (getwaycrm.com → getway.in, etc.) must be configured at the DNS/registrar level or via Netlify site-level redirects on those respective domains. These cannot be handled from this single project's `_redirects` file. Will add a comment noting this.

---

### Technical Summary

| Task | Files |
|------|-------|
| Redirects fix | `public/_redirects` (create), delete root `_redirects` |
| Contact info | 5 files updated |
| Navbar overhaul | `Navbar.tsx` rewrite |
| New pages | `RefundPolicy.tsx`, `CompliancePolicy.tsx` |
| Routes | `App.tsx` |
| Footer | `Footer.tsx` |
| Presentation | `Presentation.tsx` rewrite |
| Homepage sections | `Index.tsx` |
| WhatsApp button | New component |
| AI Chatbot | New component + edge function |
| Voice Agents | `Index.tsx`, `Platform.tsx` |

