#!/usr/bin/env python3
"""
Combined: Build CytoRegenx WordPress WXR XML file.
Imports all page content from pt1-4 and assembles the XML.
"""
import sys, os
from datetime import datetime

# Import content from all the parts
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# Execute each part in this namespace
exec_globals = {'__name__': '__main__'}

# Execute pt1 first (sets up PAGES list, constants, HOME, ABOUT)
with open(os.path.join(os.path.dirname(__file__), 'build_wxr.py')) as f:
    exec(f.read(), exec_globals)

# pt2 (adds SERVICES, LAPL_EPIDURAL)
with open(os.path.join(os.path.dirname(__file__), 'build_wxr_pt2.py')) as f:
    exec(f.read(), exec_globals)

# pt3 adds BMSC_CONTENT, DERMATOGEN_CONTENT, RESEARCH_CONTENT variables
with open(os.path.join(os.path.dirname(__file__), 'build_wxr_pt3.py')) as f:
    exec(f.read(), exec_globals)

# pt4 adds CLINICIANS_CONTENT, CONTACT_CONTENT, NEWS_CONTENT
with open(os.path.join(os.path.dirname(__file__), 'build_wxr_pt4.py')) as f:
    exec(f.read(), exec_globals)

PAGES = exec_globals['PAGES']
BMSC_CONTENT = exec_globals['BMSC_CONTENT']
DERMATOGEN_CONTENT = exec_globals['DERMATOGEN_CONTENT']
RESEARCH_CONTENT = exec_globals['RESEARCH_CONTENT']
CLINICIANS_CONTENT = exec_globals['CLINICIANS_CONTENT']
CONTACT_CONTENT = exec_globals['CONTACT_CONTENT']
NEWS_CONTENT = exec_globals['NEWS_CONTENT']

# Append remaining pages
PAGES.append({
    "id": 1005, "slug": "bmsc-lapl-orthopedic",
    "title": "BMSC + LAPL for Orthopedic Use",
    "parent": 1003, "menu_order": 1, "content": BMSC_CONTENT, "template": "",
})
PAGES.append({
    "id": 1006, "slug": "dermatogen-wound-healing",
    "title": "DERMATOGEN® for Wound Healing",
    "parent": 1003, "menu_order": 2, "content": DERMATOGEN_CONTENT, "template": "",
})
PAGES.append({
    "id": 1007, "slug": "research-innovation",
    "title": "Research & Innovation",
    "parent": 0, "menu_order": 3, "content": RESEARCH_CONTENT, "template": "",
})
PAGES.append({
    "id": 1008, "slug": "for-clinicians",
    "title": "For Clinicians",
    "parent": 0, "menu_order": 4, "content": CLINICIANS_CONTENT, "template": "",
})
PAGES.append({
    "id": 1009, "slug": "news-updates",
    "title": "News & Updates",
    "parent": 0, "menu_order": 5, "content": NEWS_CONTENT, "template": "",
})
PAGES.append({
    "id": 1010, "slug": "contact-us",
    "title": "Contact Us",
    "parent": 0, "menu_order": 6, "content": CONTACT_CONTENT, "template": "",
})

print(f"Total pages to export: {len(PAGES)}")
for p in PAGES:
    print(f"  - [{p['id']}] {p['title']}  ({p['slug']})")

# --------- Build WXR XML ---------

SITE_URL = "https://cytoregenx.com"
SITE_TITLE = "CytoRegenx"
SITE_DESC = "Advancing medicine through laser-activated cell therapy"
AUTHOR_LOGIN = "116154pwpadmin"
AUTHOR_EMAIL = "info@cytoregenx.com"
AUTHOR_DISPLAY = "CytoRegenx Admin"

NOW = datetime.utcnow()
NOW_RFC = NOW.strftime("%a, %d %b %Y %H:%M:%S +0000")
NOW_DATE = NOW.strftime("%Y-%m-%d %H:%M:%S")


def cdata(s):
    """Wrap a string in CDATA safely. Break any embedded CDATA close."""
    if s is None:
        s = ""
    s = s.replace("]]>", "]]]]><![CDATA[>")
    return f"<![CDATA[{s}]]>"


# ----- NAV MENUS -----
# Main menu: Home | About | Services (with product children) | Research | For Clinicians | News | Contact
MAIN_MENU_ITEMS = [
    {"id": 2001, "title": "Home", "order": 1, "parent_menu_item": 0, "object_id": 1001, "object": "page", "url": f"{SITE_URL}/"},
    {"id": 2002, "title": "About", "order": 2, "parent_menu_item": 0, "object_id": 1002, "object": "page", "url": f"{SITE_URL}/about-cytoregenx/"},
    {"id": 2003, "title": "Our Services", "order": 3, "parent_menu_item": 0, "object_id": 1003, "object": "page", "url": f"{SITE_URL}/our-services/"},
    {"id": 2004, "title": "LAPL Epidural", "order": 4, "parent_menu_item": 2003, "object_id": 1004, "object": "page", "url": f"{SITE_URL}/lapl-epidural-lower-back-pain/"},
    {"id": 2005, "title": "BMSC Orthopedic", "order": 5, "parent_menu_item": 2003, "object_id": 1005, "object": "page", "url": f"{SITE_URL}/bmsc-lapl-orthopedic/"},
    {"id": 2006, "title": "DERMATOGEN® Wound", "order": 6, "parent_menu_item": 2003, "object_id": 1006, "object": "page", "url": f"{SITE_URL}/dermatogen-wound-healing/"},
    {"id": 2007, "title": "Research", "order": 7, "parent_menu_item": 0, "object_id": 1007, "object": "page", "url": f"{SITE_URL}/research-innovation/"},
    {"id": 2008, "title": "For Clinicians", "order": 8, "parent_menu_item": 0, "object_id": 1008, "object": "page", "url": f"{SITE_URL}/for-clinicians/"},
    {"id": 2009, "title": "News", "order": 9, "parent_menu_item": 0, "object_id": 1009, "object": "page", "url": f"{SITE_URL}/news-updates/"},
    {"id": 2010, "title": "Contact", "order": 10, "parent_menu_item": 0, "object_id": 1010, "object": "page", "url": f"{SITE_URL}/contact-us/"},
]

FOOTER_MENU_ITEMS = [
    {"id": 3001, "title": "About", "order": 1, "parent_menu_item": 0, "object_id": 1002, "object": "page", "url": f"{SITE_URL}/about-cytoregenx/"},
    {"id": 3002, "title": "Services", "order": 2, "parent_menu_item": 0, "object_id": 1003, "object": "page", "url": f"{SITE_URL}/our-services/"},
    {"id": 3003, "title": "Research", "order": 3, "parent_menu_item": 0, "object_id": 1007, "object": "page", "url": f"{SITE_URL}/research-innovation/"},
    {"id": 3004, "title": "For Clinicians", "order": 4, "parent_menu_item": 0, "object_id": 1008, "object": "page", "url": f"{SITE_URL}/for-clinicians/"},
    {"id": 3005, "title": "Contact", "order": 5, "parent_menu_item": 0, "object_id": 1010, "object": "page", "url": f"{SITE_URL}/contact-us/"},
]


def render_page_item(p):
    return f"""\t<item>
\t\t<title>{cdata(p['title'])}</title>
\t\t<link>{SITE_URL}/{p['slug']}/</link>
\t\t<pubDate>{NOW_RFC}</pubDate>
\t\t<dc:creator>{cdata(AUTHOR_LOGIN)}</dc:creator>
\t\t<guid isPermaLink="false">{SITE_URL}/?page_id={p['id']}</guid>
\t\t<description></description>
\t\t<content:encoded>{cdata(p['content'])}</content:encoded>
\t\t<excerpt:encoded>{cdata('')}</excerpt:encoded>
\t\t<wp:post_id>{p['id']}</wp:post_id>
\t\t<wp:post_date>{cdata(NOW_DATE)}</wp:post_date>
\t\t<wp:post_date_gmt>{cdata(NOW_DATE)}</wp:post_date_gmt>
\t\t<wp:post_modified>{cdata(NOW_DATE)}</wp:post_modified>
\t\t<wp:post_modified_gmt>{cdata(NOW_DATE)}</wp:post_modified_gmt>
\t\t<wp:comment_status>{cdata('closed')}</wp:comment_status>
\t\t<wp:ping_status>{cdata('closed')}</wp:ping_status>
\t\t<wp:post_name>{cdata(p['slug'])}</wp:post_name>
\t\t<wp:status>{cdata('publish')}</wp:status>
\t\t<wp:post_parent>{p['parent']}</wp:post_parent>
\t\t<wp:menu_order>{p['menu_order']}</wp:menu_order>
\t\t<wp:post_type>{cdata('page')}</wp:post_type>
\t\t<wp:post_password>{cdata('')}</wp:post_password>
\t\t<wp:is_sticky>0</wp:is_sticky>
\t\t<wp:postmeta>
\t\t\t<wp:meta_key>{cdata('_wp_page_template')}</wp:meta_key>
\t\t\t<wp:meta_value>{cdata(p.get('template','default'))}</wp:meta_value>
\t\t</wp:postmeta>
\t</item>
"""


def render_menu_item(item, menu_slug):
    return f"""\t<item>
\t\t<title>{cdata(item['title'])}</title>
\t\t<link>{SITE_URL}/</link>
\t\t<pubDate>{NOW_RFC}</pubDate>
\t\t<dc:creator>{cdata(AUTHOR_LOGIN)}</dc:creator>
\t\t<guid isPermaLink="false">{SITE_URL}/?p={item['id']}</guid>
\t\t<description></description>
\t\t<content:encoded>{cdata('')}</content:encoded>
\t\t<excerpt:encoded>{cdata('')}</excerpt:encoded>
\t\t<wp:post_id>{item['id']}</wp:post_id>
\t\t<wp:post_date>{cdata(NOW_DATE)}</wp:post_date>
\t\t<wp:post_date_gmt>{cdata(NOW_DATE)}</wp:post_date_gmt>
\t\t<wp:post_modified>{cdata(NOW_DATE)}</wp:post_modified>
\t\t<wp:post_modified_gmt>{cdata(NOW_DATE)}</wp:post_modified_gmt>
\t\t<wp:comment_status>{cdata('closed')}</wp:comment_status>
\t\t<wp:ping_status>{cdata('closed')}</wp:ping_status>
\t\t<wp:post_name>{cdata(str(item['id']))}</wp:post_name>
\t\t<wp:status>{cdata('publish')}</wp:status>
\t\t<wp:post_parent>0</wp:post_parent>
\t\t<wp:menu_order>{item['order']}</wp:menu_order>
\t\t<wp:post_type>{cdata('nav_menu_item')}</wp:post_type>
\t\t<wp:post_password>{cdata('')}</wp:post_password>
\t\t<wp:is_sticky>0</wp:is_sticky>
\t\t<category domain="nav_menu" nicename="{menu_slug}">{cdata(menu_slug)}</category>
\t\t<wp:postmeta><wp:meta_key>{cdata('_menu_item_type')}</wp:meta_key><wp:meta_value>{cdata('post_type')}</wp:meta_value></wp:postmeta>
\t\t<wp:postmeta><wp:meta_key>{cdata('_menu_item_menu_item_parent')}</wp:meta_key><wp:meta_value>{cdata(str(item['parent_menu_item']))}</wp:meta_value></wp:postmeta>
\t\t<wp:postmeta><wp:meta_key>{cdata('_menu_item_object_id')}</wp:meta_key><wp:meta_value>{cdata(str(item['object_id']))}</wp:meta_value></wp:postmeta>
\t\t<wp:postmeta><wp:meta_key>{cdata('_menu_item_object')}</wp:meta_key><wp:meta_value>{cdata(item['object'])}</wp:meta_value></wp:postmeta>
\t\t<wp:postmeta><wp:meta_key>{cdata('_menu_item_target')}</wp:meta_key><wp:meta_value>{cdata('')}</wp:meta_value></wp:postmeta>
\t\t<wp:postmeta><wp:meta_key>{cdata('_menu_item_classes')}</wp:meta_key><wp:meta_value>{cdata('a:1:{i:0;s:0:\"\";}')}</wp:meta_value></wp:postmeta>
\t\t<wp:postmeta><wp:meta_key>{cdata('_menu_item_xfn')}</wp:meta_key><wp:meta_value>{cdata('')}</wp:meta_value></wp:postmeta>
\t\t<wp:postmeta><wp:meta_key>{cdata('_menu_item_url')}</wp:meta_key><wp:meta_value>{cdata('')}</wp:meta_value></wp:postmeta>
\t</item>
"""


# ------ Assemble the whole WXR ------

xml = f"""<?xml version="1.0" encoding="UTF-8" ?>
<!-- Generated for CytoRegenx — WordPress-compatible WXR import file -->
<!-- Import via: Tools → Import → WordPress (install the WordPress Importer plugin) -->
<rss version="2.0"
\txmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
\txmlns:content="http://purl.org/rss/1.0/modules/content/"
\txmlns:wfw="http://wellformedweb.org/CommentAPI/"
\txmlns:dc="http://purl.org/dc/elements/1.1/"
\txmlns:wp="http://wordpress.org/export/1.2/"
>
<channel>
\t<title>{SITE_TITLE}</title>
\t<link>{SITE_URL}</link>
\t<description>{SITE_DESC}</description>
\t<pubDate>{NOW_RFC}</pubDate>
\t<language>en-US</language>
\t<wp:wxr_version>1.2</wp:wxr_version>
\t<wp:base_site_url>{SITE_URL}</wp:base_site_url>
\t<wp:base_blog_url>{SITE_URL}</wp:base_blog_url>

\t<wp:author>
\t\t<wp:author_id>1</wp:author_id>
\t\t<wp:author_login>{cdata(AUTHOR_LOGIN)}</wp:author_login>
\t\t<wp:author_email>{cdata(AUTHOR_EMAIL)}</wp:author_email>
\t\t<wp:author_display_name>{cdata(AUTHOR_DISPLAY)}</wp:author_display_name>
\t\t<wp:author_first_name>{cdata('')}</wp:author_first_name>
\t\t<wp:author_last_name>{cdata('')}</wp:author_last_name>
\t</wp:author>

\t<wp:category>
\t\t<wp:term_id>1</wp:term_id>
\t\t<wp:category_nicename>{cdata('uncategorized')}</wp:category_nicename>
\t\t<wp:category_parent>{cdata('')}</wp:category_parent>
\t\t<wp:cat_name>{cdata('Uncategorized')}</wp:cat_name>
\t</wp:category>

\t<wp:term>
\t\t<wp:term_id>100</wp:term_id>
\t\t<wp:term_taxonomy>nav_menu</wp:term_taxonomy>
\t\t<wp:term_slug>{cdata('main-menu')}</wp:term_slug>
\t\t<wp:term_name>{cdata('Main Menu')}</wp:term_name>
\t</wp:term>
\t<wp:term>
\t\t<wp:term_id>101</wp:term_id>
\t\t<wp:term_taxonomy>nav_menu</wp:term_taxonomy>
\t\t<wp:term_slug>{cdata('footer-menu')}</wp:term_slug>
\t\t<wp:term_name>{cdata('Footer Menu')}</wp:term_name>
\t</wp:term>

\t<generator>https://wordpress.org/?v=6.9.4</generator>
"""

# Add all pages
for p in PAGES:
    xml += render_page_item(p)

# Add menu items
for item in MAIN_MENU_ITEMS:
    xml += render_menu_item(item, "main-menu")
for item in FOOTER_MENU_ITEMS:
    xml += render_menu_item(item, "footer-menu")

xml += "</channel>\n</rss>\n"

# Write output
out_path = "/home/claude/cytoregenx/cytoregenx-new-site.xml"
with open(out_path, "w", encoding="utf-8") as f:
    f.write(xml)

print(f"\nWrote {out_path}")
print(f"Size: {os.path.getsize(out_path) / 1024:.1f} KB")
