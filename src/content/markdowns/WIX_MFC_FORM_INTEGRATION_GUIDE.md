# Wix Form & Booking Widget Integration Guide — MyFormConnect (MFC)

> A complete, documentation-style guide to integrating branded Contact Forms and interactive Google Calendar Booking Widgets into any Wix website in minutes. Features zero backend code, automatic iframe height resizing, advanced spam protection, and centralized lead management.

---

## Table of Contents

- [Why MyFormConnect Over Native Wix Forms?](#why-myformconnect-over-native-wix-forms)
- [Feature Comparison Matrix](#feature-comparison-matrix)
- [Prerequisites](#prerequisites)
- [Understanding Wix Embeds & Domain Security](#understanding-wix-embeds--domain-security)
- [Step 1: Set Up Your Domain in MyFormConnect](#step-1-set-up-your-domain-in-myformconnect)
- [Step 2: Embed the Responsive Contact Form](#step-2-embed-the-responsive-contact-form)
- [Step 3: Embed the Book-a-Call Meeting Widget](#step-3-embed-the-book-a-call-meeting-widget)
- [Styling & Design Customization](#styling--design-customization)
- [Troubleshooting & FAQ](#troubleshooting--faq)

---

## Why MyFormConnect Over Native Wix Forms?

Wix Forms is a capable built-in tool for basic website inquiries, but modern businesses require more than isolated submission notifications. **MyFormConnect (MFC)** transforms your website forms from passive message inboxes into an intelligent **form-to-lead operations platform**—without requiring you to rebuild or migrate away from Wix.

```
       FORMS                         LEADS                          ACTIONS
+------------------+         +--------------------+         +---------------------+
|  Wix Forms &     |  --->   | Unified Lead View: |  --->   | • AI Summaries      |
|  Booking Widget  |         | All touchpoints    |         | • Auto Lead Routing |
|  on any page     |         | tied to one lead   |         | • Slack & Webhooks  |
+------------------+         +--------------------+         +---------------------+
```

### Key Business Advantages:

1. **Keep Your Wix Website, Upgrade the Engine:**  
   You retain full freedom over your Wix design, brand assets, and domain. MyFormConnect simply powers the form processing and lead workflow behind the scenes.
2. **Unified Customer Lead Journeys:**  
   Wix Forms treats submissions in silos. With MyFormConnect, if a visitor fills out your Contact Form, requests a demo, and later books a meeting, all interactions are consolidated under a **single customer lead profile**.
3. **Advanced Spam Detection & Lead Summaries:**  
   Standard CAPTCHAs introduce friction and decrease conversions. MFC uses advanced spam detection to stop marketing bots and promotional junk silently, and generates instant **AI lead summaries** so sales and support teams immediately understand customer intent.
4. **Intelligent Lead Routing & Team Collaboration:**  
   Route inquiries automatically to specific departments (Sales, Support, HR, or Partnerships) and receive instant alerts directly in **Slack** and team email channels.
5. **No Iframe Scrollbar Headaches:**  
   Standard iframes embedded in Wix often display awkward internal scrollbars. MFC snippets include built-in `postMessage` height synchronization, making the form fit seamlessly on desktop and mobile screens.
6. **Platform Independence:**  
   If you ever decide to redesign your site or migrate from Wix to React, Astro, Next.js, or WordPress, your forms, webhooks, CRM connectors, and analytics stay 100% intact.

---

## Feature Comparison Matrix

| Capability | Native Wix Forms | MyFormConnect (MFC) |
| :--- | :---: | :---: |
| **Visual Form Embedding** | Native element | Responsive HTML Embed with auto-height |
| **Google Calendar Booking Widget** | Wix Bookings App | Native interactive slots & automated calendar invites |
| **Multi-Form Lead Consolidation** | Limited / Siloed | **Yes** — All forms map to one unified lead timeline |
| **Advanced Spam Detection** | Basic anti-abuse | **Yes** — Intelligent context & pattern analysis |
| **AI Lead Summaries** | ❌ No | **Yes** — Instant automated digest for sales reps |
| **Direct Slack Integration** | Third-party / Make | **Yes** — Built-in native channel alerts |
| **Lead Routing by Category** | Basic automations | **Yes** — Dedicated routing to specific teams |
| **Webhooks & Custom REST API** | Wix Velo development | **Yes** — Native instant webhooks & REST API |
| **Platform Portability** | Locked to Wix | **Independent** — Works on Wix, Astro, React, HTML |

---

## Prerequisites

Before starting, make sure you have:

- A **MyFormConnect account** — [Sign up here (Free)](https://staging.myformcapture.io/users/sign_up)
- Access to your **Wix Editor** for your website
- A connected **Google Calendar** *(only required if embedding the Booking Widget)*

---

## Understanding Wix Embeds & Domain Security

Wix isolates custom HTML code inside sandboxed iframes served from a dedicated domain:

```text
https://<metaSiteId>.filesusr.com
```

When your form submits data to MyFormConnect, the browser sends this `filesusr.com` URL as the origin/referrer. To ensure security while allowing submissions through:

1. You will locate your unique Wix **`metaSiteId`**.
2. You will add `https://<metaSiteId>.filesusr.com` into your MyFormConnect **Domain Restriction** settings.

### How to Find Your Wix `metaSiteId`:
Look at your browser's address bar while working inside the Wix Editor. The URL contains `metaSiteId=...`:

![Locate your metaSiteId in the Wix Editor address bar](./metaSiteId-url-guide.png)

*(Example: If your URL shows `metaSiteId=dfb72d56-544b-4b38-ba25-07d578eca3a8`, your Wix embed domain is `https://dfb72d56-544b-4b38-ba25-07d578eca3a8.filesusr.com`)*.

---

## Step 1: Set Up Your Domain in MyFormConnect

1. **Log in to your Dashboard:**  
   Sign in to your **[MyFormConnect Dashboard](https://staging.myformcapture.com/account/)**.
2. **Navigate to Domains:**  
   Click on **Domains** in the top navigation bar.
3. **Add or Select a Domain:**  
   Click **Add New Domain** (or choose an existing domain).
4. **Enter Domain Details:**
   - **Domain Name:** Enter a recognizable project name (e.g., `Business Website` or `Wix Client Site`).
   - **Domain URL:** Enter your public Wix URL (e.g., `https://yourbrand.wixsite.com/mysite` or `https://yourcustomdomain.com`).
5. **Save Domain:**  
   Click **Create Domain** (or **Save Changes**).

> 💡 **Note:** Domain restriction (whitelisting origins) is configured on individual forms when creating or editing a form, rather than on the initial domain registration step.

---

## Step 2: Embed the Responsive Contact Form

This clean, modern contact form features client-side validation, instant inline success/error notices (no page reload), customizable brand colors, and automatic height reporting to Wix.

**Form Visual Preview:**

<img src="./contact-form-visual.png" alt="Contact Form Preview" width="480" />

### 1. Create the Form in MyFormConnect
1. Click on **Forms** in the top navigation bar.
2. Click on **Add New Form**.
3. Select your domain from the dropdown and click **Continue**.
4. Configure form details:
   - **Form Name:** Enter a name (e.g., `Wix Contact Form`).
   - **Form Template:** Select your preferred form template.
5. Turn on **Domain Restriction**:
   - In the **Type domain name** text box, paste your Wix iframe origin:
     ```text
     https://<metaSiteId>.filesusr.com
     ```
   - Click to add it. *(Optional: You can also add your live custom domain URL).*
6. Configure form options:
   - Enable **Notify on Email** to receive instant submission alerts.
   - Enable **Track for Leads** to consolidate submissions into unified lead profiles.
7. Click **Create Form**.
8. Copy your generated **Form Action URL**:
   ```text
   https://staging.myformcapture.com/f/YOUR_FORM_UUID
   ```

### 2. Configure Form Code
At the top of the code below, update two items:
1. Replace `MFC_FORM_ACTION_URL` with your copied Form Action URL.
2. (Optional) Adjust the 3 CSS variables under `:root` (`--theme-color`, `--theme-hover`, `--theme-glow`) to match your brand colors.

### 3. Contact Form Embed Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>

    <!-- ==========================================================================
       FORM CONFIGURATION (Paste your Form Action URL here)
       Replace the URL below with your Form Action URL from MyFormConnect
       ========================================================================== -->
    <script>
        // Paste your MyFormConnect Form Action URL here:
        const MFC_FORM_ACTION_URL = "https://staging.myformcapture.com/f/YOUR_FORM_UUID";
    </script>

    <style>
        /* ==========================================================================
           THEME SETTINGS (Change your colors here)
           Change these 3 lines to match your website's brand colors!
           ========================================================================== */
        :root {
            /* Main color: button & active text box border */
            --theme-color: #4D9B1B;
            /* Button color when hovered */
            --theme-hover: #3F8416;
            /* Slight shadow around text box when clicked */
            --theme-glow: rgba(77, 155, 27, 0.15);
        }

        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        html,
        body {
            margin: 0;
            padding: 0;
            background: transparent;
            overflow-x: hidden;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
        }

        .lumetra-form {
            width: 100%;
            max-width: 580px;
            margin: 0 auto;
            padding: 16px 20px;
            background: #ffffff;
            color: #10202D;
            border: 1px solid #e2e8eb;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(6, 43, 73, 0.06);
        }

        .lumetra-eyebrow {
            margin: 0 0 4px;
            color: var(--theme-color);
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        .lumetra-title {
            margin: 0 0 4px;
            color: #062B49;
            font-size: 20px;
            line-height: 1.25;
            font-weight: 650;
            letter-spacing: -0.01em;
        }

        .lumetra-description {
            margin: 0 0 14px;
            color: #667784;
            font-size: 13px;
            line-height: 1.45;
        }

        .lumetra-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px 14px;
        }

        .lumetra-field {
            margin-bottom: 0;
        }

        .lumetra-full {
            grid-column: 1 / -1;
        }

        .lumetra-label {
            display: block;
            margin-bottom: 4px;
            color: #10202D;
            font-size: 12px;
            font-weight: 600;
        }

        .lumetra-required {
            color: var(--theme-color);
        }

        .lumetra-input {
            display: block;
            width: 100%;
            min-height: 38px;
            padding: 8px 12px;
            border: 1px solid #d7e0e5;
            border-radius: 6px;
            background: #ffffff;
            color: #10202D;
            font-family: inherit;
            font-size: 13px;
            line-height: 1.4;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .lumetra-input::placeholder {
            color: #9aa8b1;
        }

        .lumetra-input:hover {
            border-color: #b8c6ce;
        }

        .lumetra-input:focus {
            outline: none;
            border-color: var(--theme-color);
            box-shadow: 0 0 0 2px var(--theme-glow);
        }

        textarea.lumetra-input {
            min-height: 68px;
            height: 68px;
            resize: vertical;
        }

        select.lumetra-input {
            cursor: pointer;
        }

        .lumetra-submit {
            width: 100%;
            min-height: 40px;
            margin-top: 12px;
            padding: 10px 18px;
            border: none;
            border-radius: 6px;
            background: var(--theme-color);
            color: #ffffff;
            font-family: inherit;
            font-size: 13px;
            font-weight: 650;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
        }

        .lumetra-submit:hover {
            background: var(--theme-hover);
            box-shadow: 0 4px 12px var(--theme-glow);
        }

        .lumetra-submit:active {
            transform: translateY(0);
        }

        .lumetra-submit:disabled {
            opacity: 0.65;
            cursor: not-allowed;
            box-shadow: none;
        }

        .lumetra-notice {
            display: none;
            margin-bottom: 12px;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 13px;
            line-height: 1.4;
            font-weight: 500;
        }

        .lumetra-notice.success {
            display: block;
            background: #edf7e8;
            color: #356d19;
            border: 1px solid #cce6bd;
        }

        .lumetra-notice.error {
            display: block;
            background: #fff0f0;
            color: #9a2f2f;
            border: 1px solid #f0c5c5;
        }

        .lumetra-note {
            margin: 8px 0 0;
            color: #89969e;
            font-size: 11px;
            line-height: 1.4;
            text-align: center;
        }

        .lumetra-note a {
            color: #1a73e8;
            text-decoration: none;
            font-weight: 600;
        }

        .lumetra-note a:hover {
            text-decoration: underline;
        }

        @media (max-width: 520px) {
            .lumetra-form {
                padding: 14px 14px;
                border-radius: 10px;
            }

            .lumetra-title {
                font-size: 18px;
            }

            .lumetra-grid {
                grid-template-columns: 1fr;
                gap: 8px;
            }

            .lumetra-full {
                grid-column: auto;
            }
        }
    </style>
</head>

<body>
    <div class="lumetra-form">
        <form id="lumetra-contact-form" action="https://staging.myformcapture.com/f/YOUR_FORM_UUID" method="POST">
            <p class="lumetra-eyebrow">GET IN TOUCH</p>
            <h2 class="lumetra-title">Let's build a greener future.</h2>
            <p class="lumetra-description">
                Tell us about your energy requirements or project.
            </p>

            <!-- Status message container -->
            <div id="lumetra-notice" class="lumetra-notice"></div>

            <div class="lumetra-grid">
                <!-- Full Name -->
                <div class="lumetra-field">
                    <label class="lumetra-label" for="lumetra-name">
                        Full Name <span class="lumetra-required">*</span>
                    </label>
                    <input type="text" id="lumetra-name" name="name" class="lumetra-input" placeholder="Your full name"
                        required>
                </div>

                <!-- Work Email -->
                <div class="lumetra-field">
                    <label class="lumetra-label" for="lumetra-email">
                        Work Email <span class="lumetra-required">*</span>
                    </label>
                    <input type="email" id="lumetra-email" name="email" class="lumetra-input"
                        placeholder="you@company.com" required>
                </div>

                <!-- Phone Number -->
                <div class="lumetra-field">
                    <label class="lumetra-label" for="lumetra-phone">Phone Number</label>
                    <input type="tel" id="lumetra-phone" name="phone" class="lumetra-input"
                        placeholder="+1 (555) 000-0000">
                </div>

                <!-- Service Selection -->
                <div class="lumetra-field">
                    <label class="lumetra-label" for="lumetra-service">
                        Service <span class="lumetra-required">*</span>
                    </label>
                    <select id="lumetra-service" name="service" class="lumetra-input" required>
                        <option value="">Select a service</option>
                        <option value="Solar Installation">Solar Installation</option>
                        <option value="Battery & Energy Storage">Battery & Energy Storage</option>
                        <option value="Solar O&M">Solar O&M</option>
                        <option value="Energy Monitoring">Energy Monitoring</option>
                        <option value="Asset Optimization">Asset Optimization</option>
                        <option value="Sustainability Solutions">Sustainability Solutions</option>
                    </select>
                </div>

                <!-- Project Message -->
                <div class="lumetra-field lumetra-full">
                    <label class="lumetra-label" for="lumetra-message">
                        Tell us about your project <span class="lumetra-required">*</span>
                    </label>
                    <textarea id="lumetra-message" name="message" class="lumetra-input" rows="2"
                        placeholder="Tell us about your requirements..." required></textarea>
                </div>
            </div>

            <button type="submit" id="lumetra-submit" class="lumetra-submit">
                Send Enquiry →
            </button>

            <p class="lumetra-note">
                Powered by <a href="https://myformconnect.io" target="_blank"
                    rel="noopener noreferrer">MyFormConnect</a>
            </p>
        </form>

        <script>
            // Get Form DOM elements
            const form = document.getElementById("lumetra-contact-form");
            const notice = document.getElementById("lumetra-notice");
            const submitButton = document.getElementById("lumetra-submit");

            // Sync form action attribute
            if (typeof MFC_FORM_ACTION_URL !== 'undefined' && MFC_FORM_ACTION_URL) {
                form.setAttribute("action", MFC_FORM_ACTION_URL);
            }

            // Handle form submission
            form.addEventListener("submit", async function (event) {
                event.preventDefault();

                // Save button text and show loading state
                const originalText = submitButton.textContent;
                submitButton.textContent = "Sending...";
                submitButton.disabled = true;

                // Reset any active status notices
                notice.style.display = "none";

                // Validate form configuration
                if (!MFC_FORM_ACTION_URL || MFC_FORM_ACTION_URL.includes("YOUR_FORM_") || MFC_FORM_ACTION_URL.trim() === "") {
                    notice.innerHTML = "<strong>Form Configuration Missing:</strong> Please paste your Form Action URL at the start of the code in <code>MFC_FORM_ACTION_URL</code>.";
                    notice.className = "lumetra-notice error";
                    notice.style.display = "block";
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    return;
                }

                // Collect submission payload
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);

                try {
                    // Send data to MyFormConnect
                    const response = await fetch(MFC_FORM_ACTION_URL, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Requested-With": "XMLHttpRequest",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify(data)
                    });

                    const result = await response.json();

                    if (response.ok) {
                        notice.innerHTML = result.thank_you_message || result.message || "Thank you! Your form has been submitted successfully.";
                        notice.className = "lumetra-notice success";
                        notice.style.display = "block";
                        form.reset();
                    } else {
                        throw new Error(result.error_message || "Form submission failed.");
                    }
                } catch (error) {
                    notice.innerHTML = error.message || "Something went wrong. Please check your information and try again.";
                    notice.className = "lumetra-notice error";
                    notice.style.display = "block";
                } finally {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }
            });

            // Hide notification when user interacts with the form again
            form.addEventListener("input", function () {
                notice.style.display = "none";
            });

            // Send height to parent frame (useful for Wix iframe auto-resizing)
            function notifyHeight() {
                if (window.parent && window.parent !== window) {
                    const height = document.body.scrollHeight;
                    window.parent.postMessage({ type: "resize", height: height }, "*");
                }
            }
            window.addEventListener("load", notifyHeight);
            window.addEventListener("resize", notifyHeight);
            if (window.ResizeObserver) {
                new ResizeObserver(notifyHeight).observe(document.body);
            }
        </script>
    </div>
</body>

</html>
```

### 4. Adding to Wix Editor
1. Open your website in the **Wix Editor**.
2. In the left sidebar, click the **+ Add Elements** button.
3. Scroll down to **Embed** and select **Embed code**:
   
   ![Adding the Embed code element in Wix](./embed-code-support.png)

4. Drag the **Embed code** container onto your page section.
5. Click the container and select **Enter Code** (or the **Settings** icon).
6. In the modal, ensure **Code** is selected, paste your configured HTML snippet into the text area, and click **Apply**.
7. Resize the container boundary on your page to fit your layout.

---

## Step 3: Embed the Book-a-Call Meeting Widget

The **Booking Widget** provides an interactive date and time picker directly linked to Google Calendar. Visitors pick an available slot, enter their details, and automatically receive calendar invitations—all recorded in your MFC lead dashboard.

**Widget Visual Preview:**

<img src="./booking-widget-visual.png" alt="Booking Widget Preview" width="420" />

### 1. Connect Calendar & Set Availability in MyFormConnect
1. In your MFC Dashboard, click the **Settings** icon (top right) -> **Integrations**.
2. Click **Connect Google Calendar** and authorize your Google account.
3. Once connected, click **Team** in the top navigation -> **Team Settings**.
4. Configure your **Team Name**, **Timezone**, and **Available Meeting Slots** (e.g., Mon–Fri 9:00 AM – 5:00 PM).
5. Click **Update Team** to save your schedule.

### 2. Create the Booking Form in MyFormConnect
1. Navigate to **Forms** in the top navigation bar -> click **Add New Form**.
2. Select your domain from the dropdown and click **Continue**.
3. Configure form details:
   - **Form Name:** Enter a name (e.g., `Book a Call Widget`).
   - **Form Template:** Select **Booking Form**.
4. Turn on **Domain Restriction**:
   - In the **Type domain name** field, paste your Wix iframe URL: `https://<metaSiteId>.filesusr.com` and add it.
5. Configure booking and notifications:
   - Check **Send Google Calendar invite** to automatically schedule meetings with Google Meet links.
   - Enable **Notify on Email** and **Track for Leads**.
6. Click **Create Form**.
7. Copy your generated **Form Action URL**:
   ```text
   https://staging.myformcapture.com/f/YOUR_FORM_UUID
   ```

### 3. Configure Widget Code
At the top of the code below:
1. Replace `MFC_FORM_ACTION_URL` with your booking form URL.
2. Customize the meeting settings:
   - `MFC_MEETING_TITLE`: Display heading (e.g., `"Book an Intro Call"`).
   - `MFC_MEETING_DESCRIPTION`: Short subtitle (e.g., `"15-minute discovery call"`).
   - `MFC_MEETING_DURATION`: Call length in minutes (`15`, `30`, `45`, `60`).
3. (Optional) Customize the 3 brand color variables under `:root`.

### 4. Booking Widget Embed Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Booking Widget</title>

    <!-- ==========================================================================
       FORM CONFIGURATION (Paste your Form Action URL here)
       Replace the URL below with your Form Action URL from MyFormConnect
       ========================================================================== -->
    <script>
        // Paste your MyFormConnect Form Action URL here:
        const MFC_FORM_ACTION_URL = "https://staging.myformcapture.com/f/YOUR_FORM_UUID";

        // Optional: Customize your meeting details below (or keep the defaults):
        const MFC_MEETING_TITLE = "Book a Call";
        const MFC_MEETING_DESCRIPTION = "15-minute intro call";
        const MFC_MEETING_DURATION = 15; // Meeting length in minutes (e.g. 15, 20, 30, 45, 60)
    </script>

    <!-- Clean, modern font (Inter) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Official widget styles and script from MyFormCapture -->
    <link rel="stylesheet" href="https://staging.myformcapture.com/booking-widget.css">
    <script src="https://staging.myformcapture.com/booking-widget.js" defer></script>

    <style>
        /* ==========================================================================
           THEME SETTINGS (Change your colors here)
           Change these 3 lines to match your website's brand colors!
           ========================================================================== */
        :root {
            /* Main color: button, selected date & active text box border */
            --theme-color: #2563eb;
            /* Button color when hovered */
            --theme-hover: #1d4ed8;
            /* Slight shadow around text box when clicked */
            --theme-glow: rgba(37, 99, 235, 0.15);
        }

        /* ------------------------------------------------------------
           1. Basic Page Setup
           Cleans up browser spacing so Wix won't show extra scrollbars.
        ------------------------------------------------------------ */
        *,
        *::before,
        *::after {
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        html,
        body {
            margin: 0;
            padding: 0;
            width: 100%;
            min-height: 100%;
            background: transparent;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
            /* Stops horizontal scrolling on small screens */
        }

        /* ------------------------------------------------------------
           2. Outer Wrapper
           Centers the form and gives it some breathing room.
        ------------------------------------------------------------ */
        .wix-booking-wrapper {
            width: 100%;
            max-width: 520px;
            margin: 0 auto;
            padding: 12px 10px;
            display: flex;
            justify-content: center;
        }

        /* ------------------------------------------------------------
           3. Widget Card
           White background card with soft rounded corners and shadow.
        ------------------------------------------------------------ */
        .wix-booking-wrapper .bw-widget {
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
            padding: 20px 22px;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 14px;
            box-shadow: 0 4px 20px rgba(15, 23, 42, 0.07);
            font-family: inherit;
            transition: all 0.2s ease;
        }

        /* ------------------------------------------------------------
           4. Card Header (Meeting title and step description)
        ------------------------------------------------------------ */
        .bw-header {
            padding-bottom: 12px;
            margin-bottom: 14px;
        }

        .bw-header__heading {
            font-size: 1.15rem;
            font-weight: 700;
            color: #0f172a;
            letter-spacing: -0.01em;
        }

        .bw-header__meta {
            font-size: 0.875rem;
            color: #64748b;
        }

        /* ------------------------------------------------------------
           5. Calendar Navigation & Dates
        ------------------------------------------------------------ */
        .bw-calendar__nav {
            margin-bottom: 12px;
            gap: 6px 10px;
        }

        /* Next / previous month arrow buttons */
        .bw-calendar__arrow {
            width: 2.1rem;
            height: 2.1rem;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            background: #ffffff;
            color: #334155;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.15s ease;
        }

        .bw-calendar__arrow:hover:not(:disabled) {
            border-color: var(--theme-color);
            color: var(--theme-color);
            background: var(--theme-glow);
        }

        .bw-calendar__arrow:disabled {
            opacity: 0.45;
            cursor: not-allowed;
        }

        /* Days of the week row (Mo, Tu, We...) */
        .bw-calendar__weekdays {
            margin-bottom: 6px;
            font-size: 0.75rem;
            font-weight: 600;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }

        /* Individual day buttons */
        .bw-day {
            min-height: 2.25rem;
            border-radius: 8px;
            font-weight: 500;
            font-size: 0.875rem;
            transition: all 0.15s ease;
        }

        .bw-day:hover:not(:disabled) {
            background: var(--theme-glow);
            color: var(--theme-hover);
        }

        /* Selected date highlight */
        .bw-day--selected {
            background: var(--theme-color) !important;
            color: #ffffff !important;
            font-weight: 600 !important;
            box-shadow: 0 2px 8px var(--theme-glow);
        }

        /* ------------------------------------------------------------
           6. Buttons (Continue & Confirm)
        ------------------------------------------------------------ */
        .bw-btn {
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.925rem;
            padding: 10px 18px;
            transition: all 0.18s ease;
        }

        .bw-btn--primary {
            background: var(--theme-color);
            color: #ffffff;
            box-shadow: 0 2px 8px var(--theme-glow);
        }

        .bw-btn--primary:hover:not(:disabled) {
            background: var(--theme-hover);
            box-shadow: 0 4px 12px var(--theme-glow);
        }

        /* ------------------------------------------------------------
           7. Time Slot Selection
        ------------------------------------------------------------ */
        .bw-times__grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
        }

        .bw-time {
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            padding: 9px 6px;
            font-size: 0.85rem;
            font-weight: 500;
            text-align: center;
            transition: all 0.15s ease;
        }

        .bw-time:hover {
            border-color: var(--theme-color);
            color: var(--theme-color);
            background: #f8fafc;
        }

        /* Selected time highlight */
        .bw-time--selected {
            border-color: var(--theme-color) !important;
            background: var(--theme-glow) !important;
            color: var(--theme-hover) !important;
            font-weight: 600 !important;
        }

        /* ------------------------------------------------------------
           8. Form Input Fields (Name, Email, Message)
        ------------------------------------------------------------ */
        .bw-field {
            margin-bottom: 14px;
        }

        .bw-field__label {
            font-size: 0.825rem;
            font-weight: 600;
            color: #334155;
            margin-bottom: 4px;
        }

        .bw-field__input,
        .bw-field__textarea {
            border-radius: 8px;
            border: 1px solid #cbd5e1;
            font-size: 0.9rem;
            padding: 9px 12px;
            color: #0f172a;
            transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .bw-field__input:focus,
        .bw-field__textarea:focus {
            border-color: var(--theme-color);
            outline: none;
            box-shadow: 0 0 0 3px var(--theme-glow);
        }

        .bw-field__textarea {
            min-height: 72px;
        }

        /* ------------------------------------------------------------
           9. Footer (Powered by link)
        ------------------------------------------------------------ */
        .bw-powered {
            margin: 16px 0 0;
            text-align: center;
            font-size: 0.775rem;
            color: #94a3b8;
        }

        .bw-powered__brand {
            color: var(--theme-color);
            font-weight: 600;
            text-decoration: none;
            transition: color 0.15s ease;
        }

        .bw-powered__brand:hover {
            color: var(--theme-hover);
            text-decoration: underline;
        }

        /* ------------------------------------------------------------
           10. Mobile Adjustments
           Makes everything look tidy on phone screens (under 480px).
        ------------------------------------------------------------ */
        @media (max-width: 480px) {
            .wix-booking-wrapper {
                padding: 6px 4px;
            }

            .wix-booking-wrapper .bw-widget {
                padding: 14px 12px;
                border-radius: 12px;
                box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05);
            }

            .bw-header__heading {
                font-size: 1.05rem;
            }

            .bw-calendar__grid {
                gap: 2px;
            }

            .bw-day {
                min-height: 2rem;
                font-size: 0.8125rem;
                border-radius: 6px;
            }

            /* Show 2 columns of time slots on phones so text stays readable */
            .bw-times__grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 6px;
            }

            .bw-btn {
                padding: 9px 14px;
                font-size: 0.875rem;
            }

            .bw-footer {
                margin-top: 1rem;
                padding-top: 0.75rem;
            }
        }
    </style>
</head>

<body>
    <!-- 
      Main Booking Widget:
      Attributes are automatically configured from MFC_FORM_ACTION_URL at the start of this file.
    -->
    <div class="wix-booking-wrapper">
        <div id="mfc-booking-widget" data-booking-widget></div>
        <script>
            (function () {
                var widget = document.getElementById('mfc-booking-widget');
                if (!widget) return;

                var rawUrl = (typeof MFC_FORM_ACTION_URL !== 'undefined' ? MFC_FORM_ACTION_URL : '').trim();
                var uuidMatch = rawUrl.match(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);

                // Check if user hasn't configured a valid Form Action URL
                if (!rawUrl || rawUrl.indexOf('YOUR_FORM_') !== -1 || !uuidMatch) {
                    widget.removeAttribute('data-booking-widget');
                    widget.innerHTML = '<div style="padding: 24px 16px; text-align: center; color: #b91c1c; background: #fef2f2; border: 1px solid #fecaca; border-radius: 12px; font-size: 14px; font-family: inherit;">' +
                        '<strong>Widget Configuration Missing</strong><br>' +
                        '<span style="display:inline-block; margin-top:6px; color:#4b5563; font-size:13px;">Please paste your Form Action URL at the start of this code in <code>MFC_FORM_ACTION_URL</code>.</span>' +
                        '</div>';
                    return;
                }

                var uuid = uuidMatch[0];
                var apiBase = 'https://staging.myformcapture.com';
                try {
                    var parsed = new URL(rawUrl);
                    apiBase = parsed.origin;
                } catch (e) { }

                var cleanSubmitUrl = apiBase + '/f/' + uuid;
                var slotsUrl = cleanSubmitUrl + '/slots';

                widget.setAttribute('data-form-uuid', uuid);
                widget.setAttribute('data-api-base', apiBase);
                widget.setAttribute('data-submit-url', cleanSubmitUrl);
                widget.setAttribute('data-slots-url', slotsUrl);
                widget.setAttribute('data-branding-name', 'MyFormConnect');
                widget.setAttribute('data-branding-url', 'https://myformconnect.io');

                if (typeof MFC_MEETING_TITLE !== 'undefined' && MFC_MEETING_TITLE) {
                    widget.setAttribute('data-meeting-title', MFC_MEETING_TITLE);
                }
                if (typeof MFC_MEETING_DESCRIPTION !== 'undefined' && MFC_MEETING_DESCRIPTION) {
                    widget.setAttribute('data-meeting-description', MFC_MEETING_DESCRIPTION);
                }
                if (typeof MFC_MEETING_DURATION !== 'undefined' && MFC_MEETING_DURATION) {
                    widget.setAttribute('data-meeting-duration', MFC_MEETING_DURATION);
                }
            })();
        </script>
    </div>

    <!-- 
      Helper script:
      Sends the widget's height to Wix so it fits naturally and avoids scrollbars.
    -->
    <script>
        (function () {
            // Check the current height of the widget and notify the parent Wix page
            function reportHeight() {
                var currentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                if (window.parent && window.parent !== window) {
                    window.parent.postMessage({
                        type: 'resize',
                        frameHeight: currentHeight,
                        height: currentHeight
                    }, '*');
                }
            }

            // Recalculate height whenever the page loads or the window is resized
            window.addEventListener('load', reportHeight);
            window.addEventListener('resize', reportHeight);

            // Keep height updated when switching steps (Date -> Time -> Details)
            if (window.ResizeObserver) {
                var observer = new ResizeObserver(function () {
                    reportHeight();
                });
                observer.observe(document.body);
            }

            // Periodic check to ensure height stays accurate as user interacts
            setInterval(reportHeight, 1000);

            // Makes sure the widget starts up properly even if loaded inside an iframe
            if (document.readyState === 'complete' || document.readyState === 'interactive') {
                setTimeout(function () {
                    document.dispatchEvent(new Event('DOMContentLoaded'));
                }, 50);
            }
        })();
    </script>
</body>

</html>
```

### 5. Adding the Widget to Wix
1. In your **Wix Editor**, click **+ Add Elements** -> **Embed** -> **Embed code**.
2. Position the element on your page (for example, on a dedicated "Book a Consultation" section).
3. Click **Settings** / **Enter Code**.
4. Paste the Booking Widget HTML code and click **Apply**.
5. Set the widget container's width to approximately **520px** or let it stretch to full-width in a responsive section column.

---

## Styling & Design Customization

Both snippets feature a clean CSS architecture controlled by three CSS custom properties at the top of the `<style>` tag:

```css
:root {
    --theme-color: #2563eb;               /* Primary buttons, selected dates, active focus border */
    --theme-hover: #1d4ed8;               /* Button hover state */
    --theme-glow:  rgba(37, 99, 235, 0.15); /* Soft focus ring and subtle highlight background */
}
```

### Color Palette Presets:

| Brand Style | `--theme-color` | `--theme-hover` | `--theme-glow` |
| :--- | :--- | :--- | :--- |
| **Vibrant Blue** (Default Widget) | `#2563eb` | `#1d4ed8` | `rgba(37, 99, 235, 0.15)` |
| **Eco / Forest Green** (Default Contact) | `#4D9B1B` | `#3F8416` | `rgba(77, 155, 27, 0.15)` |
| **Modern Slate / Dark** | `#0f172a` | `#1e293b` | `rgba(15, 23, 42, 0.12)` |
| **Violet / Purple** | `#7c3aed` | `#6d28d9` | `rgba(124, 58, 237, 0.15)` |
| **Amber / Warm Orange** | `#ea580c` | `#c2410c` | `rgba(234, 88, 12, 0.15)` |

### How Auto-Resizing Prevents Iframe Scrollbars:
Both snippets contain an embedded helper script:
```javascript
window.parent.postMessage({ type: 'resize', height: currentHeight }, '*');
```
Whenever a user interacts with the form—such as clicking from the calendar date view to time slots, or when a validation message expands—the widget reports its exact height to Wix, ensuring the container adjusts smoothly without cutting off content or displaying double scrollbars.

---

## Troubleshooting & FAQ

### 1. "Form Configuration Missing" error appears
- **Cause:** You haven't replaced the placeholder URL in `MFC_FORM_ACTION_URL`.
- **Solution:** Open the embed settings in Wix, replace `https://staging.myformcapture.com/f/YOUR_FORM_UUID` with your actual form URL from your MFC dashboard, and click **Apply**.

### 2. Form submission fails / CORS / Domain Restricted
- **Cause:** Wix's iframe origin was blocked because it is not listed in your whitelisted domains.
- **Solution:** 
  1. Look at your Wix Editor address bar to find your `metaSiteId` (see [Understanding Wix Embeds](#understanding-wix-embeds--domain-security)).
  2. In your MyFormConnect Dashboard, go to **Domains** -> your domain.
  3. Turn on the **Domain Restriction** toggle if it is off.
  4. In your **Whitelisted Domains** input field, add `https://<metaSiteId>.filesusr.com`.
  5. Click the **Update Form** button and wait for the changes to propagate.
  6. Test the form again.

### 3. Google Calendar invites are not being generated
- **Cause:** Calendar integration is not linked or team availability is not set.
- **Solution:**
  1. Verify your Google Calendar is active under **Settings** -> **Integrations**.
  2. Confirm your working hours are configured under **Team** -> **Team Settings**.
  3. Verify the form in MFC has the **Send Google Calendar invite** checkbox enabled.

### 4. How do I test the form safely?
- Submit a test inquiry through the form.
- Check your **MyFormConnect Dashboard** -> **Leads** to see the newly captured submission, AI summary, and lead history.
- Confirm you received the instant email notification.

---

## Still Need Help?

If your form is still not working or you encounter an unexpected issue:

- **Contact Support**: Reach out directly via the **[MyFormConnect Support Center](https://myformconnect.io/support)** or email **[support@myformconnect.io](mailto:support@myformconnect.io)**.
- **Community & Guides**: Explore our guides, API references, and form troubleshooting resources.

> 💡 **Tip for Faster Support:**  
> When contacting support, include a screenshot of the issue, your Wix site URL, your `MFC_FORM_ACTION_URL`, and any error messages shown in your browser's **Developer Tools Console** (F12) or **Network** tabs.

---

## Official Documentation & Links

- **MyFormConnect Dashboard**: [https://myformconnect.io/account/](https://myformconnect.io/account/)
- **Account Sign Up**: [https://myformconnect.io/users/sign_up](https://myformconnect.io/users/sign_up)
- **Documentation**: [https://myformconnect.io/docs/getting-started](https://myformconnect.io/docs/getting-started)
- **Support & Help Center**: [https://myformconnect.io/support](https://myformconnect.io/support)
