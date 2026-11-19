/* =========================================================================
   WRITING SAMPLES — the single source of truth.

   The homepage cards, the filters and every case-study page read from this
   list. To add a sample, copy one object, change the values, and add a small
   HTML shell in /samples/ (see README, section C).

   Field guide
   - slug:        file name of the case-study page, without ".html"
   - status:      "published" shows the sample; "draft" hides it everywhere
   - industry:    one of the industry filter labels (new labels create new chips)
   - contentTypes: one or more content-type filter labels
   - liveUrl:     the published article; leave "" to hide the button
   - pdf:         path to a PDF copy (e.g. "assets/pdfs/my-file.pdf"); "" hides it
   - result:      a documented result ONLY; leave "" and the section is hidden
   ========================================================================= */

window.SAMPLES = [
  {
    slug: "singapore-gst-mistakes",
    status: "published",
    title: "Common GST Mistakes in Singapore: Input Tax Claims, Tax Invoices, Filing Errors, and How to Fix Them",
    client: "Corporate services and accounting firm",
    industry: "Accounting & Tax",
    market: "Singapore",
    contentTypes: ["Content Consolidation", "SEO/GEO Article"],
    published: "November 2026",
    liveUrl: "https://www.corporateservicessingapore.com/common-gst-mistakes-in-singapore-input-tax-claims-tax-invoices-filing-errors-and-how-to-fix-them/",
    pdf: "",
    cardSummary: "Three outdated GST posts merged into one current guide for business owners, checked line by line against IRAS.",
    primaryKeyword: "GST Singapore, GST return Singapore",
    searchIntent: "Informational, with some investigation (readers comparing how to correct an error)",
    wordCount: "About 4,000 words (published)",
    brief: "Merge three older posts on zero-rated GST for exporters, voluntary GST registration, and reverse charge and overseas vendor registration into one up-to-date article on common GST mistakes. The brief came with primary and secondary keywords, People Also Ask questions and a list of competitor articles to beat.",
    challenge: "The three source posts overlapped, and several of their figures and deadlines were out of date. The new piece had to cover registration, input tax, invoices, zero-rating, reverse charge and filing in one place without becoming a wall of rules.",
    workPerformed: [
      "Reviewed the three original posts and listed every figure that needed updating.",
      "Fact-checked the rules and thresholds against IRAS pages before writing the outline.",
      "Organised the article by where mistakes happen: registration, input tax claims, tax invoices, output tax and zero-rating, reverse charge, then filing and payment.",
      "Added a step-by-step section on how to fix a GST mistake, with a worked example of when to use each correction route.",
      "Rewrote the first draft to remove stiff, formulaic phrasing after benchmarking competing articles.",
      "Replaced secondary sources with primary ones, so the final list relies mainly on IRAS, plus the Ministry of Finance and GoBusiness."
    ],
    geoElements: [
      "Quick Answer box at the top",
      "Six Key Takeaways",
      "About a dozen tables, including worked examples and a do's and don'ts checklist",
      "Step-by-step correction section",
      "Six FAQs built from People Also Ask questions",
      "Numbered source list of around 20 references"
    ],
    constraints: [
      "Tax accuracy: every threshold, deadline and penalty had to match current IRAS guidance.",
      "Client approval of the outline before drafting.",
      "No competitor or marketing sites cited as evidence."
    ],
    byline: "Written by me for an agency client and published under the client's editorial byline.",
    result: ""
  },
  {
    slug: "corporate-secretary-roles-responsibilities",
    status: "published",
    title: "Roles and Responsibilities of a Corporate Secretary in Singapore: The Complete Guide",
    client: "Corporate services firm",
    industry: "Corporate Services",
    market: "Singapore",
    contentTypes: ["Content Consolidation", "SEO/GEO Article"],
    published: "October 2026",
    liveUrl: "https://www.corporateservicessingapore.com/roles-and-responsibilities-of-a-corporate-secretary-in-singapore-the-complete-guide/",
    pdf: "",
    cardSummary: "Two older posts combined into one complete guide to what a Singapore corporate secretary does, who can be one and what happens when duties are missed.",
    primaryKeyword: "roles and responsibilities of secretary",
    searchIntent: "Informational and investigational",
    wordCount: "About 2,700 words (published)",
    brief: "Combine two older posts, one on the role and qualifications of a corporate secretary and one on how secretarial services have changed, into a single complete guide. Research content gaps so the new article covers what the old ones missed.",
    challenge: "The target keyword is ambiguous: \"secretary\" can mean an office secretary as well as the statutory company officer. The guide had to serve the business reader while making that difference clear, and stay accurate to Singapore company law.",
    workPerformed: [
      "Researched what ranking pages covered and where the two old posts fell short.",
      "Built the outline around the questions business owners ask, such as who can be a corporate secretary and whether one is legally required.",
      "Added a comparison of corporate secretary, office secretary and administrative assistant to settle the keyword's double meaning.",
      "Set out the five core responsibilities, the key filing deadlines and what happens when duties are missed.",
      "Closed with an in-house versus outsourced comparison and what to check when choosing a provider."
    ],
    geoElements: [
      "Quick Answer box after the introduction",
      "Question-led H2 headings",
      "Six tables, including deadlines and consequences, private versus public company rules, and in-house versus outsourced",
      "Five FAQs",
      "Reference list built on ACRA pages and the Companies Act"
    ],
    constraints: [
      "Legal accuracy against ACRA guidance and the Companies Act.",
      "Keeping the guide readable for business owners rather than lawyers.",
      "Merging two existing URLs into one without losing what still served readers."
    ],
    byline: "Written by me for an agency client and published under the client's editorial byline.",
    result: ""
  },
  {
    slug: "thailand-dbd-biz-regist",
    status: "published",
    title: "DBD Biz Regist: What It Is and How to Register Your Thai Company Online",
    client: "Business consulting firm",
    industry: "Company Registration",
    market: "Thailand",
    contentTypes: ["SEO/GEO Article"],
    published: "October 2026",
    liveUrl: "https://www.relianceconsulting.co.th/dbd-biz-regist-what-it-is-and-how-to-register-your-thai-company-online/",
    pdf: "",
    cardSummary: "A new explainer on Thailand's online company registration system: what changed, what you need and the registration steps in order.",
    primaryKeyword: "DBD Biz Regist",
    searchIntent: "Informational, with commercial follow-through",
    wordCount: "About 1,800 words (published)",
    brief: "Write a new article on DBD Biz Regist, the Department of Business Development's online company registration platform, for founders and foreign business owners. Target 1,500 to 2,000 words, using the keywords, People Also Ask questions and sources supplied by the link builder.",
    challenge: "The topic was new, official information was spread across government portals and legal notes, and readers needed a practical answer: what changed, how the new system differs from the old e-Registration service, and what to prepare before applying.",
    workPerformed: [
      "Explained what DBD Biz Regist is and what changed when registration moved online.",
      "Compared the old e-Registration service with DBD Biz Regist side by side.",
      "Listed what to prepare first, including identity verification and company documents.",
      "Wrote the registration process as seven numbered steps, then covered timing, government fees, common rejection reasons and what to do after registering.",
      "Answered the questions foreign founders ask most, such as whether registration can be done without visiting Thailand."
    ],
    geoElements: [
      "Key Takeaways box at the top",
      "Question-led H2 headings throughout",
      "Comparison, timeline and cost tables",
      "Seven numbered steps, each with its own heading",
      "Five FAQs",
      "Numbered sources, including the DBD portals and law-firm notes"
    ],
    constraints: [
      "Regulatory accuracy on a system that had only recently changed.",
      "Keeping legal and procedural detail understandable for non-specialists.",
      "Staying within the 1,500 to 2,000 word brief."
    ],
    byline: "Written by me for an agency client and published under a byline chosen by the client.",
    result: ""
  },
  {
    slug: "weight-loss-surgery-vs-holistic-weight-management",
    status: "published",
    title: "Weight Loss Surgery vs. Holistic Weight Management: Which Option Is Right For You?",
    client: "Weight management programme provider",
    industry: "Health & Wellness",
    market: "Singapore",
    contentTypes: ["SEO/GEO Article"],
    published: "October 2026",
    liveUrl: "https://eurekawellness.sg/articles/weight-loss-surgery-vs-holistic-weight-management-which-option-is-right-for-you/",
    pdf: "",
    cardSummary: "A balanced, Singapore-specific comparison built around BMI eligibility, written under strict health-content rules and reviewed line by line by the client's founder.",
    primaryKeyword: "weight loss surgery, weight management",
    searchIntent: "Informational and comparison",
    wordCount: "About 4,000 words (published)",
    brief: "Write an onsite article comparing weight loss surgery with holistic weight management. The reference articles supplied were from hospitals in India, the US and the UAE, and the brief listed target keywords and LSI terms.",
    challenge: "Readers in Singapore needed to know which option was even open to them, which the overseas references could not answer. The topic is medically sensitive, so the article had to stay balanced, avoid any absolute health claims and never present one option as the default.",
    workPerformed: [
      "Proposed a Singapore angle: start from local BMI thresholds, so readers can see which options apply to them.",
      "Used Singapore health authorities and public hospitals for eligibility criteria and Asian BMI risk levels.",
      "Built a side-by-side comparison covering how each option works, typical results, costs, risks and long-term maintenance.",
      "Summarised long-term research on both paths in plain language, with each finding tied to its source.",
      "Revised the article across several review rounds with the client's founder, tightening transitions, terminology and neutral framing."
    ],
    geoElements: [
      "Quick Answer box",
      "Six Key Takeaways",
      "Question-led H2 headings",
      "BMI risk and care-options table, plus a nine-factor comparison table",
      "A short interpretation block that explains the table figures",
      "Nine FAQs",
      "Source list led by Singapore health authorities and hospitals"
    ],
    constraints: [
      "Health-content compliance: no absolute claims, careful modal wording, no medical-treatment framing for non-surgical programmes.",
      "Line-by-line review by the client's founder across several rounds.",
      "Presenting surgery and non-surgical care fairly, with referral to a doctor for medical decisions."
    ],
    byline: "Written by me for an agency client and published under the client's byline, with a review credit from the client's practitioner.",
    result: ""
  }
];
