#!/usr/bin/env python3
"""
Build a new WordPress-compatible WXR (eXtended RSS) XML file for CytoRegenx.
Uses modern Gutenberg blocks (theme-agnostic) so it imports cleanly into any WP theme.
"""
from datetime import datetime
from html import escape

SITE_URL = "https://cytoregenx.com"
SITE_TITLE = "CytoRegenx"
SITE_DESC = "Advancing medicine through laser-activated cell therapy"
AUTHOR_LOGIN = "116154pwpadmin"
AUTHOR_EMAIL = "info@cytoregenx.com"
NOW = datetime.utcnow()
NOW_STR = NOW.strftime("%a, %d %b %Y %H:%M:%S +0000")
NOW_DATE = NOW.strftime("%Y-%m-%d %H:%M:%S")

# ---------- Page content (Gutenberg blocks) ----------

PAGES = []

# ============ HOME PAGE ============
HOME_CONTENT = '''<!-- wp:cover {"dimRatio":60,"overlayColor":"black","minHeight":560,"minHeightUnit":"px","contentPosition":"center center","align":"full","style":{"color":{"gradient":"linear-gradient(135deg,rgb(14,44,64) 0%,rgb(10,77,100) 50%,rgb(15,111,143) 100%)"}}} -->
<div class="wp-block-cover alignfull" style="background:linear-gradient(135deg,rgb(14,44,64) 0%,rgb(10,77,100) 50%,rgb(15,111,143) 100%);min-height:560px"><span aria-hidden="true" class="wp-block-cover__background has-black-background-color has-background-dim-60 has-background-dim"></span><div class="wp-block-cover__inner-container">
<!-- wp:heading {"textAlign":"center","level":1,"style":{"typography":{"fontSize":"56px","fontWeight":"700","lineHeight":"1.1"},"color":{"text":"#ffffff"}}} -->
<h1 class="wp-block-heading has-text-align-center" style="color:#ffffff;font-size:56px;font-weight:700;line-height:1.1">Pioneering Cell-Based<br>Regenerative Therapies</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"20px","lineHeight":"1.6"},"color":{"text":"#e0f0f8"}}} -->
<p class="has-text-align-center" style="color:#e0f0f8;font-size:20px;line-height:1.6">Laser-activated platelet lysate and bone marrow stromal cell therapies<br>from an FDA-registered, cGMP-compliant facility — for chronic pain, orthopedic injury, and wound healing.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons">
<!-- wp:button {"backgroundColor":"white","textColor":"black","style":{"border":{"radius":"4px"},"typography":{"fontWeight":"600"},"spacing":{"padding":{"left":"32px","right":"32px","top":"16px","bottom":"16px"}}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-black-color has-white-background-color has-text-color has-background wp-element-button" href="/our-services/" style="border-radius:4px;padding-top:16px;padding-right:32px;padding-bottom:16px;padding-left:32px;font-weight:600">Explore Our Therapies</a></div>
<!-- /wp:button -->

<!-- wp:button {"textColor":"white","style":{"border":{"radius":"4px","width":"2px","color":"#ffffff"},"typography":{"fontWeight":"600"},"spacing":{"padding":{"left":"32px","right":"32px","top":"14px","bottom":"14px"}}},"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-white-color has-text-color has-border-color wp-element-button" href="/contact-us/" style="border-color:#ffffff;border-width:2px;border-radius:4px;padding-top:14px;padding-right:32px;padding-bottom:14px;padding-left:32px;font-weight:600">Contact Our Team</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->
</div></div>
<!-- /wp:cover -->

<!-- wp:spacer {"height":"60px"} -->
<div style="height:60px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:group {"align":"wide"} -->
<div class="wp-block-group alignwide">
<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":"40px","fontWeight":"700"}}} -->
<h2 class="wp-block-heading has-text-align-center" style="font-size:40px;font-weight:700">Healing Through Innovation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"18px","lineHeight":"1.7"}}} -->
<p class="has-text-align-center" style="font-size:18px;line-height:1.7">At CytoRegenx, we combine <strong>patented laser-activation technology</strong> with autologous cell biology to produce next-generation regenerative therapies. Our proprietary <strong>Laser Activated Platelet Lysate (LAPL)</strong> and <strong>Bone Marrow Stromal Cell (BMSC)</strong> products are manufactured under strict cGMP standards and delivered to clinicians nationwide.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->

<!-- wp:spacer {"height":"50px"} -->
<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":"34px"}}} -->
<h2 class="wp-block-heading has-text-align-center" style="font-size:34px">Our Therapies</h2>
<!-- /wp:heading -->

<!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide">
<!-- wp:column {"style":{"spacing":{"padding":{"top":"32px","right":"28px","bottom":"32px","left":"28px"}},"border":{"radius":"8px","width":"1px","color":"#e0e6eb"},"color":{"background":"#f7fafc"}}} -->
<div class="wp-block-column has-background" style="border-color:#e0e6eb;border-width:1px;border-radius:8px;background-color:#f7fafc;padding-top:32px;padding-right:28px;padding-bottom:32px;padding-left:28px">
<!-- wp:heading {"level":3,"style":{"color":{"text":"#0e2c40"}}} -->
<h3 class="wp-block-heading has-text-color" style="color:#0e2c40">LAPL Epidural Injection</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Advanced regenerative therapy for lower back pain. Laser-activated platelet lysate delivers high concentrations of neurotrophic factors (NGF, BDNF) for nerve regeneration — without steroids.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="/lapl-epidural-lower-back-pain/"><strong>Learn more →</strong></a></p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"top":"32px","right":"28px","bottom":"32px","left":"28px"}},"border":{"radius":"8px","width":"1px","color":"#e0e6eb"},"color":{"background":"#f7fafc"}}} -->
<div class="wp-block-column has-background" style="border-color:#e0e6eb;border-width:1px;border-radius:8px;background-color:#f7fafc;padding-top:32px;padding-right:28px;padding-bottom:32px;padding-left:28px">
<!-- wp:heading {"level":3,"style":{"color":{"text":"#0e2c40"}}} -->
<h3 class="wp-block-heading has-text-color" style="color:#0e2c40">BMSC + LAPL Orthopedic</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Bone Marrow Stromal Cells combined with LAPL for treatment of disc degeneration, osteoarthritis, and joint disease of the knee, shoulder, and elbow.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="/bmsc-lapl-orthopedic/"><strong>Learn more →</strong></a></p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"top":"32px","right":"28px","bottom":"32px","left":"28px"}},"border":{"radius":"8px","width":"1px","color":"#e0e6eb"},"color":{"background":"#f7fafc"}}} -->
<div class="wp-block-column has-background" style="border-color:#e0e6eb;border-width:1px;border-radius:8px;background-color:#f7fafc;padding-top:32px;padding-right:28px;padding-bottom:32px;padding-left:28px">
<!-- wp:heading {"level":3,"style":{"color":{"text":"#0e2c40"}}} -->
<h3 class="wp-block-heading has-text-color" style="color:#0e2c40">DERMATOGEN® Wound Healing</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A collagen + LAPL hydrogel for chronic and acute wound care. Accelerates healing of diabetic ulcers, venous leg ulcers, surgical incisions, burns, and trauma wounds.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="/dermatogen-wound-healing/"><strong>Learn more →</strong></a></p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:column -->
</div>
<!-- /wp:columns -->

<!-- wp:spacer {"height":"60px"} -->
<div style="height:60px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:group {"align":"full","style":{"color":{"background":"#0e2c40"},"spacing":{"padding":{"top":"70px","bottom":"70px","left":"32px","right":"32px"}}}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#0e2c40;padding-top:70px;padding-right:32px;padding-bottom:70px;padding-left:32px">
<!-- wp:heading {"textAlign":"center","style":{"color":{"text":"#ffffff"},"typography":{"fontSize":"34px"}}} -->
<h2 class="wp-block-heading has-text-align-center has-text-color" style="color:#ffffff;font-size:34px">Why CytoRegenx?</h2>
<!-- /wp:heading -->

<!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide">
<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:heading {"level":3,"textAlign":"center","style":{"color":{"text":"#7fd5ea"},"typography":{"fontSize":"48px","fontWeight":"700"}}} -->
<h3 class="wp-block-heading has-text-align-center has-text-color" style="color:#7fd5ea;font-size:48px;font-weight:700">FDA</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#e0f0f8"}}} -->
<p class="has-text-align-center has-text-color" style="color:#e0f0f8">Registered cGMP compliant cell processing facility</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:heading {"level":3,"textAlign":"center","style":{"color":{"text":"#7fd5ea"},"typography":{"fontSize":"48px","fontWeight":"700"}}} -->
<h3 class="wp-block-heading has-text-align-center has-text-color" style="color:#7fd5ea;font-size:48px;font-weight:700">Patented</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#e0f0f8"}}} -->
<p class="has-text-align-center has-text-color" style="color:#e0f0f8">Low-Level Laser activation of platelets for enhanced cytokine release</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:heading {"level":3,"textAlign":"center","style":{"color":{"text":"#7fd5ea"},"typography":{"fontSize":"48px","fontWeight":"700"}}} -->
<h3 class="wp-block-heading has-text-align-center has-text-color" style="color:#7fd5ea;font-size:48px;font-weight:700">Autologous</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#e0f0f8"}}} -->
<p class="has-text-align-center has-text-color" style="color:#e0f0f8">Derived from the patient's own blood and bone marrow — safe and natural</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:heading {"level":3,"textAlign":"center","style":{"color":{"text":"#7fd5ea"},"typography":{"fontSize":"48px","fontWeight":"700"}}} -->
<h3 class="wp-block-heading has-text-align-center has-text-color" style="color:#7fd5ea;font-size:48px;font-weight:700">Validated</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#e0f0f8"}}} -->
<p class="has-text-align-center has-text-color" style="color:#e0f0f8">Known cytokine profile, verified sterility, and endotoxin-tested</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:column -->
</div>
<!-- /wp:columns -->
</div>
<!-- /wp:group -->

<!-- wp:spacer {"height":"60px"} -->
<div style="height:60px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:group {"align":"wide"} -->
<div class="wp-block-group alignwide">
<!-- wp:columns -->
<div class="wp-block-columns">
<!-- wp:column {"width":"60%"} -->
<div class="wp-block-column" style="flex-basis:60%">
<!-- wp:heading {"style":{"typography":{"fontSize":"34px"}}} -->
<h2 class="wp-block-heading" style="font-size:34px">The Science of Laser Activation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"17px","lineHeight":"1.7"}}} -->
<p style="font-size:17px;line-height:1.7">Low-Level Laser (LLL) irradiation of platelets triggers exocytosis and the release of a rich cocktail of growth factors — including PDGF, TGF-β, IGF-I, VEGF, FGF, and ATP — at concentrations significantly higher than conventional PRP.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"17px","lineHeight":"1.7"}}} -->
<p style="font-size:17px;line-height:1.7">The result is an acellular, injectable product with amplified regenerative, anti-inflammatory, and neurotrophic potential. LAPL can be kept frozen for up to a year without losing potency, and integrates seamlessly into clinical workflows.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons">
<!-- wp:button {"backgroundColor":"vivid-cyan-blue","style":{"border":{"radius":"4px"}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-vivid-cyan-blue-background-color has-background wp-element-button" href="/research-innovation/" style="border-radius:4px">Research &amp; Innovation</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->
</div>
<!-- /wp:column -->

<!-- wp:column {"width":"40%"} -->
<div class="wp-block-column" style="flex-basis:40%">
<!-- wp:group {"style":{"color":{"background":"#eaf6fa"},"spacing":{"padding":{"top":"28px","right":"28px","bottom":"28px","left":"28px"}},"border":{"radius":"8px"}}} -->
<div class="wp-block-group has-background" style="border-radius:8px;background-color:#eaf6fa;padding-top:28px;padding-right:28px;padding-bottom:28px;padding-left:28px">
<!-- wp:heading {"level":4,"style":{"color":{"text":"#0e2c40"}}} -->
<h4 class="wp-block-heading has-text-color" style="color:#0e2c40">LAPL vs. Steroid Injection</h4>
<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->
<figure class="wp-block-table is-style-stripes"><table><thead><tr><th></th><th>Steroids</th><th>LAPL</th></tr></thead><tbody><tr><td>Anti-inflammation</td><td>✓</td><td>✓</td></tr><tr><td>Analgesic</td><td>—</td><td>✓</td></tr><tr><td>Nerve regeneration</td><td>—</td><td>✓</td></tr></tbody></table></figure>
<!-- /wp:table -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:column -->
</div>
<!-- /wp:columns -->
</div>
<!-- /wp:group -->

<!-- wp:spacer {"height":"70px"} -->
<div style="height:70px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:group {"align":"full","style":{"color":{"background":"#f7fafc"},"spacing":{"padding":{"top":"70px","bottom":"70px","left":"32px","right":"32px"}}}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#f7fafc;padding-top:70px;padding-right:32px;padding-bottom:70px;padding-left:32px">
<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":"34px"}}} -->
<h2 class="wp-block-heading has-text-align-center" style="font-size:34px">For Clinicians</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"18px"}}} -->
<p class="has-text-align-center" style="font-size:18px">Simple blood-draw workflow. Same-day shipping. Dedicated courier service throughout Orange County.<br>Prepaid labels for clinics nationwide.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons">
<!-- wp:button {"backgroundColor":"black","style":{"border":{"radius":"4px"}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-black-background-color has-background wp-element-button" href="/for-clinicians/" style="border-radius:4px">Clinician Resources</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->
</div>
<!-- /wp:group -->'''

PAGES.append({
    "id": 1001,
    "slug": "home",
    "title": "Home",
    "parent": 0,
    "menu_order": 0,
    "content": HOME_CONTENT,
    "template": "",
})

# ============ ABOUT ============
ABOUT_CONTENT = '''<!-- wp:cover {"dimRatio":50,"overlayColor":"black","minHeight":340,"minHeightUnit":"px","align":"full","style":{"color":{"gradient":"linear-gradient(135deg,rgb(14,44,64) 0%,rgb(15,111,143) 100%)"}}} -->
<div class="wp-block-cover alignfull" style="background:linear-gradient(135deg,rgb(14,44,64) 0%,rgb(15,111,143) 100%);min-height:340px"><span aria-hidden="true" class="wp-block-cover__background has-black-background-color has-background-dim-50 has-background-dim"></span><div class="wp-block-cover__inner-container">
<!-- wp:heading {"textAlign":"center","level":1,"style":{"typography":{"fontSize":"48px","fontWeight":"700"},"color":{"text":"#ffffff"}}} -->
<h1 class="wp-block-heading has-text-align-center has-text-color" style="color:#ffffff;font-size:48px;font-weight:700">About CytoRegenx</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"20px"},"color":{"text":"#e0f0f8"}}} -->
<p class="has-text-align-center has-text-color" style="color:#e0f0f8;font-size:20px">Advancing medicine through laser-activated cell therapy</p>
<!-- /wp:paragraph -->
</div></div>
<!-- /wp:cover -->

<!-- wp:spacer {"height":"60px"} -->
<div style="height:60px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:group {"align":"wide"} -->
<div class="wp-block-group alignwide">
<!-- wp:heading {"style":{"typography":{"fontSize":"38px"}}} -->
<h2 class="wp-block-heading" style="font-size:38px">Pioneering Cell-Based Health Therapies</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"18px","lineHeight":"1.75"}}} -->
<p style="font-size:18px;line-height:1.75">CytoRegenx is dedicated to advancing medicine through innovative cell-based health therapies. We specialize in using <strong>laser-activated platelet lysate</strong> and <strong>cGMP-produced stem cell</strong> products to help patients suffering from chronic debilitating diseases, orthopedic injuries, and non-healing wounds.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"18px","lineHeight":"1.75"}}} -->
<p style="font-size:18px;line-height:1.75">Our therapies begin with the patient's own biology — blood or bone marrow — and enhance it through our patented laser-activation process. The result is a safe, natural, and concentrated regenerative product with a validated cytokine profile, verified sterility, and proven shelf life.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->

<!-- wp:spacer {"height":"50px"} -->
<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:group {"align":"wide","style":{"color":{"background":"#f7fafc"},"spacing":{"padding":{"top":"50px","right":"40px","bottom":"50px","left":"40px"}},"border":{"radius":"8px"}}} -->
<div class="wp-block-group alignwide has-background" style="border-radius:8px;background-color:#f7fafc;padding-top:50px;padding-right:40px;padding-bottom:50px;padding-left:40px">
<!-- wp:heading {"style":{"typography":{"fontSize":"32px"}}} -->
<h2 class="wp-block-heading" style="font-size:32px">Our Trailblazing Achievements</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"17px","lineHeight":"1.7"}}} -->
<p style="font-size:17px;line-height:1.7">As a leader in the field of regenerative medicine, we have achieved several milestones that reflect our commitment to excellence:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"style":{"typography":{"fontSize":"17px","lineHeight":"1.8"}}} -->
<ul style="font-size:17px;line-height:1.8"><li><strong>Patented technology</strong> for laser activation of platelets</li><li><strong>Proprietary combination products</strong> — platelet lysate with stem cells for enhanced therapeutic potential</li><li><strong>FDA-registered, cGMP-compliant</strong> cell processing facility</li><li><strong>Validated products</strong> with known cytokine profile, sterility, and endotoxin testing</li><li><strong>Year-long stability</strong> — frozen products maintain potency without degradation</li></ul>
<!-- /wp:list -->
</div>
<!-- /wp:group -->

<!-- wp:spacer {"height":"60px"} -->
<div style="height:60px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":"34px"}}} -->
<h2 class="wp-block-heading has-text-align-center" style="font-size:34px">Our Core Therapies</h2>
<!-- /wp:heading -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide">
<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:heading {"level":3,"style":{"color":{"text":"#0a4d64"}}} -->
<h3 class="wp-block-heading has-text-color" style="color:#0a4d64">Bone Marrow Stromal Cells (BMSCs)</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Act as stem cells capable of creating bone, cartilage, and other tissues</li><li>Differentiate into osteocytes, chondrocytes, adipocytes, and fibroblasts — versatile for orthopedic repair</li><li>Can differentiate into nucleus pulposus cells and promote healing of spinal discs</li><li><strong>Promote healing of articular cartilage and spinal disc tissue</strong></li></ul>
<!-- /wp:list -->
</div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:heading {"level":3,"style":{"color":{"text":"#0a4d64"}}} -->
<h3 class="wp-block-heading has-text-color" style="color:#0a4d64">Laser Activated Platelet Lysate (LAPL)</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Made of concentrated platelets with plasma and blood cells removed</li><li>Rich in growth factors that stimulate tissue regeneration and reduce inflammation</li><li>Low-Level Laser activation enhances growth factor and ATP release</li><li><strong>Direct regenerative effects and synergistic action with BMSCs</strong></li></ul>
<!-- /wp:list -->
</div>
<!-- /wp:column -->
</div>
<!-- /wp:columns -->

<!-- wp:spacer {"height":"60px"} -->
<div style="height:60px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:group {"align":"full","style":{"color":{"background":"#0e2c40"},"spacing":{"padding":{"top":"60px","bottom":"60px","left":"32px","right":"32px"}}}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#0e2c40;padding-top:60px;padding-right:32px;padding-bottom:60px;padding-left:32px">
<!-- wp:heading {"textAlign":"center","style":{"color":{"text":"#ffffff"},"typography":{"fontSize":"32px"}}} -->
<h2 class="wp-block-heading has-text-align-center has-text-color" style="color:#ffffff;font-size:32px">Explore Our Services</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#e0f0f8"},"typography":{"fontSize":"18px"}}} -->
<p class="has-text-align-center has-text-color" style="color:#e0f0f8;font-size:18px">Our innovative cell-based health therapies are designed to deliver the best possible patient outcomes.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons">
<!-- wp:button {"backgroundColor":"white","textColor":"black","style":{"border":{"radius":"4px"}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-black-color has-white-background-color has-text-color has-background wp-element-button" href="/our-services/" style="border-radius:4px">Discover Our Services</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->
</div>
<!-- /wp:group -->'''

PAGES.append({
    "id": 1002,
    "slug": "about-cytoregenx",
    "title": "About CytoRegenx",
    "parent": 0,
    "menu_order": 1,
    "content": ABOUT_CONTENT,
    "template": "",
})

print(f"Built {len(PAGES)} pages so far")
