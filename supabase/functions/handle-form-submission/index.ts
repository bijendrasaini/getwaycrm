import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const name = (body.name || "").trim();
    const company = (body.company || "").trim();
    const mobile = (body.mobile || "").trim();
    const email = (body.email || "").trim();
    const city = (body.city || "").trim();
    const state = (body.state || "").trim();
    const message = (body.message || "").trim();
    const source = (body.source || "Website").trim();
    const businessProfile = (body.businessProfile || "").trim();
    const interestArea = (body.interestArea || "").trim();
    const phone = (body.phone || "").trim();

    // 1. Send CRM webhook
    try {
      await fetch("https://www.getwaycrm.com/api/leads/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, mobile: mobile || phone, email, city, state, message, source }),
      });
    } catch (e) {
      console.error("CRM webhook error:", e);
    }

    // 2. Log admin alert
    try {
      const alertMsg = `New Lead Received\n\nName: ${name}\nMobile: ${mobile || phone}\nEmail: ${email}\nCity: ${city || state || "N/A"}\nSource: ${source}`;
      console.log("Admin alert:", alertMsg);
    } catch (e) {
      console.error("Alert error:", e);
    }

    // 3. Send notification emails
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");

    if (LOVABLE_API_KEY && SUPABASE_URL) {
      // Admin notification
      try {
        const adminEmailBody = `
          <h2>New Lead from GETWAY Website</h2>
          <p><strong>Source:</strong> ${source}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile || phone}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>City:</strong> ${city || "N/A"}</p>
          <p><strong>State:</strong> ${state || "N/A"}</p>
          ${businessProfile ? `<p><strong>Business Profile:</strong> ${businessProfile}</p>` : ""}
          ${interestArea ? `<p><strong>Interest Area:</strong> ${interestArea}</p>` : ""}
          <p><strong>Message:</strong> ${message || "N/A"}</p>
        `;

        // Send to both admin emails
        const adminEmails = ["ceo@getwaygroup.com", "getwayconnect@gmail.com"];
        for (const adminEmail of adminEmails) {
          await fetch(`${SUPABASE_URL}/functions/v1/send-transactional-email`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
            },
            body: JSON.stringify({
              to: adminEmail,
              subject: `New Lead from GETWAY Website — ${source}`,
              html: adminEmailBody,
            }),
          }).catch((e) => console.error("Admin email error:", e));
        }
      } catch (e) {
        console.error("Admin email error:", e);
      }

      // Auto-reply to user
      if (email) {
        try {
          const userEmailBody = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0d9488;">Thank you for contacting GETWAY</h2>
              <p>Hello${name ? ` ${name}` : ""},</p>
              <p>Thank you for your interest in GETWAY AI CRM.</p>
              <p>Our team has received your request and will contact you shortly.</p>
              <p>For quick assistance, connect with us on WhatsApp:</p>
              <p><a href="https://wa.me/919255522544" style="color: #25D366; font-weight: bold;">Chat on WhatsApp →</a></p>
              <br/>
              <p>Best Regards,<br/><strong>GETWAY Technology</strong><br/>connect@getway.in | +91 92555-22544</p>
            </div>
          `;

          await fetch(`${SUPABASE_URL}/functions/v1/send-transactional-email`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
            },
            body: JSON.stringify({
              to: email,
              subject: "Thank you for contacting GETWAY",
              html: userEmailBody,
            }),
          }).catch((e) => console.error("User email error:", e));
        } catch (e) {
          console.error("User email error:", e);
        }
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
