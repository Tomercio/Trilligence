// src/data/sources.js

const threatIntelligenceSources = [

  {
    name: "VirusTotal",
    url: "https://www.virustotal.com/",
    description: "File/domain/IP scanning and intelligence aggregation",
    category: "Analysis",
    apiDoc: "https://developers.virustotal.com/reference/overview",
    requiresApiKey: true
  },
  {
    name: "AbuseIPDB",
    url: "https://www.abuseipdb.com/",
    description: "IP address reputation lookup and reporting",
    category: "Analysis",
    apiDoc: "https://docs.abuseipdb.com/",
    requiresApiKey: true
  },
  {
    name: "Shodan",
    url: "https://www.shodan.io/",
    description: "Search engine for Internet-connected devices/services",
    category: "Asset Discovery",
    apiDoc: "https://developer.shodan.io/",
    requiresApiKey: true
  },
  {
    name: "Have I Been Pwned",
    url: "https://haveibeenpwned.com/",
    description: "Breach data lookup for compromised accounts",
    category: "Breach Data",
    apiDoc: "https://haveibeenpwned.com/API/v3",
    requiresApiKey: true
  },
  {
    name: "Hunter.io",
    url: "https://hunter.io/",
    description: "Find and verify email addresses by domain for OSINT/contact discovery",
    category: "Email Enrichment",
    apiDoc: "https://hunter.io/api-docs",
    requiresApiKey: true
  },
  {
    name: "URLhaus",
    url: "https://urlhaus.abuse.ch/",
    description: "Repository of malicious URLs for malware distribution",
    category: "Malware",
    apiDoc: "https://urlhaus-api.abuse.ch/",
    requiresApiKey: false
  },
  {
    name: "PhishTank",
    url: "https://www.phishtank.com/",
    description: "Community-driven phishing URL repository",
    category: "Phishing",
    apiDoc: "https://www.phishtank.com/developer_info.php",
    requiresApiKey: false
  },
  {
    name: "Spamhaus",
    url: "https://www.spamhaus.org/",
    description: "IP and domain blocklists for spam/malware",
    category: "Blocklist",
    apiDoc: "https://www.spamhaus.org/organization/faq/",
    requiresApiKey: false
  },
  {
    name: "Hunter.io",
    url: "https://hunter.io/",
    description: "Find and verify email addresses by domain for OSINT/contact discovery",
    category: "Email Enrichment",
    apiDoc: "https://hunter.io/api-docs",
    requiresApiKey: true
  },
  {
    name: "Wigle",
    url: "https://wigle.net/",
    description: "Search WiFi networks by SSID/BSSID with geolocation (physical OSINT)",
    category: "WiFi Recon",
    apiDoc: "https://api.wigle.net/",
    requiresApiKey: true
  },
  {
    name: "urlscan.io",
    url: "https://urlscan.io/",
    description: "Analyze and scan URLs for malicious content, get screenshots & metadata",
    category: "Threat Intelligence",
    apiDoc: "https://urlscan.io/about-api/",
    requiresApiKey: true
  },
  {
    name: "GreyNoise",
    url: "https://www.greynoise.io/",
    description: "Internet noise data to filter benign scanners",
    category: "Noise Filtering",
    apiDoc: "https://docs.greynoise.io/",
    requiresApiKey: true
  },
  {
    name: "ZoomEye",
    url: "https://www.zoomeye.org/",
    description: "Internet asset search engine for devices, services, vulnerabilities",
    category: "Asset Discovery",
    apiDoc: "https://www.zoomeye.org/api_doc", // verify URL
    requiresApiKey: true
  },
  {
    name: "LeakIX",
    url: "https://leakix.net/",
    description: "Search for exposed databases, misconfigured services, leaked content",
    category: "Threat Intelligence",
    apiDoc: "", // verify if API exists
    requiresApiKey: true
  },
  {
    name: "IntelX",
    url: "https://intelx.io/",
    description: "Search historic archives, leaked data, darknet, OSINT data repository",
    category: "OSINT",
    apiDoc: "https://intelx.io/apidoc",
    requiresApiKey: true
  },
  {
    name: "Netlas",
    url: "https://netlas.io/",
    description: "Attack surface management and asset discovery platform",
    category: "Attack Surface",
    apiDoc: "https://netlas.io/api", // verify URL
    requiresApiKey: true
  },
  {
    name: "Grep.app",
    url: "https://grep.app/",
    description: "Search code on public repositories for snippets, secrets, patterns",
    category: "Code Search",
    apiDoc: "",  // no public API documented
    requiresApiKey: false
  },
  {
    name: "Searchcode",
    url: "https://searchcode.com/",
    description: "Search for code snippets across many public code repositories",
    category: "Code Search",
    apiDoc: "", // if available
    requiresApiKey: false
  },
  {
    name: "PublicWWW",
    url: "https://publicwww.com/",
    description: "Search website source code for snippets, analytics tags, keys, libraries",
    category: "Code Search",
    apiDoc: "https://publicwww.com/api",
    requiresApiKey: true
  },
  {
    name: "FullHunt",
    url: "https://fullhunt.io/",
    description: "Attack surface management and asset discovery",
    category: "Attack Surface",
    apiDoc: "https://fullhunt.io/api", // verify URL
    requiresApiKey: true
  },


  {
    name: "crt.sh",
    url: "https://crt.sh/",
    description: "Search public Certificate Transparency logs to discover domains/subdomains",
    category: "Certificate Search",
    apiDoc: "", // no official API, but JSON endpoints exist via scraping
    requiresApiKey: false
  },
  {
    name: "Vulners",
    url: "https://vulners.com/",
    description: "Vulnerability intelligence search engine for CVEs, exploits",
    category: "Vulnerability",
    apiDoc: "https://vulners.com/api", // verify endpoint
    requiresApiKey: true
  },

  {
    name: "Phonebook.cz",
    url: "https://phonebook.cz/",
    description: "Passive DNS / domain lookup for OSINT investigations",
    category: "Threat Intelligence",
    apiDoc: "", // verify if any API
    requiresApiKey: false
  },
];

export default threatIntelligenceSources;
